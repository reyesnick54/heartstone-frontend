// Provider-neutral OpenID Connect relying-party pieces: discovery, the authorization request, the
// token exchange and the ID-token checks this flow needs. Works with any issuer that publishes
// `/.well-known/openid-configuration` (Keycloak is the planned provider).

export interface DiscoveryDocument {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  end_session_endpoint?: string;
  code_challenge_methods_supported?: string[];
  token_endpoint_auth_methods_supported?: string[];
}

const DISCOVERY_TTL_MS = 60 * 60 * 1000;
const discoveryCache = new Map<string, { doc: DiscoveryDocument; fetchedAt: number }>();

/** For tests, and after an issuer's configuration changes. */
export function clearDiscoveryCache(): void {
  discoveryCache.clear();
}

export class OidcError extends Error {
  override readonly name = "OidcError";
}

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

function isAllowedEndpoint(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || (url.protocol === "http:" && LOCAL_HOSTS.has(url.hostname));
  } catch {
    return false;
  }
}

const stripSlash = (s: string) => s.replace(/\/+$/, "");

/**
 * Reads the issuer's discovery document, cached per isolate for an hour. The document's `issuer`
 * must equal the configured issuer (OIDC Discovery §4.3), and the endpoints must be https.
 */
export async function discover(
  issuer: string,
  fetchImpl: (req: Request) => Promise<Response>,
  now: number,
): Promise<DiscoveryDocument> {
  const cached = discoveryCache.get(issuer);
  if (cached && now - cached.fetchedAt < DISCOVERY_TTL_MS) return cached.doc;

  const url = `${stripSlash(issuer)}/.well-known/openid-configuration`;
  let response: Response;
  try {
    response = await fetchImpl(new Request(url, { headers: { Accept: "application/json" } }));
  } catch {
    throw new OidcError("discovery unreachable");
  }
  if (!response.ok) throw new OidcError(`discovery returned ${response.status}`);
  let doc: Partial<DiscoveryDocument>;
  try {
    doc = (await response.json()) as Partial<DiscoveryDocument>;
  } catch {
    throw new OidcError("discovery is not JSON");
  }
  if (typeof doc.issuer !== "string" || stripSlash(doc.issuer) !== stripSlash(issuer)) {
    throw new OidcError("discovery issuer mismatch");
  }
  if (!isAllowedEndpoint(doc.authorization_endpoint) || !isAllowedEndpoint(doc.token_endpoint)) {
    throw new OidcError("discovery endpoints missing or not https");
  }
  if (
    Array.isArray(doc.code_challenge_methods_supported) &&
    !doc.code_challenge_methods_supported.includes("S256")
  ) {
    throw new OidcError("issuer does not support PKCE S256");
  }
  const result: DiscoveryDocument = {
    issuer: doc.issuer,
    authorization_endpoint: doc.authorization_endpoint,
    token_endpoint: doc.token_endpoint,
  };
  if (isAllowedEndpoint(doc.end_session_endpoint)) {
    result.end_session_endpoint = doc.end_session_endpoint;
  }
  if (Array.isArray(doc.token_endpoint_auth_methods_supported)) {
    result.token_endpoint_auth_methods_supported = doc.token_endpoint_auth_methods_supported;
  }
  discoveryCache.set(issuer, { doc: result, fetchedAt: now });
  return result;
}

export const OIDC_SCOPE = "openid profile email";

export function buildAuthorizationUrl(
  doc: DiscoveryDocument,
  params: {
    clientId: string;
    redirectUri: string;
    state: string;
    nonce: string;
    codeChallenge: string;
  },
): string {
  const url = new URL(doc.authorization_endpoint);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", params.clientId);
  url.searchParams.set("redirect_uri", params.redirectUri);
  url.searchParams.set("scope", OIDC_SCOPE);
  url.searchParams.set("state", params.state);
  url.searchParams.set("nonce", params.nonce);
  url.searchParams.set("code_challenge", params.codeChallenge);
  url.searchParams.set("code_challenge_method", "S256");
  return url.toString();
}

/**
 * The provider's self-registration URL for a sign-in request built by `buildAuthorizationUrl`.
 * Keycloak (an issuer path containing `/realms/`) serves registration at
 * `…/protocol/openid-connect/registrations`, taking the same query parameters as `…/auth`. Any
 * other provider gets the authorization endpoint with `prompt=create` (OpenID Connect Prompt
 * Create), which providers that do not support it ignore, showing their normal sign-in page.
 */
