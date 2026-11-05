// Test harness: a fake OIDC provider and HeartStone backend behind one injected fetch.
import { base64UrlEncode } from "../crypto";
import type { GatewayEnv } from "../config";
import { handleGatewayRequest, type GatewayLogger } from "../handler";
import { clearDiscoveryCache } from "../oidc";

export const APP = "https://citizen.example.test";
export const ISSUER = "https://id.example.test/realms/heartstone";
export const BACKEND = "https://api.example.test";
export const NOW = Date.parse("2026-11-05T10:00:00Z");

export function key(fill: number): string {
  return btoa(String.fromCharCode(...new Uint8Array(32).fill(fill)));
}

export const KEY_A = key(1);
export const KEY_B = key(2);

/** Test env; an override set to `undefined` removes that variable. */
export function baseEnv(
  overrides: { [K in keyof GatewayEnv]?: string | undefined } = {},
): GatewayEnv {
  const merged: Record<string, string | undefined> = {
    BACKEND_ORIGIN: BACKEND,
    OIDC_ISSUER: ISSUER,
    OIDC_CLIENT_ID: "heartstone-citizen",
    OIDC_CLIENT_SECRET: "s3cret",
    OIDC_PROVIDER_CODE: "keycloak",
    SESSION_COOKIE_KEY: KEY_A,
    ...overrides,
  };
  const env: Record<string, string> = {};
  for (const [k, v] of Object.entries(merged)) if (v !== undefined) env[k] = v;
  return env as GatewayEnv;
}

export function jwt(claims: Record<string, unknown>): string {
  const enc = (o: unknown) => base64UrlEncode(new TextEncoder().encode(JSON.stringify(o)));
  return `${enc({ alg: "RS256", typ: "JWT" })}.${enc(claims)}.c2ln`;
}

export interface Recorded {
  url: string;
  method: string;
  headers: Headers;
  body: string;
}

export interface Fakes {
  discovery: Record<string, unknown>;
  /** Override to change the token endpoint's reply. */
  token: (form: URLSearchParams, req: Recorded) => Response;
  /** Override to change the backend's reply. */
  backend: (req: Recorded) => Response | Promise<Response>;
  calls: Recorded[];
  /** Nonce the fake token endpoint puts in the ID token (set from the authorize redirect). */
  nonce: string | undefined;
}

export function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

export function createFakes(): Fakes {
  const fakes: Fakes = {
    discovery: {
      issuer: ISSUER,
      authorization_endpoint: `${ISSUER}/protocol/openid-connect/auth`,
      token_endpoint: `${ISSUER}/protocol/openid-connect/token`,
      end_session_endpoint: `${ISSUER}/protocol/openid-connect/logout`,
      code_challenge_methods_supported: ["plain", "S256"],
      token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post"],
    },
    calls: [],
    nonce: undefined,
    token: () =>
      json({
        access_token: "idp-access-token",
        token_type: "Bearer",
        id_token: jwt({
          iss: ISSUER,
          aud: "heartstone-citizen",
          exp: NOW / 1000 + 300,
          nonce: fakes.nonce,
        }),
      }),
    backend: (req) => {
      if (req.url === `${BACKEND}/api/v1/identity/auth/login/oidc`) {
        return json(
          {
            sessionToken: "hs-session-token",
            sessionId: "sess-1",
            identityId: "identity-1",
            expiresAt: "2026-11-05T10:30:00.000Z",
            assuranceLevel: "MEDIUM",
            authMethod: "OIDC",
            mfaSatisfied: true,
            oidcProviderCode: "keycloak",
            authenticatedAt: "2026-11-05T10:00:00.000Z",
          },
          201,
        );
      }
      if (req.url === `${BACKEND}/api/v1/identity/auth/logout`) return json({}, 200);
      return json({ ok: true, path: new URL(req.url).pathname });
    },
  };
  return fakes;
}

export function fakeFetch(fakes: Fakes) {
  return async (request: Request): Promise<Response> => {
    const recorded: Recorded = {
      url: request.url,
      method: request.method,
      headers: new Headers(request.headers),
      body: request.body ? await request.text() : "",
    };
    fakes.calls.push(recorded);
    if (request.url === `${ISSUER}/.well-known/openid-configuration`) return json(fakes.discovery);
    if (request.url === fakes.discovery["token_endpoint"]) {
      return fakes.token(new URLSearchParams(recorded.body), recorded);
    }
    if (request.url.startsWith(BACKEND)) return fakes.backend(recorded);
    throw new TypeError(`unexpected fetch ${request.url}`);
  };
}

export interface Harness {
  fakes: Fakes;
  assets: ReturnType<typeof vi.fn>;
  logs: { level: string; event: string; fields?: Record<string, unknown> }[];
  waited: Promise<unknown>[];
  send: (
    path: string,
    init?: RequestInit & { cookies?: Record<string, string> },
    env?: GatewayEnv,
  ) => Promise<Response>;
  now: { value: number };
}

export function createHarness(env: GatewayEnv = baseEnv()): Harness {
  clearDiscoveryCache();
  const fakes = createFakes();
  const assets = vi.fn(async (request: Request) => {
    void request;
    return new Response("asset", { status: 200 });
  });
  const logs: Harness["logs"] = [];
  const logger: GatewayLogger = {
    warn: (event, fields) => logs.push({ level: "warn", event, ...(fields ? { fields } : {}) }),
    error: (event, fields) => logs.push({ level: "error", event, ...(fields ? { fields } : {}) }),
  };
  const waited: Promise<unknown>[] = [];
  const now = { value: NOW };
  const send: Harness["send"] = (path, init = {}, envOverride = env) => {
    const { cookies, ...rest } = init;
    const headers = new Headers(rest.headers);
    if (cookies) {
      headers.set(
        "Cookie",
        Object.entries(cookies)
          .map(([k, v]) => `${k}=${v}`)
          .join("; "),
      );
    }
    const request = new Request(`${APP}${path}`, { ...rest, headers });
    return handleGatewayRequest(
      request,
      envOverride,
      { waitUntil: (p) => void waited.push(p) },
      { assetFetcher: assets, fetch: fakeFetch(fakes), now: () => now.value, logger },
    );
  };
  return { fakes, assets, logs, waited, send, now };
}

/** Extracts `name=value` from the response's Set-Cookie headers. */
export function setCookie(response: Response, name: string): string | undefined {
  for (const line of response.headers.getSetCookie()) {
    if (line.startsWith(`${name}=`)) return line;
  }
  return undefined;
}

export function cookieValue(line: string | undefined): string {
  return line ? (line.split(";")[0] as string).slice(line.indexOf("=") + 1) : "";
}
