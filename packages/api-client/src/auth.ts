// Browser helpers for the gateway's /auth endpoints. These are served by the app's own Worker
// (`@heartstone/gateway`), not by the backend, so they are not in the OpenAPI contract.
import { apiErrorFromResponse, normaliseApiError } from "./errors.js";
import { correlationIdOf, createHeartStoneFetch, type FetchLike } from "./fetch.js";
import { resolveBaseUrl } from "./client.js";
import type { GatewaySession } from "./protocol.js";

export type { GatewaySession } from "./protocol.js";

export interface AuthEndpointsOptions {
  /** Prefix of the gateway auth routes. Defaults to `/auth`. */
  authBasePath?: string;
  fetch?: (input: Request) => Promise<Response>;
}

function authUrl(path: string, base = "/auth"): string {
  return resolveBaseUrl(`${base.replace(/\/$/, "")}${path}`);
}

export interface LoginUrlOptions {
  /** Same-origin path to land on after sign-in. The gateway ignores anything else. */
  returnTo?: string;
  /**
   * Ask the identity provider for a fresh sign-in (step-up after a `step-up-required` error).
   * The backend then sees a recent `auth_time` and the `amr`/`acr` of the new sign-in.
   */
  reauth?: boolean;
  authBasePath?: string;
}

/** URL that starts sign-in (a full-page navigation, not a fetch). */
export function loginUrl(options: LoginUrlOptions = {}): string {
  const base = `${(options.authBasePath ?? "/auth").replace(/\/$/, "")}/login`;
  const params = new URLSearchParams();
  if (options.returnTo) params.set("returnTo", options.returnTo);
  if (options.reauth) params.set("reauth", "1");
  const query = params.toString();
  return query ? `${base}?${query}` : base;
}

export interface RegisterUrlOptions {
  /** Same-origin path to land on after the new account signs in. */
  returnTo?: string;
  authBasePath?: string;
}

/**
 * URL that opens the identity provider's self-registration page (a full-page navigation). The new
 * account then signs in through the same callback as `loginUrl`.
 */
export function registerUrl(options: RegisterUrlOptions = {}): string {
  const base = `${(options.authBasePath ?? "/auth").replace(/\/$/, "")}/register`;
  const params = new URLSearchParams();
  if (options.returnTo) params.set("returnTo", options.returnTo);
  const query = params.toString();
  return query ? `${base}?${query}` : base;
}

/** URL that ends the identity-provider session too, when the provider supports it. */
export function providerLogoutUrl(authBasePath = "/auth"): string {
  return `${authBasePath.replace(/\/$/, "")}/logout/redirect`;
}

function fetcher(options: AuthEndpointsOptions): FetchLike {
  return createHeartStoneFetch(options.fetch ? { fetch: options.fetch } : {});
}

/** Reads the gateway session. Throws `HeartStoneApiError` on failure. */
export async function fetchSession(options: AuthEndpointsOptions = {}): Promise<GatewaySession> {
  const response = await fetcher(options)(
    new Request(authUrl("/session", options.authBasePath), {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    }),
  );
  if (!response.ok) throw await apiErrorFromResponse(response, correlationIdOf(response));
  let body: Partial<GatewaySession>;
  try {
    body = (await response.json()) as Partial<GatewaySession>;
  } catch {
    // Not the gateway (e.g. a static host or dev server answering with index.html).
    throw normaliseApiError(503, undefined, { correlationId: correlationIdOf(response) });
  }
  const session: GatewaySession = { authenticated: body.authenticated === true };
  if (session.authenticated) {
    if (typeof body.expiresAt === "string") session.expiresAt = body.expiresAt;
    if (typeof body.identityId === "string") session.identityId = body.identityId;
  }
  return session;
}

/** Ends the HeartStone session (backend revoke + cookie cleared). Throws on failure. */
export async function logout(options: AuthEndpointsOptions = {}): Promise<void> {
  const response = await fetcher(options)(
    new Request(authUrl("/logout", options.authBasePath), { method: "POST" }),
  );
  if (!response.ok) throw await apiErrorFromResponse(response, correlationIdOf(response));
}
