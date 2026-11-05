// The citizen app's data layer: one hook for reads and one for writes. No cache library:
// every page loads what it shows, aborts on unmount, and offers "Try again" itself.
//
// - Reads (`useQuery`) pass an AbortSignal to the API client and ignore late responses. The API
//   client already retries a GET once after a network failure.
// - Writes (`useMutation`) are never retried automatically: a government action must not run
//   twice. The person can press the button again after reading the error.
import { useCallback, useEffect, useRef, useState } from "react";
import {
  isHeartStoneApiError,
  networkError,
  type HeartStoneApiError,
} from "@heartstone/api-client";

export type QueryState<T> =
  | { status: "loading"; data?: undefined; error?: undefined }
  | { status: "success"; data: T; error?: undefined }
  | { status: "error"; data?: undefined; error: HeartStoneApiError };

export type QueryResult<T> = QueryState<T> & {
  /** Loads again (after an error, or after a change made on the page). */
  reload: () => void;
};

export function toApiError(error: unknown): HeartStoneApiError {
  return isHeartStoneApiError(error) ? error : networkError(error);
}

function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.name === "AbortError";
}

/**
 * Loads data for `key`. `key` identifies the request (include every input of `fetcher`); `null`
 * means "do not load yet". Loading state is derived, so a key change shows loading at once.
 */
export function useQuery<T>(
  key: string | null,
  fetcher: (signal: AbortSignal) => Promise<T>,
): QueryResult<T> {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{ token: string; state: QueryState<T> } | null>(null);
  const fetcherRef = useRef(fetcher);
  useEffect(() => {
    fetcherRef.current = fetcher;
  });
  const token = key === null ? null : `${key}#${attempt}`;

  useEffect(() => {
    if (token === null) return;
    const controller = new AbortController();
    fetcherRef
      .current(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setResult({ token, state: { status: "success", data } });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted || isAbortError(error)) return;
        setResult({ token, state: { status: "error", error: toApiError(error) } });
      });
    return () => controller.abort();
  }, [token]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);
  const state: QueryState<T> =
    result && result.token === token ? result.state : { status: "loading" };
  return { ...state, reload } as QueryResult<T>;
}

export type MutationState<T> =
  | { status: "idle"; data?: undefined; error?: undefined }
  | { status: "pending"; data?: undefined; error?: undefined }
  | { status: "success"; data: T; error?: undefined }
  | { status: "error"; data?: undefined; error: HeartStoneApiError };

export type MutationResult<A extends unknown[], T> = MutationState<T> & {
  /** Runs the mutation once. Resolves with the data, or rejects with a HeartStoneApiError. */
  run: (...args: A) => Promise<T>;
  reset: () => void;
};

/** A state-changing request. Runs only when `run` is called, and never retries. */
export function useMutation<A extends unknown[], T>(
  mutate: (...args: A) => Promise<T>,
): MutationResult<A, T> {
  const [state, setState] = useState<MutationState<T>>({ status: "idle" });
  const mounted = useRef(true);
  const inFlight = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const run = useCallback(
    async (...args: A): Promise<T> => {
      // A second press while the first request is in flight is ignored, not sent again.
      if (inFlight.current) throw new Error("HeartStone: mutation already in progress");
      inFlight.current = true;
      setState({ status: "pending" });
      try {
        const data = await mutate(...args);
        if (mounted.current) setState({ status: "success", data });
        return data;
      } catch (error) {
        const apiError = toApiError(error);
        if (mounted.current) setState({ status: "error", error: apiError });
        throw apiError;
      } finally {
        inFlight.current = false;
      }
    },
    [mutate],
  );
  const reset = useCallback(() => setState({ status: "idle" }), []);
  return { ...state, run, reset } as MutationResult<A, T>;
}
