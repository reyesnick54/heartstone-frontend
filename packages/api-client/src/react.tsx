// Minimal React layer: one client and one session store per app, shared through context.
// No state library: server-data caching arrives with the features that need it.
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { fetchSession, logout as gatewayLogout, type AuthEndpointsOptions } from "./auth.js";
import { createHeartStoneClient, type HeartStoneClient } from "./client.js";
import { HeartStoneApiError, isHeartStoneApiError, networkError } from "./errors.js";
import type { GatewaySession } from "./protocol.js";

/** Why the session is signed out, when the app knows. */
export type SignedOutReason = "signed-out" | "session-ended";

export type SessionState =
  | { status: "loading" }
  | { status: "authenticated"; session: GatewaySession }
  | { status: "unauthenticated"; session: GatewaySession; reason?: SignedOutReason }
  | { status: "error"; error: HeartStoneApiError };

export interface UseSessionResult {
  state: SessionState;
  /** Re-reads `GET /auth/session`. */
  refresh: () => Promise<void>;
  /** `POST /auth/logout`, then marks the session signed out. Throws `HeartStoneApiError`. */
  signOut: () => Promise<void>;
}

/** Holds the gateway session outside React so every component reads the same value. */
export class SessionStore {
  private state: SessionState = { status: "loading" };
  private readonly listeners = new Set<() => void>();
  private generation = 0;

  constructor(private readonly options: AuthEndpointsOptions = {}) {}

  readonly subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  readonly getSnapshot = (): SessionState => this.state;

  private set(state: SessionState): void {
    this.state = state;
    for (const listener of this.listeners) listener();
  }

  readonly refresh = async (): Promise<void> => {
    const run = ++this.generation;
    if (this.state.status !== "loading") this.set({ status: "loading" });
    try {
      const session = await fetchSession(this.options);
      if (run !== this.generation) return;
      this.set(
        session.authenticated
          ? { status: "authenticated", session }
          : { status: "unauthenticated", session },
      );
    } catch (error) {
      if (run !== this.generation) return;
      this.set({
        status: "error",
        error: isHeartStoneApiError(error) ? error : networkError(error),
      });
    }
  };

  readonly signOut = async (): Promise<void> => {
    await gatewayLogout(this.options);
    this.markSignedOut("signed-out");
  };

  /** The backend ended the session (expired, idle, revoked). The gateway already cleared it. */
  readonly markSignedOut = (reason: SignedOutReason = "session-ended"): void => {
    this.generation++;
    this.set({ status: "unauthenticated", session: { authenticated: false }, reason });
  };
}

interface ApiContextValue {
  client: HeartStoneClient;
  store: SessionStore;
}

const ApiContext = createContext<ApiContextValue | null>(null);

export interface ApiProviderProps {
  children: ReactNode;
  /** API base URL. Defaults to `/api/v1` (the app's own gateway). */
  baseUrl?: string;
  /** Prefix of the gateway auth routes. Defaults to `/auth`. */
  authBasePath?: string;
  /** Underlying fetch (tests). Read once, when the provider mounts. */
  fetch?: (input: Request) => Promise<Response>;
}

function createContextValue(props: Omit<ApiProviderProps, "children">): ApiContextValue {
  const store = new SessionStore({
    ...(props.authBasePath ? { authBasePath: props.authBasePath } : {}),
    ...(props.fetch ? { fetch: props.fetch } : {}),
  });
  const client = createHeartStoneClient({
    ...(props.baseUrl ? { baseUrl: props.baseUrl } : {}),
    ...(props.fetch ? { fetch: props.fetch } : {}),
    onUnauthenticated: () => store.markSignedOut("session-ended"),
  });
  return { client, store };
}

/** Provides the API client and the gateway session to the app. Mount once, at the root. */
export function ApiProvider({ children, ...props }: ApiProviderProps) {
  const [value] = useState(() => createContextValue(props));
  useEffect(() => {
    void value.store.refresh();
  }, [value]);
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

function useApiContext(hook: string): ApiContextValue {
  const value = useContext(ApiContext);
  if (!value) throw new Error(`${hook} must be used inside <ApiProvider>.`);
  return value;
}

/** The typed HeartStone API client for this app. */
export function useApi(): HeartStoneClient {
  return useApiContext("useApi").client;
}

/** The gateway session (`GET /auth/session`), shared by every component under `ApiProvider`. */
export function useSession(): UseSessionResult {
  const { store } = useApiContext("useSession");
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
  return { state, refresh: store.refresh, signOut: store.signOut };
}
