// Test harness: renders the whole app at a path with a mocked fetch. No network.
import { render } from "@testing-library/react";
import { ApiProvider } from "@heartstone/api-client/react";
import { App } from "../App";

export type Handler = (req: Request, url: URL) => Response | Promise<Response> | undefined;

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export const citizenMe = {
  profile: { identityId: "identity-1", displayName: "Alex Example", givenName: "Alex" },
  classification: { classificationNote: "Derived from application history only" },
  organizationRelationships: [],
  representationRelationships: [] as unknown[],
  accountAssurance: {
    assuranceLevel: "MEDIUM",
    accountStatus: "ACTIVE",
    sessionId: "s-1",
    hasGovernmentAuthority: false,
    assuranceNote: "Authentication establishes identity only.",
  },
  communicationPreferences: [],
  disclaimer: { label: "This summary does not confer any government authority." },
};

export const representingMe = {
  ...citizenMe,
  representationRelationships: [
    {
      representativeAuthorityId: "11111111-1111-4111-8111-111111111111",
      organizationId: "22222222-2222-4222-8222-222222222222",
      organizationName: "Example Catering Ltd",
      scopeDescription: "licences and filings",
      status: "ACTIVE",
      effectiveFrom: "2025-04-01T00:00:00.000Z",
      effectiveUntil: "2027-03-31T00:00:00.000Z",
    },
  ],
};

export const safeHaltBody = {
  message: "Blocked",
  outcome: "SAFE_HALT",
  status: "SAFE_HALT",
  explanationCodes: [],
  summary: "Halted",
  safeHalt: true,
  requiresRevalidation: false,
};

export const stepUpBody = {
  statusCode: 401,
  message: "Recent stronger authentication is required",
};

export interface RenderOptions {
  signedIn?: boolean;
  /** The /me body, or a function returning the whole Response. */
  me?: unknown;
}

/**
 * Renders <App /> at `path`. `handlers` answer `/api/v1/...` requests (first non-undefined
 * wins); an unhandled API request fails the test.
 */
export function renderAt(path: string, handlers: Handler[] = [], options: RenderOptions = {}) {
  window.history.replaceState(null, "", path);
  const signedIn = options.signedIn ?? true;
  const unhandled: string[] = [];
  const sent: { method: string; path: string; body: unknown; headers: Headers }[] = [];
  const fetch = vi.fn(async (req: Request) => {
    const url = new URL(req.url);
    if (req.method !== "GET") {
      const text = await req.clone().text();
      sent.push({
        method: req.method,
        path: url.pathname.replace(/^\/api\/v1/, ""),
        body: text ? (JSON.parse(text) as unknown) : undefined,
        headers: req.headers,
      });
    }
    if (url.pathname === "/auth/session") {
      return json(
        signedIn ? { authenticated: true, identityId: "identity-1" } : { authenticated: false },
      );
    }
    if (url.pathname === "/auth/logout") return new Response(null, { status: 204 });
    if (url.pathname === "/api/v1/experience/citizen/me") {
      return options.me instanceof Function
        ? (options.me as () => Response)()
        : json(options.me ?? citizenMe);
    }
    for (const handler of handlers) {
      const response = await handler(req, url);
      if (response) return response;
    }
    unhandled.push(`${req.method} ${url.pathname}`);
    return json({ statusCode: 599, message: `unhandled ${req.method} ${url.pathname}` }, 500);
  });
  const view = render(
    <ApiProvider fetch={fetch}>
      <App />
    </ApiProvider>,
  );
  /** Non-GET requests sent, with parsed JSON bodies (paths without /api/v1). */
  const mutations = (method: string, path: string) =>
    sent.filter((m) => m.method === method && m.path === path);
  return { ...view, fetch, unhandled, sent, mutations };
}

/** Matches `METHOD /api/v1<path>` exactly. */
export function on(
  method: string,
  path: string,
  respond: (req: Request, url: URL) => Response | Promise<Response>,
): Handler {
  return (req, url) =>
    req.method === method && url.pathname === `/api/v1${path}` ? respond(req, url) : undefined;
}

export function never(): Promise<Response> {
  return new Promise<Response>(() => undefined);
}
