import { createHeartStoneClient, unwrap } from "./client";
import { createHeartStoneFetch } from "./fetch";
import { CORRELATION_HEADER, CSRF_HEADER } from "./protocol";
import { HeartStoneApiError } from "./errors";
import { fetchSession, loginUrl, logout } from "./auth";

const BASE = "https://citizen.example.test/api/v1";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

function recorder(responder: (req: Request, call: number) => Response | Promise<Response>) {
  const calls: Request[] = [];
  const fetch = vi.fn(async (req: Request) => {
    calls.push(req);
    return responder(req, calls.length);
  });
  return { calls, fetch };
}

const me = {
  profile: { identityId: "id-1", displayName: "Alex Example" },
  classification: { classificationNote: "n" },
  organizationRelationships: [],
  representationRelationships: [],
  accountAssurance: {
    assuranceLevel: "MEDIUM",
    accountStatus: "ACTIVE",
    sessionId: "s",
    hasGovernmentAuthority: false,
    assuranceNote: "n",
  },
  communicationPreferences: [],
  disclaimer: { label: "d" },
};

describe("createHeartStoneClient", () => {
  it("calls same-origin /api/v1 paths with credentials same-origin and a correlation id", async () => {
    const { calls, fetch } = recorder(() => json(me));
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });

    const data = await unwrap(client.GET("/experience/citizen/me"));

    expect(data.profile.displayName).toBe("Alex Example");
    expect(calls).toHaveLength(1);
    const req = calls[0] as Request;
    expect(req.url).toBe(`${BASE}/experience/citizen/me`);
    expect(req.method).toBe("GET");
    expect(req.credentials).toBe("same-origin");
    expect(req.headers.get(CORRELATION_HEADER)).toMatch(UUID);
    expect(req.headers.get(CSRF_HEADER)).toBeNull();
    expect(req.headers.get("authorization")).toBeNull();
  });

  it("uses a fresh correlation id for each request", async () => {
    const { calls, fetch } = recorder(() => json(me));
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });
    await client.GET("/experience/citizen/me");
    await client.GET("/experience/citizen/me");
    const [a, b] = calls.map((c) => c.headers.get(CORRELATION_HEADER));
    expect(a).not.toBe(b);
  });

  it.each(["POST", "PUT", "PATCH", "DELETE"])("adds the CSRF header on %s", async (method) => {
    const { calls, fetch } = recorder(() => new Response(null, { status: 204 }));
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });
    await client.request(method.toLowerCase() as "post", "/identity/auth/logout" as never);
    expect((calls[0] as Request).headers.get(CSRF_HEADER)).toBe("1");
  });

  it("throws a normalised error from unwrap() with the request's correlation id", async () => {
    const { calls, fetch } = recorder(() =>
      json({ statusCode: 403, message: "Not an official identity", error: "Forbidden" }, 403),
    );
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });

    const failure = await unwrap(client.GET("/experience/official/me")).catch((e: unknown) => e);

    expect(failure).toBeInstanceOf(HeartStoneApiError);
    const error = failure as HeartStoneApiError;
    expect(error.kind).toBe("forbidden");
    expect(error.message).toBe("Not an official identity");
    expect(error.correlationId).toBe((calls[0] as Request).headers.get(CORRELATION_HEADER));
  });

  it("reports an unauthenticated 401 to onUnauthenticated, but not a step-up 401", async () => {
    const onUnauthenticated = vi.fn();
    let message = "Session has expired";
    const { fetch } = recorder(() => json({ statusCode: 401, message }, 401));
    const client = createHeartStoneClient({ baseUrl: BASE, fetch, onUnauthenticated });

    await client.GET("/experience/citizen/me");
    expect(onUnauthenticated).toHaveBeenCalledTimes(1);
    expect(onUnauthenticated.mock.calls[0]?.[0]).toMatchObject({ kind: "unauthenticated" });

    message = "Recent stronger authentication is required";
    const result = await client.GET("/experience/citizen/me").then((r) => r.error);
    expect(onUnauthenticated).toHaveBeenCalledTimes(1);
    expect(result).toMatchObject({ message });
  });
});

