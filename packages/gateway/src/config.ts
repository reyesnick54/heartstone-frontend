import { isValidCookieKey } from "./crypto.js";

/**
 * Worker variables and secrets read by the gateway (docs/deployment.md, "Gateway").
 * Values are strings because that is how Workers deliver `vars` and secrets.
 */
export interface GatewayEnv {
  /** Backend origin, e.g. `https://api.staging.example`. No path: `/api/v1` is part of each request. */
  BACKEND_ORIGIN?: string;
  /** OIDC issuer; discovery is read from `<issuer>/.well-known/openid-configuration`. */
  OIDC_ISSUER?: string;
  OIDC_CLIENT_ID?: string;
  /** Secret. Omit for a public client (PKCE only). */
  OIDC_CLIENT_SECRET?: string;
  /** Sent as `providerCode` to the backend when several identity providers are configured. */
  OIDC_PROVIDER_CODE?: string;
  /** Defaults to `<request origin>/auth/callback`. */
  OIDC_REDIRECT_URI?: string;
  /** Secret. Base64 of 32 random bytes (AES-256-GCM key for the gateway cookies). */
  SESSION_COOKIE_KEY?: string;
  /** Secret, optional. The previous key during rotation: still accepted, never used to encrypt. */
  SESSION_COOKIE_KEY_PREVIOUS?: string;
}

export interface GatewayConfig {
  backendOrigin: string;
  issuer: string;
  clientId: string;
  clientSecret: string | undefined;
  providerCode: string | undefined;
  redirectUri: string | undefined;
  /** Current key first. */
  cookieKeys: string[];
}

export type ConfigResult = { ok: true; config: GatewayConfig } | { ok: false; problems: string[] };

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

/** https only, except plain http to a local host for `wrangler dev`. */
function parseOrigin(value: string | undefined): URL | undefined {
  if (!value) return undefined;
  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    return undefined;
  }
  if (url.username || url.password) return undefined;
  if (url.protocol === "https:") return url;
  if (url.protocol === "http:" && LOCAL_HOSTS.has(url.hostname)) return url;
  return undefined;
}

/**
 * Validates the environment. Problems name the variable, never its value. A gateway with any
 * problem fails closed: its routes answer 503 rather than run half-configured.
 */
export function readConfig(env: GatewayEnv): ConfigResult {
  const problems: string[] = [];

  const backend = parseOrigin(env.BACKEND_ORIGIN);
  if (!backend) problems.push("BACKEND_ORIGIN must be an https origin");
  else if (backend.pathname !== "/" || backend.search || backend.hash) {
    problems.push("BACKEND_ORIGIN must be an origin without a path");
  }

  const issuer = parseOrigin(env.OIDC_ISSUER);
  if (!issuer) problems.push("OIDC_ISSUER must be an https URL");

  const clientId = env.OIDC_CLIENT_ID?.trim();
  if (!clientId) problems.push("OIDC_CLIENT_ID is required");

  const redirect = env.OIDC_REDIRECT_URI?.trim();
  if (redirect && !parseOrigin(redirect)) problems.push("OIDC_REDIRECT_URI must be an https URL");

  if (!isValidCookieKey(env.SESSION_COOKIE_KEY)) {
    problems.push("SESSION_COOKIE_KEY must be base64 of exactly 32 bytes");
  }
  const previous = env.SESSION_COOKIE_KEY_PREVIOUS?.trim();
  if (previous && !isValidCookieKey(previous)) {
    problems.push("SESSION_COOKIE_KEY_PREVIOUS must be base64 of exactly 32 bytes");
  }

  if (problems.length > 0 || !backend || !issuer || !clientId) return { ok: false, problems };

  return {
    ok: true,
    config: {
      backendOrigin: backend.origin,
      issuer: issuer.toString().replace(/\/$/, ""),
      clientId,
      clientSecret: env.OIDC_CLIENT_SECRET?.trim() || undefined,
      providerCode: env.OIDC_PROVIDER_CODE?.trim() || undefined,
      redirectUri: redirect || undefined,
      cookieKeys: [env.SESSION_COOKIE_KEY as string, ...(previous ? [previous] : [])],
    },
  };
}
