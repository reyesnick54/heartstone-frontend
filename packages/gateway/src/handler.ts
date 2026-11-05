// The app Worker's request handler. One gateway per persona app, same origin as the app:
//
//   GET  /auth/login?returnTo=/path   start OIDC Authorization Code + PKCE
//   GET  /auth/callback               finish it, open a backend session, set the session cookie
//   GET  /auth/session                { authenticated, expiresAt?, identityId? } (never the token)
//   POST /auth/logout                 revoke the backend session, clear the cookie (CSRF header)
//   GET  /auth/logout/redirect        end the identity-provider session, if it advertises one
//   *    /api/*                       proxy to BACKEND_ORIGIN with `Authorization: Bearer`
//   everything else                   static assets
//
// The backend session token lives only in an AES-GCM encrypted, httpOnly cookie. Browser
// JavaScript never sees it, and it is never logged.
import { isStepUpBody } from "@heartstone/api-client/errors";
import {
  CORRELATION_HEADER,
  CSRF_HEADER,
  CSRF_HEADER_VALUE,
  SIGNIN_ERROR_PARAM,
  type GatewaySession,
  type SignInErrorCode,
} from "@heartstone/api-client/protocol";
import { readConfig, type GatewayConfig, type GatewayEnv } from "./config.js";
import {
  OIDC_COOKIE,
  SESSION_COOKIE,
  clearCookie,
  parseCookies,
  serialiseCookie,
} from "./cookies.js";
import {
  codeChallengeS256,
  createCodeVerifier,
  openSealed,
  randomToken,
  seal,
  timingSafeEqual,
} from "./crypto.js";
import {
  OidcError,
  buildAuthorizationUrl,
  buildEndSessionUrl,
  discover,
  exchangeCode,
  verifyIdTokenClaims,
} from "./oidc.js";
import { safeReturnTo } from "./returnTo.js";

/** Backend absolute session lifetime (heartstone-backend: sessionAbsoluteTtlSeconds, 12 h). */
export const SESSION_ABSOLUTE_SECONDS = 12 * 60 * 60;
/** Lifetime of the sign-in transaction cookie. */
export const OIDC_TRANSACTION_SECONDS = 10 * 60;

const API_PREFIX = "/api/";
const BACKEND_LOGIN_OIDC = "/api/v1/identity/auth/login/oidc";
const BACKEND_LOGOUT = "/api/v1/identity/auth/logout";
/**
 * Backend routes that return a session token in the response body. Only the gateway may call
 * them; through the proxy they would hand the token to browser JavaScript.
 */
const BLOCKED_API_PREFIX = "/api/v1/identity/auth/login";

const PROXY_METHODS = new Set(["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"]);
const SAFE_METHODS = new Set(["GET", "HEAD"]);

/** Request headers forwarded to the backend. Everything else (Cookie, Authorization, …) is dropped. */
const FORWARDED_REQUEST_HEADERS = [
  "accept",
  "accept-language",
  "cache-control",
  "content-encoding",
  "content-language",
  "content-type",
  "idempotency-key",
  "if-match",
  "if-modified-since",
  "if-none-match",
  "if-unmodified-since",
  "range",
  "user-agent",
];

/** Response headers never passed back to the browser. */
const DROPPED_RESPONSE_HEADERS = [
  "set-cookie",
  "set-cookie2",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "trailer",
  "transfer-encoding",
  "upgrade",
];

const CORRELATION_ID = /^[A-Za-z0-9._:-]{8,128}$/;

export interface GatewayContext {
  waitUntil(promise: Promise<unknown>): void;
}

export interface GatewayLogger {
  warn(event: string, fields?: Record<string, unknown>): void;
  error(event: string, fields?: Record<string, unknown>): void;
}

export interface GatewayOptions {
  /** Serves static assets: the Worker's `ASSETS` binding (`(r) => env.ASSETS.fetch(r)`). */
  assetFetcher: (request: Request) => Promise<Response>;
  /** Outbound fetch for the identity provider and the backend. Defaults to `globalThis.fetch`. */
  fetch?: (request: Request) => Promise<Response>;
  /** Clock in milliseconds (tests). */
  now?: () => number;
  /** Structured logger. Fields never include tokens, codes or cookie values. */
  logger?: GatewayLogger;
}