describe("retry policy", () => {
  const offline = () => {
    throw new TypeError("Failed to fetch");
  };

  it("retries a GET once after a network failure", async () => {
    const { calls, fetch } = recorder((_req, call) => (call === 1 ? offline() : json(me)));
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });
    const data = await unwrap(client.GET("/experience/citizen/me"));
    expect(data.profile.displayName).toBe("Alex Example");
    expect(calls).toHaveLength(2);
    // Same correlation id on the retry: it is the same logical request.
    expect(calls[0]?.headers.get(CORRELATION_HEADER)).toBe(
      calls[1]?.headers.get(CORRELATION_HEADER),
    );
  });

  it("gives up after one GET retry with a network error", async () => {
    const { calls, fetch } = recorder(offline);
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });
    const failure = await client.GET("/experience/citizen/me").catch((e: unknown) => e);
    expect(failure).toBeInstanceOf(HeartStoneApiError);
    expect((failure as HeartStoneApiError).kind).toBe("network");
    expect(calls).toHaveLength(2);
  });

  it("does not retry a GET that got an HTTP error response", async () => {
    const { calls, fetch } = recorder(() => json({ message: "Boom" }, 500));
    const client = createHeartStoneClient({ baseUrl: BASE, fetch });
    await client.GET("/experience/citizen/me");
    expect(calls).toHaveLength(1);
  });

  it.each(["POST", "PUT", "PATCH", "DELETE"])(
    "never retries %s, even after a network failure",
    async (method) => {
      const { calls, fetch } = recorder(offline);
      const wrapped = createHeartStoneFetch({ fetch });
      const failure = await wrapped(
        new Request(`${BASE}/x`, { method, body: method === "DELETE" ? null : "{}" }),
      ).catch((e: unknown) => e);
      expect((failure as HeartStoneApiError).kind).toBe("network");
      expect(calls).toHaveLength(1);
    },
  );

  it("does not retry an aborted GET", async () => {
    const { calls, fetch } = recorder(() => {
      throw new DOMException("Aborted", "AbortError");
    });
    const wrapped = createHeartStoneFetch({ fetch });
    const failure = await wrapped(new Request(`${BASE}/x`)).catch((e: unknown) => e);
    expect((failure as Error).name).toBe("AbortError");
    expect(calls).toHaveLength(1);
  });
});

describe("gateway auth helpers", () => {
  it("fetchSession reads the session without sending a CSRF header", async () => {
    const { calls, fetch } = recorder(() =>
      json({ authenticated: true, expiresAt: "2026-11-05T12:00:00.000Z", identityId: "id-1" }),
    );
    const session = await fetchSession({ fetch, authBasePath: "https://app.test/auth" });
    expect(session).toEqual({
      authenticated: true,
      expiresAt: "2026-11-05T12:00:00.000Z",
      identityId: "id-1",
    });
    expect(calls[0]?.url).toBe("https://app.test/auth/session");
    expect(calls[0]?.headers.get(CSRF_HEADER)).toBeNull();
  });

  it("fetchSession ignores identity fields when not authenticated", async () => {
    const { fetch } = recorder(() => json({ authenticated: false, identityId: "x" }));
    expect(await fetchSession({ fetch, authBasePath: "https://app.test/auth" })).toEqual({
      authenticated: false,
    });
  });

  it("fetchSession reports a server error when no gateway answers", async () => {
    const { fetch } = recorder(() => new Response("<!doctype html>", { status: 200 }));
    await expect(
      fetchSession({ fetch, authBasePath: "https://app.test/auth" }),
    ).rejects.toMatchObject({ kind: "server" });
  });

  it("logout POSTs with the CSRF header and is not retried", async () => {
    const { calls, fetch } = recorder(() => {
      throw new TypeError("offline");
    });
    await expect(logout({ fetch, authBasePath: "https://app.test/auth" })).rejects.toMatchObject({
      kind: "network",
    });
    expect(calls).toHaveLength(1);
    expect(calls[0]?.method).toBe("POST");
    expect(calls[0]?.headers.get(CSRF_HEADER)).toBe("1");
  });

  it("loginUrl encodes returnTo and step-up", () => {
    expect(loginUrl()).toBe("/auth/login");
    expect(loginUrl({ returnTo: "/applications?x=1" })).toBe(
      "/auth/login?returnTo=%2Fapplications%3Fx%3D1",
    );
    expect(loginUrl({ returnTo: "/", reauth: true })).toBe("/auth/login?returnTo=%2F&reauth=1");
  });
});
