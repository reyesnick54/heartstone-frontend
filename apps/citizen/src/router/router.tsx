// A small in-house router (History API). The citizen app needs path patterns with `:params`,
// link interception, back/forward and focus management, and nothing else: no loaders, no nested
// layouts, no data APIs. react-router v7 would add ~20 kB gzipped for features we do not use, so
// this file is the whole router. Unknown paths are served index.html by the Worker (SPA
// fallback), so deep links work.
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export interface RouterLocation {
  pathname: string;
  search: string;
  /** `history.state` of this entry (set with `navigate(to, { state })`). */
  state: unknown;
}

export type RouteParams = Readonly<Record<string, string>>;

interface RouterValue {
  location: RouterLocation;
  navigate: (to: string, options?: NavigateOptions) => void;
}

export interface NavigateOptions {
  replace?: boolean;
  /** Kept with the history entry: survives reload and back/forward, never sent to a server. */
  state?: unknown;
}

const RouterContext = createContext<RouterValue | null>(null);

function readLocation(): RouterLocation {
  return {
    pathname: window.location.pathname || "/",
    search: window.location.search,
    state: window.history.state as unknown,
  };
}

/** Paths the Worker handles itself; links to them are full page loads. */
const SERVER_PATHS = /^\/(auth|api)(\/|$)/;

/**
 * Returns the in-app path for a click on `anchor`, or undefined when the browser should handle
 * it (new tab, download, other origin, server route, or an in-page `#fragment`).
 */
export function interceptablePath(
  anchor: HTMLAnchorElement,
  event: MouseEvent,
): string | undefined {
  if (event.defaultPrevented || event.button !== 0) return undefined;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return undefined;
  if (anchor.target && anchor.target !== "_self") return undefined;
  if (anchor.hasAttribute("download")) return undefined;
  const raw = anchor.getAttribute("href");
  if (!raw || raw.startsWith("#")) return undefined;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin || SERVER_PATHS.test(url.pathname)) return undefined;
  return `${url.pathname}${url.search}${url.hash}`;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(readLocation);

  const navigate = useCallback((to: string, options: NavigateOptions = {}) => {
    const state = options.state ?? null;
    if (options.replace) window.history.replaceState(state, "", to);
    else window.history.pushState(state, "", to);
    setLocation(readLocation());
  }, []);

  useEffect(() => {
    const onPop = () => setLocation(readLocation());
    // Every same-origin <a href> becomes an in-app navigation, including the links rendered by
    // @heartstone/ui (AppShell, Link), so components need no router-specific link type.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const path = interceptablePath(anchor, event);
      if (path === undefined) return;
      event.preventDefault();
      navigate(path);
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, [navigate]);

  const value = useMemo(() => ({ location, navigate }), [location, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

function useRouter(): RouterValue {
  const value = useContext(RouterContext);
  if (!value) throw new Error("Router hooks must be used inside <RouterProvider>.");
  return value;
}

export function useLocation(): RouterLocation {
  return useRouter().location;
}

export function useNavigate(): RouterValue["navigate"] {
  return useRouter().navigate;
}

/** The current query string as URLSearchParams. */
export function useSearchParams(): URLSearchParams {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Matches `/applications/:id` against a pathname. Segments are compared exactly (a trailing
 * slash is ignored); `:name` captures one decoded segment.
 */
export function matchPath(pattern: string, pathname: string): RouteParams | null {
  const split = (p: string) => p.split("/").filter(Boolean);
  const want = split(pattern);
  const have = split(pathname);
  if (want.length !== have.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < want.length; i++) {
    const w = want[i] as string;
    const h = have[i] as string;
    if (w.startsWith(":")) {
      try {
        params[w.slice(1)] = decodeURIComponent(h);
      } catch {
        return null;
      }
    } else if (w !== h) return null;
  }
  return params;
}

export interface RouteDefinition<Context> {
  path: string;
  render: (params: RouteParams, context: Context) => ReactNode;
}

/** The first route whose path matches, with its params. */
export function resolveRoute<Context>(
  routes: readonly RouteDefinition<Context>[],
  pathname: string,
): { route: RouteDefinition<Context>; params: RouteParams } | undefined {
  for (const route of routes) {
    const params = matchPath(route.path, pathname);
    if (params) return { route, params };
  }
  return undefined;
}

/**
 * After an in-app navigation, moves focus to the page's `h1` (so screen readers announce the new
 * page) and scrolls to the top. Not on first load: the browser's own focus order applies then.
 */
export function useRouteFocus(pathname: string): void {
  const previous = useRef(pathname);
  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    const heading = document.querySelector<HTMLElement>("main h1");
    if (heading) {
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus();
    }
    (document.scrollingElement ?? document.documentElement).scrollTop = 0;
  }, [pathname]);
}