interface SessionCookie {
  /** Backend session token. */
  t: string;
  /** Identity id. */
  i: string;
  exp: number;
}

interface OidcTransaction {
  state: string;
  nonce: string;
  verifier: string;
  returnTo: string;
  redirectUri: string;
  exp: number;
}

const consoleLogger: GatewayLogger = {
  warn: (event, fields) => console.warn(JSON.stringify({ level: "warn", event, ...fields })),
  error: (event, fields) => console.error(JSON.stringify({ level: "error", event, ...fields })),
};

interface Ctx {
  request: Request;
  url: URL;
  config: GatewayConfig;
  fetch: (request: Request) => Promise<Response>;
  now: number;
  log: GatewayLogger;
  waitUntil: (promise: Promise<unknown>) => void;
}

// ---------------------------------------------------------------------------------------------
// Responses

function baseHeaders(extra?: HeadersInit): Headers {
  const headers = new Headers(extra);
  headers.set("Cache-Control", "no-store");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "no-referrer");
  return headers;
}

function jsonResponse(
  status: number,
  body: unknown,
  init: { headers?: HeadersInit; cookies?: string[] } = {},
): Response {
  const headers = baseHeaders(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  for (const cookie of init.cookies ?? []) headers.append("Set-Cookie", cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

/** Error bodies use the backend's shape so the API client normalises them the same way. */
function errorResponse(
  status: number,
  error: string,
  message: string,
  code: string,
  cookies: string[] = [],
  extraHeaders?: HeadersInit,
): Response {
  const init: { headers?: HeadersInit; cookies?: string[] } = { cookies };
  if (extraHeaders) init.headers = extraHeaders;
  return jsonResponse(status, { statusCode: status, message, error, code }, init);
}

function redirect(location: string, cookies: string[] = []): Response {
  const headers = baseHeaders({ Location: location });
  for (const cookie of cookies) headers.append("Set-Cookie", cookie);
  return new Response(null, { status: 302, headers });
}

function signInError(code: SignInErrorCode, cookies: string[] = []): Response {
  return redirect(`/?${SIGNIN_ERROR_PARAM}=${code}`, cookies);
}

function methodNotAllowed(allow: string): Response {
  return errorResponse(405, "Method Not Allowed", "Method not allowed.", "METHOD_NOT_ALLOWED", [], {
    Allow: allow,
  });
}

// ---------------------------------------------------------------------------------------------
// Cookies

async function readSession(
  ctx: Pick<Ctx, "request" | "config" | "now">,
): Promise<{ session: SessionCookie; rotated: boolean } | null> {
  const raw = parseCookies(ctx.request.headers.get("Cookie")).get(SESSION_COOKIE);
  if (!raw) return null;
  const opened = await openSealed<SessionCookie>(raw, {
    keys: ctx.config.cookieKeys,
    purpose: SESSION_COOKIE,
    now: ctx.now,
  });
  if (!opened) return null;
  const { t, i } = opened.payload;
  if (typeof t !== "string" || !t || typeof i !== "string") return null;
  return { session: opened.payload, rotated: opened.rotated };
}

async function sessionCookie(ctx: Pick<Ctx, "config" | "now">, session: SessionCookie) {
  const value = await seal(
    { t: session.t, i: session.i },
    { key: ctx.config.cookieKeys[0] as string, purpose: SESSION_COOKIE, expiresAt: session.exp },
  );
  return serialiseCookie(SESSION_COOKIE, value, session.exp - Math.floor(ctx.now / 1000));
}

function hasCookie(request: Request, name: string): boolean {
  return parseCookies(request.headers.get("Cookie")).has(name);
}

// ---------------------------------------------------------------------------------------------
// Request checks

/**
 * CSRF defence for state-changing requests: the custom header (which a cross-origin page cannot
 * send without a CORS preflight that the gateway never grants), plus Origin and Fetch Metadata.
 * At least one of Origin or Sec-Fetch-Site must be present, and both must say same-origin.
 */
function csrfProblem(request: Request, url: URL): string | null {
  if (request.headers.get(CSRF_HEADER) !== CSRF_HEADER_VALUE) return "missing CSRF header";
  const origin = request.headers.get("Origin");
  const site = request.headers.get("Sec-Fetch-Site");
  if (!origin && !site) return "missing Origin and Sec-Fetch-Site";
  if (origin && origin !== url.origin) return "cross-origin Origin";
  if (site && site !== "same-origin") return "cross-site Sec-Fetch-Site";
  return null;
}

/** Any request to the API or session endpoints from another site is refused outright. */
function isCrossSite(request: Request): boolean {
  const site = request.headers.get("Sec-Fetch-Site");
  return site !== null && site !== "same-origin" && site !== "none";
}

function correlationIdFor(request: Request): string {
  const incoming = request.headers.get(CORRELATION_HEADER);
  return incoming && CORRELATION_ID.test(incoming) ? incoming : crypto.randomUUID();
}

function redirectUriFor(ctx: Pick<Ctx, "config" | "url">): string {
  return ctx.config.redirectUri ?? `${ctx.url.origin}/auth/callback`;
}

// ---------------------------------------------------------------------------------------------
// /auth/login

async function handleLogin(ctx: Ctx): Promise<Response> {
  const returnTo = safeReturnTo(ctx.url.searchParams.get("returnTo"), ctx.url.origin);
  let doc;
  try {
    doc = await discover(ctx.config.issuer, ctx.fetch, ctx.now);
  } catch (error) {
    ctx.log.error("oidc_discovery_failed", { reason: (error as Error).message });
    return signInError("unavailable");
  }

  const verifier = createCodeVerifier();
  const transaction: Omit<OidcTransaction, "exp"> = {
    state: randomToken(32),
    nonce: randomToken(32),
    verifier,
    returnTo,
    redirectUri: redirectUriFor(ctx),
  };
  const exp = Math.floor(ctx.now / 1000) + OIDC_TRANSACTION_SECONDS;
  const sealed = await seal(transaction, {
    key: ctx.config.cookieKeys[0] as string,
    purpose: OIDC_COOKIE,
    expiresAt: exp,
  });

  const location = new URL(
    buildAuthorizationUrl(doc, {
      clientId: ctx.config.clientId,
      redirectUri: transaction.redirectUri,
      state: transaction.state,
      nonce: transaction.nonce,
      codeChallenge: await codeChallengeS256(verifier),
    }),
  );
  // Step-up: `reauth=1` asks the provider for a fresh sign-in, which the backend sees as a recent
  // `auth_time` on the new session.
  if (ctx.url.searchParams.get("reauth") === "1") {
    location.searchParams.set("prompt", "login");
    location.searchParams.set("max_age", "0");
  }
  return redirect(location.toString(), [
    serialiseCookie(OIDC_COOKIE, sealed, OIDC_TRANSACTION_SECONDS),
  ]);
}

// ---------------------------------------------------------------------------------------------
// /auth/callback

async function handleCallback(ctx: Ctx): Promise<Response> {
  const params = ctx.url.searchParams;
  const clearOidc = clearCookie(OIDC_COOKIE);

  const raw = parseCookies(ctx.request.headers.get("Cookie")).get(OIDC_COOKIE);
  const opened = raw
    ? await openSealed<OidcTransaction>(raw, {
        keys: ctx.config.cookieKeys,
        purpose: OIDC_COOKIE,
        now: ctx.now,
      })
    : null;
  const tx = opened?.payload;
  const state = params.get("state");
  if (!tx || !state || typeof tx.state !== "string" || !timingSafeEqual(state, tx.state)) {
    ctx.log.warn("oidc_callback_state_invalid", { hasTransaction: Boolean(tx) });
    return signInError("expired", [clearOidc]);
  }

  const providerError = params.get("error");
  if (providerError) {
    ctx.log.warn("oidc_provider_error", { error: providerError.slice(0, 64) });
    return signInError(
      providerError === "access_denied" || providerError === "login_required"
        ? "cancelled"
        : "failed",
      [clearOidc],
    );
  }

  const code = params.get("code");
  if (!code) return signInError("failed", [clearOidc]);

  // RFC 9207 mix-up defence: when the provider names itself, it must be our issuer.
  const iss = params.get("iss");
  if (iss !== null && iss.replace(/\/+$/, "") !== ctx.config.issuer) {
    ctx.log.warn("oidc_callback_issuer_mismatch");
    return signInError("failed", [clearOidc]);
  }

  let accessToken: string;
  try {
    const doc = await discover(ctx.config.issuer, ctx.fetch, ctx.now);
    const tokens = await exchangeCode(
      doc,
      {
        code,
        codeVerifier: tx.verifier,
        redirectUri: tx.redirectUri,
        clientId: ctx.config.clientId,
        clientSecret: ctx.config.clientSecret,
      },
      ctx.fetch,
    );
    if (
      !tokens.id_token ||
      !verifyIdTokenClaims(tokens.id_token, {
        issuer: doc.issuer,
        clientId: ctx.config.clientId,
        nonce: tx.nonce,
        now: ctx.now,
      })
    ) {
      ctx.log.warn("oidc_id_token_rejected");
      return signInError("failed", [clearOidc]);
    }
    accessToken = tokens.access_token;
  } catch (error) {
    const reason = error instanceof OidcError ? error.message : "unexpected";
    ctx.log.error("oidc_token_exchange_failed", { reason });
    return signInError(reason.includes("unreachable") ? "unavailable" : "failed", [clearOidc]);
  }

  // Open the HeartStone session. The backend validates the access token's signature, issuer,
  // audience and MFA claims, and resolves the pre-linked identity.
  const correlationId = crypto.randomUUID();
  const body: { accessToken: string; providerCode?: string } = { accessToken };
  if (ctx.config.providerCode) body.providerCode = ctx.config.providerCode;
  let response: Response;
  try {
    response = await ctx.fetch(
      new Request(`${ctx.config.backendOrigin}${BACKEND_LOGIN_OIDC}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          [CORRELATION_HEADER]: correlationId,
          ...forwardedFor(ctx),
        },
        body: JSON.stringify(body),
        redirect: "manual",
      }),
    );
  } catch {
    ctx.log.error("backend_login_unreachable", { correlationId });
    return signInError("unavailable", [clearOidc]);
  }

  if (!response.ok) {
    let message = "";
    try {
      const json = (await response.json()) as { message?: unknown };
      message = typeof json.message === "string" ? json.message : "";
    } catch {
      // ignore
    }
    ctx.log.warn("backend_login_rejected", { status: response.status, correlationId });
    if (response.status === 401 && message.startsWith("No linked HeartStone identity")) {
      return signInError("not-linked", [clearOidc]);
    }
    return signInError(response.status >= 500 ? "unavailable" : "failed", [clearOidc]);
  }

  let login: { sessionToken?: unknown; identityId?: unknown };
  try {
    login = (await response.json()) as typeof login;
  } catch {
    login = {};
  }
  if (typeof login.sessionToken !== "string" || !login.sessionToken) {
    ctx.log.error("backend_login_malformed", { correlationId });
    return signInError("failed", [clearOidc]);
  }

  // A sign-in over an existing session (e.g. step-up) retires the old backend session.
  const previous = await readSession(ctx);
  if (previous && previous.session.t !== login.sessionToken) {
    ctx.waitUntil(revokeBackendSession(ctx, previous.session.t).catch(() => undefined));
  }

  const session: SessionCookie = {
    t: login.sessionToken,
    i: typeof login.identityId === "string" ? login.identityId : "",
    exp: Math.floor(ctx.now / 1000) + SESSION_ABSOLUTE_SECONDS,
  };
  return redirect(safeReturnTo(tx.returnTo, ctx.url.origin), [
    clearOidc,
    await sessionCookie(ctx, session),
  ]);
}

function forwardedFor(ctx: Pick<Ctx, "request" | "url">): Record<string, string> {
  const headers: Record<string, string> = {
    "X-Forwarded-Proto": ctx.url.protocol.replace(":", ""),
    "X-Forwarded-Host": ctx.url.host,
  };
  const ip = ctx.request.headers.get("CF-Connecting-IP");
  if (ip) headers["X-Forwarded-For"] = ip;
  return headers;
}

async function revokeBackendSession(ctx: Ctx, token: string): Promise<number> {
  const response = await ctx.fetch(
    new Request(`${ctx.config.backendOrigin}${BACKEND_LOGOUT}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        [CORRELATION_HEADER]: correlationIdFor(ctx.request),
        ...forwardedFor(ctx),
      },
      redirect: "manual",
    }),
  );
  return response.status;
}

// ---------------------------------------------------------------------------------------------
// /auth/session, /auth/logout, /auth/logout/redirect

async function handleSession(ctx: Ctx): Promise<Response> {
  const current = await readSession(ctx);
  if (!current) {
    const cookies = hasCookie(ctx.request, SESSION_COOKIE) ? [clearCookie(SESSION_COOKIE)] : [];
    const body: GatewaySession = { authenticated: false };
    return jsonResponse(200, body, { cookies });
  }
  const body: GatewaySession = {
    authenticated: true,
    expiresAt: new Date(current.session.exp * 1000).toISOString(),
  };
  if (current.session.i) body.identityId = current.session.i;
  const cookies = current.rotated ? [await sessionCookie(ctx, current.session)] : [];
  return jsonResponse(200, body, { cookies });
}

async function handleLogout(ctx: Ctx): Promise<Response> {
  const problem = csrfProblem(ctx.request, ctx.url);
  if (problem) {
    ctx.log.warn("csrf_rejected", { route: "logout", reason: problem });
    return errorResponse(403, "Forbidden", "Request blocked.", "CSRF_CHECK_FAILED");
  }
  const current = await readSession(ctx);
  if (current) {
    try {
      const status = await revokeBackendSession(ctx, current.session.t);
      if (status >= 400 && status !== 401) ctx.log.warn("backend_logout_failed", { status });
    } catch {
      // The cookie is still cleared: without it the browser cannot use the session, and the
      // backend ends it at the idle timeout.
      ctx.log.warn("backend_logout_unreachable");
    }
  }
  const headers = baseHeaders();
  headers.append("Set-Cookie", clearCookie(SESSION_COOKIE));
  return new Response(null, { status: 204, headers });
}

/**
 * Navigational sign-out from the identity provider, after `POST /auth/logout` has revoked the
 * HeartStone session. As a GET it cannot revoke anything server-side (no CSRF header), but it
 * still drops the local cookie so the browser never keeps a session the user tried to leave.
 * Without `id_token_hint` some providers (Keycloak) ask the user to confirm.
 */
async function handleProviderLogout(ctx: Ctx): Promise<Response> {
  const cookies = hasCookie(ctx.request, SESSION_COOKIE) ? [clearCookie(SESSION_COOKIE)] : [];
  try {
    const doc = await discover(ctx.config.issuer, ctx.fetch, ctx.now);
    const target = buildEndSessionUrl(doc, {
      clientId: ctx.config.clientId,
      postLogoutRedirectUri: `${ctx.url.origin}/`,
    });
    return redirect(target ?? "/", cookies);
  } catch {
    return redirect("/", cookies);
  }
}

// ---------------------------------------------------------------------------------------------
// /api/* proxy

async function handleApi(ctx: Ctx): Promise<Response> {
  const { request, url } = ctx;
  const method = request.method.toUpperCase();
  if (!PROXY_METHODS.has(method)) return methodNotAllowed([...PROXY_METHODS].join(", "));

  if (isCrossSite(request)) {
    ctx.log.warn("cross_site_api_rejected", { method });
    return errorResponse(403, "Forbidden", "Request blocked.", "CROSS_SITE_REQUEST");
  }
  if (!SAFE_METHODS.has(method)) {
    const problem = csrfProblem(request, url);
    if (problem) {
      ctx.log.warn("csrf_rejected", { route: "api", method, reason: problem });
      return errorResponse(403, "Forbidden", "Request blocked.", "CSRF_CHECK_FAILED");
    }
  }
  if (url.pathname.startsWith(BLOCKED_API_PREFIX)) {
    return errorResponse(403, "Forbidden", "Sign in through /auth/login.", "GATEWAY_ROUTE_BLOCKED");
  }

  const correlationId = correlationIdFor(request);
  const headers = new Headers();
  for (const name of FORWARDED_REQUEST_HEADERS) {
    const value = request.headers.get(name);
    if (value !== null) headers.set(name, value);
  }
  for (const [name, value] of Object.entries(forwardedFor(ctx))) headers.set(name, value);
  headers.set(CORRELATION_HEADER, correlationId);

  const current = await readSession(ctx);
  if (current) headers.set("Authorization", `Bearer ${current.session.t}`);

  const hasBody = !SAFE_METHODS.has(method) && request.body !== null;
  const init: RequestInit & { duplex?: "half" } = { method, headers, redirect: "manual" };
  if (hasBody) {
    init.body = request.body;
    init.duplex = "half";
  }

  let upstream: Response;
  try {
    upstream = await ctx.fetch(
      new Request(`${ctx.config.backendOrigin}${url.pathname}${url.search}`, init),
    );
  } catch {
    // Never retried here: a mutation may already have reached the backend.
    ctx.log.error("backend_unreachable", { method, correlationId });
    return errorResponse(
      502,
      "Bad Gateway",
      "The service could not be reached.",
      "BACKEND_UNREACHABLE",
      [],
      { [CORRELATION_HEADER]: correlationId },
    );
  }

  const responseHeaders = new Headers(upstream.headers);
  for (const name of DROPPED_RESPONSE_HEADERS) responseHeaders.delete(name);
  responseHeaders.set(CORRELATION_HEADER, correlationId);
  if (!responseHeaders.has("Cache-Control")) responseHeaders.set("Cache-Control", "no-store");
  responseHeaders.set("X-Content-Type-Options", "nosniff");

  let body: BodyInit | null = upstream.body;
  if (upstream.status === 401 && current) {
    // A step-up 401 keeps the session (the user re-authenticates); any other 401 means the
    // backend ended it (expired, idle, revoked), so the cookie goes too.
    const text = await upstream.text();
    body = text;
    let parsed: unknown = text;
    try {
      parsed = JSON.parse(text) as unknown;
    } catch {
      // keep text
    }
    if (!isStepUpBody(401, parsed)) {
      responseHeaders.append("Set-Cookie", clearCookie(SESSION_COOKIE));
    }
  } else if (current?.rotated) {
    responseHeaders.append("Set-Cookie", await sessionCookie(ctx, current.session));
  }
  if (method === "HEAD" || upstream.status === 204 || upstream.status === 304) body = null;

  return new Response(body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  });
}

// ---------------------------------------------------------------------------------------------
// Entry point

let reportedProblems = "";

/**
 * Handles one request for an app Worker. Paths outside `/auth/*` and `/api/*` go to
 * `options.assetFetcher`. A misconfigured gateway fails closed with 503 (JSON for `/api` and
 * `/auth/session`, a redirect with `signin_error=unavailable` for sign-in navigations).
 */
export async function handleGatewayRequest(
  request: Request,
  env: GatewayEnv,
  ctx: GatewayContext | undefined,
  options: GatewayOptions,
): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;
  const isAuth = path === "/auth" || path.startsWith("/auth/");
  const isApi = path.startsWith(API_PREFIX);
  if (!isAuth && !isApi) return options.assetFetcher(request);

  const log = options.logger ?? consoleLogger;
  const result = readConfig(env);
  if (!result.ok) {
    const key = result.problems.join("|");
    if (key !== reportedProblems) {
      reportedProblems = key;
      log.error("gateway_not_configured", { problems: result.problems });
    }
    if (isAuth && request.method === "GET" && path !== "/auth/session") {
      return signInError("unavailable");
    }
    return errorResponse(
      503,
      "Service Unavailable",
      "Sign-in and the API are not configured for this deployment.",
      "GATEWAY_NOT_CONFIGURED",
    );
  }

  const fetchImpl = options.fetch ?? ((r: Request) => globalThis.fetch(r));
  const c: Ctx = {
    request,
    url,
    config: result.config,
    fetch: fetchImpl,
    now: (options.now ?? Date.now)(),
    log,
    waitUntil: (p) => (ctx ? ctx.waitUntil(p) : void p),
  };

  if (isApi) return handleApi(c);

  if (path === "/auth/session" && isCrossSite(request)) {
    return errorResponse(403, "Forbidden", "Request blocked.", "CROSS_SITE_REQUEST");
  }

  const method = request.method.toUpperCase();
  switch (path) {
    case "/auth/login":
      return method === "GET" ? handleLogin(c) : methodNotAllowed("GET");
    case "/auth/callback":
      return method === "GET" ? handleCallback(c) : methodNotAllowed("GET");
    case "/auth/session":
      return method === "GET" ? handleSession(c) : methodNotAllowed("GET");
    case "/auth/logout":
      return method === "POST" ? handleLogout(c) : methodNotAllowed("POST");
    case "/auth/logout/redirect":
      return method === "GET" ? handleProviderLogout(c) : methodNotAllowed("GET");
    default:
      return errorResponse(404, "Not Found", "Not found.", "NOT_FOUND");
  }
}
