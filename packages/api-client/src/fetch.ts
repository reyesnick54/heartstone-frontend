// The one place where browser requests to the HeartStone gateway get their headers, credentials
// mode, correlation id and retry policy. Both the typed OpenAPI client and the gateway auth
// endpoints (/auth/session, /auth/logout) go through it.
import { isHeartStoneApiError, networkError } from "./errors.js";
import { CORRELATION_HEADER, CSRF_HEADER, CSRF_HEADER_VALUE } from "./protocol.js";

const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
/** Only these are retried, and only once, and only when the network failed. */
const RETRYABLE_METHODS = new Set(["GET", "HEAD"]);

export type FetchLike = (input: Request) => Promise<Response>;

export function isMutatingMethod(method: string): boolean {
  return !SAFE_METHODS.has(method.toUpperCase());
}

export function newCorrelationId(): string {
  return globalThis.crypto.randomUUID();
}

const correlationIds = new WeakMap<Response, string>();

/** The correlation id sent with the request that produced `response`. */
export function correlationIdOf(response: Response): string | undefined {
  return correlationIds.get(response) ?? response.headers.get(CORRELATION_HEADER) ?? undefined;
}

function isAbort(error: unknown): boolean {
  return error instanceof Error && (error.name === "AbortError" || error.name === "TimeoutError");
}

export interface HeartStoneFetchOptions {
  /** Underlying fetch. Defaults to `globalThis.fetch`. */
  fetch?: (input: Request) => Promise<Response>;
}

/**
 * Wraps fetch for same-origin gateway calls:
 * - `credentials: "same-origin"` (the session lives in an httpOnly cookie set by the gateway);
 * - `X-Correlation-Id` on every request (a fresh UUID unless the caller set one);
 * - `X-HeartStone-CSRF: 1` on POST, PUT, PATCH and DELETE;
 * - a network failure becomes `HeartStoneApiError` with kind `network`;
 * - GET and HEAD are retried once after a network failure. Mutations are never retried: the
 *   first attempt may have reached the backend, and a government action must not run twice.
 */
export function createHeartStoneFetch(options: HeartStoneFetchOptions = {}): FetchLike {
  const underlying = options.fetch ?? ((input: Request) => globalThis.fetch(input));

  return async function heartStoneFetch(input: Request): Promise<Response> {
    const method = input.method.toUpperCase();
    const headers = new Headers(input.headers);
    const correlationId = headers.get(CORRELATION_HEADER) || newCorrelationId();
    headers.set(CORRELATION_HEADER, correlationId);
    if (isMutatingMethod(method)) headers.set(CSRF_HEADER, CSRF_HEADER_VALUE);

    const request = new Request(input, { headers, credentials: "same-origin" });
    const attempts = RETRYABLE_METHODS.has(method) ? 2 : 1;
    // A GET has no body, so the clone for the retry is cheap.
    const retryCopy = attempts > 1 ? request.clone() : undefined;

    let lastError: unknown;
    for (let attempt = 0; attempt < attempts; attempt++) {
      try {
        const response = await underlying(attempt === 0 ? request : (retryCopy as Request));
        correlationIds.set(response, correlationId);
        return response;
      } catch (error) {
        if (isAbort(error) || isHeartStoneApiError(error)) throw error;
        lastError = error;
      }
    }
    throw networkError(lastError, correlationId);
  };
}
