import createClient, { type Client } from "openapi-fetch";
import { HeartStoneApiError, normaliseApiError } from "./errors.js";
import { correlationIdOf, createHeartStoneFetch } from "./fetch.js";
import type { paths } from "./generated/schema.js";

export const DEFAULT_API_BASE_URL = "/api/v1";

/** Typed client for every backend path in the vendored contract (paths relative to /api/v1). */
export type HeartStoneClient = Client<paths>;

export interface HeartStoneClientOptions {
  /**
   * Base URL of the API. Defaults to `/api/v1` on the current origin, i.e. the app Worker's
   * gateway, which adds the session and forwards to the backend. Do not point this at the
   * backend directly from a browser: the session token never reaches JavaScript.
   */
  baseUrl?: string;
  /** Underlying fetch (tests, or a custom transport). Defaults to `globalThis.fetch`. */
  fetch?: (input: Request) => Promise<Response>;
  /** Called once per response with HTTP 401 that is not a step-up request. */
  onUnauthenticated?: (error: HeartStoneApiError) => void;
}

/** Resolves a relative base URL against the page origin (browsers) so Request() accepts it. */
export function resolveBaseUrl(baseUrl: string): string {
  if (/^https?:\/\//i.test(baseUrl)) return baseUrl;
  const origin = globalThis.location?.origin;
  return origin && origin !== "null" ? new URL(baseUrl, origin).toString() : baseUrl;
}

/**
 * Creates the typed HeartStone API client (openapi-fetch). Requests are same-origin with
 * `credentials: "same-origin"`, carry an `X-Correlation-Id`, and mutations carry
 * `X-HeartStone-CSRF: 1`. Only GET/HEAD are retried, once, on a network failure.
 *
 * openapi-fetch returns `{ data, error, response }`; use `unwrap()` to get the data or a
 * `HeartStoneApiError`.
 */
export function createHeartStoneClient(options: HeartStoneClientOptions = {}): HeartStoneClient {
  const fetchOptions = options.fetch ? { fetch: options.fetch } : {};
  const client = createClient<paths>({
    baseUrl: resolveBaseUrl(options.baseUrl ?? DEFAULT_API_BASE_URL),
    fetch: createHeartStoneFetch(fetchOptions),
    credentials: "same-origin",
  });
  const { onUnauthenticated } = options;
  if (onUnauthenticated) {
    client.use({
      async onResponse({ response }) {
        if (response.status !== 401) return undefined;
        const error = await apiErrorFromClone(response);
        if (error.kind === "unauthenticated") onUnauthenticated(error);
        return undefined;
      },
    });
  }
  return client;
}

async function apiErrorFromClone(response: Response): Promise<HeartStoneApiError> {
  let body: unknown;
  try {
    const text = await response.clone().text();
    body = text ? (JSON.parse(text) as unknown) : undefined;
  } catch {
    body = undefined;
  }
  return normaliseApiError(response.status, body, { correlationId: correlationIdOf(response) });
}

type FetchResult<T> =
  | { data: T; error?: never; response: Response }
  | { data?: never; error: unknown; response: Response };

/**
 * Returns the response data, or throws a `HeartStoneApiError` for any non-2xx response.
 *
 * ```ts
 * const me = await unwrap(client.GET("/experience/citizen/me"));
 * ```
 */
export async function unwrap<T>(result: Promise<FetchResult<T>> | FetchResult<T>): Promise<T> {
  const { data, error, response } = await result;
  if (response.ok) return data as T;
  throw normaliseApiError(response.status, error, {
    correlationId: correlationIdOf(response),
    retryAfter: response.headers.get("retry-after"),
  });
}
