// The browser ⇄ gateway protocol, shared by the API client (browser) and @heartstone/gateway
// (Worker). Dependency-free so the Worker bundle stays small.

/** Header the gateway requires on every state-changing request (CSRF defence). */
export const CSRF_HEADER = "X-HeartStone-CSRF";
export const CSRF_HEADER_VALUE = "1";
/** Per-request id, forwarded to the backend and echoed on the response. */
export const CORRELATION_HEADER = "X-Correlation-Id";

/** `GET /auth/session`. Never contains the session token. */
export interface GatewaySession {
  authenticated: boolean;
  /**
   * ISO 8601 time after which the gateway stops presenting this session (the absolute limit,
   * at most 12 hours after sign-in). The backend may end the session earlier (30 minutes idle,
   * revocation); the next API call then returns 401 and the gateway clears its cookie.
   */
  expiresAt?: string;
  identityId?: string;
}

/** Sign-in outcomes the gateway reports to the app as `/?signin_error=<code>`. */
export type SignInErrorCode = "cancelled" | "expired" | "failed" | "not-linked" | "unavailable";
export const SIGNIN_ERROR_PARAM = "signin_error";