export function toRegistrationUrl(authorizationUrl: string, issuer: string): string {
  const url = new URL(authorizationUrl);
  let issuerPath = "";
  try {
    issuerPath = new URL(issuer).pathname;
  } catch {
    // not a URL: treat as a non-Keycloak issuer
  }
  if (issuerPath.includes("/realms/") && /\/auth\/?$/.test(url.pathname)) {
    url.pathname = url.pathname.replace(/\/auth\/?$/, "/registrations");
  } else {
    url.searchParams.set("prompt", "create");
  }
  return url.toString();
}

export interface TokenResponse {
  access_token: string;
  id_token?: string;
}

/** RFC 6749 §2.3.1: client_id and secret are form-urlencoded before Basic encoding. */
function basicAuth(clientId: string, secret: string): string {
  const enc = (s: string) => encodeURIComponent(s).replace(/%20/g, "+");
  return `Basic ${btoa(`${enc(clientId)}:${enc(secret)}`)}`;
}

/**
 * Exchanges the authorization code (RFC 6749 §4.1.3 with the PKCE verifier). A confidential client
 * authenticates with `client_secret_basic`, or `client_secret_post` when the issuer only lists that.
 */
export async function exchangeCode(
  doc: DiscoveryDocument,
  params: {
    code: string;
    codeVerifier: string;
    redirectUri: string;
    clientId: string;
    clientSecret: string | undefined;
  },
  fetchImpl: (req: Request) => Promise<Response>,
): Promise<TokenResponse> {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: params.code,
    redirect_uri: params.redirectUri,
    code_verifier: params.codeVerifier,
  });
  const headers = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  });
  if (params.clientSecret) {
    const methods = doc.token_endpoint_auth_methods_supported;
    const postOnly =
      methods !== undefined &&
      methods.includes("client_secret_post") &&
      !methods.includes("client_secret_basic");
    if (postOnly) {
      body.set("client_id", params.clientId);
      body.set("client_secret", params.clientSecret);
    } else {
      headers.set("Authorization", basicAuth(params.clientId, params.clientSecret));
    }
  } else {
    body.set("client_id", params.clientId);
  }

  let response: Response;
  try {
    response = await fetchImpl(
      new Request(doc.token_endpoint, { method: "POST", headers, body, redirect: "manual" }),
    );
  } catch {
    throw new OidcError("token endpoint unreachable");
  }
  if (!response.ok) throw new OidcError(`token endpoint returned ${response.status}`);
  let json: Partial<TokenResponse> & { token_type?: string };
  try {
    json = (await response.json()) as Partial<TokenResponse> & { token_type?: string };
  } catch {
    throw new OidcError("token response is not JSON");
  }
  if (typeof json.access_token !== "string" || !json.access_token) {
    throw new OidcError("token response has no access_token");
  }
  if (json.token_type && json.token_type.toLowerCase() !== "bearer") {
    throw new OidcError("unexpected token_type");
  }
  const result: TokenResponse = { access_token: json.access_token };
  if (typeof json.id_token === "string") result.id_token = json.id_token;
  return result;
}

function decodeJwtPayload(jwt: string): Record<string, unknown> | null {
  const parts = jwt.split(".");
  if (parts.length !== 3 || !parts[1]) return null;
  try {
    const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = new TextDecoder().decode(
      Uint8Array.from(atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4)), (c) => c.charCodeAt(0)),
    );
    const parsed: unknown = JSON.parse(json);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/**
 * Checks the ID token's `iss`, `aud`, `exp` and `nonce` (OIDC Core §3.1.3.7). The token came
 * straight from the token endpoint over TLS, which §3.1.3.7 step 6 accepts in place of a
 * signature check. The gateway does not use the ID token for anything else: the backend validates
 * the access token's signature, issuer and audience itself.
 */
export function verifyIdTokenClaims(
  idToken: string,
  expected: { issuer: string; clientId: string; nonce: string; now: number },
): boolean {
  const claims = decodeJwtPayload(idToken);
  if (!claims) return false;
  if (
    typeof claims["iss"] !== "string" ||
    stripSlash(claims["iss"]) !== stripSlash(expected.issuer)
  ) {
    return false;
  }
  const aud = claims["aud"];
  const audiences = Array.isArray(aud) ? aud : [aud];
  if (!audiences.includes(expected.clientId)) return false;
  const exp = claims["exp"];
  if (typeof exp !== "number" || exp * 1000 + 60_000 < expected.now) return false;
  return claims["nonce"] === expected.nonce;
}

export function buildEndSessionUrl(
  doc: DiscoveryDocument,
  params: { clientId: string; postLogoutRedirectUri: string },
): string | undefined {
  if (!doc.end_session_endpoint) return undefined;
  const url = new URL(doc.end_session_endpoint);
  url.searchParams.set("client_id", params.clientId);
  url.searchParams.set("post_logout_redirect_uri", params.postLogoutRedirectUri);
  return url.toString();
}
