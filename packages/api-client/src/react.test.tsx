// @vitest-environment jsdom
import { act, render, screen, waitFor } from "@testing-library/react";
import { ApiProvider, useApi, useSession } from "./react";
import { unwrap } from "./client";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function Probe() {
  const { state, signOut } = useSession();
  const client = useApi();
  return (
    <div>
      <p>status:{state.status}</p>
      {state.status === "error" && <p>kind:{state.error.kind}</p>}
      {state.status === "unauthenticated" && <p>reason:{state.reason ?? "none"}</p>}
      <button type="button" onClick={() => void signOut()}>
        out
      </button>
      <button
        type="button"
        onClick={() => void unwrap(client.GET("/experience/citizen/me")).catch(() => undefined)}
      >
        me
      </button>
    </div>
  );
}

describe("ApiProvider + useSession", () => {
  it("loads the gateway session", async () => {
    const fetch = vi.fn(async (req: Request) => {
      void req;
      return json({ authenticated: true, identityId: "id-1" });
    });
    render(
      <ApiProvider fetch={fetch}>
        <Probe />
      </ApiProvider>,
    );
    expect(screen.getByText("status:loading")).toBeInTheDocument();
    expect(await screen.findByText("status:authenticated")).toBeInTheDocument();
    expect(fetch.mock.calls[0]?.[0]?.url).toMatch(/\/auth\/session$/);
  });

  it("exposes a normalised error when the session cannot be read", async () => {
    const fetch = vi.fn(async () => {
      throw new TypeError("offline");
    });
    render(
      <ApiProvider fetch={fetch}>
        <Probe />
      </ApiProvider>,
    );
    expect(await screen.findByText("kind:network")).toBeInTheDocument();
  });

  it("signs out through POST /auth/logout", async () => {
    const fetch = vi.fn(async (req: Request) =>
      req.method === "POST" ? new Response(null, { status: 204 }) : json({ authenticated: true }),
    );
    render(
      <ApiProvider fetch={fetch}>
        <Probe />
      </ApiProvider>,
    );
    await screen.findByText("status:authenticated");
    await act(async () => screen.getByRole("button", { name: "out" }).click());
    expect(await screen.findByText("status:unauthenticated")).toBeInTheDocument();
    expect(screen.getByText("reason:signed-out")).toBeInTheDocument();
    const post = fetch.mock.calls.find(([r]) => r.method === "POST")?.[0];
    expect(post?.url).toMatch(/\/auth\/logout$/);
    expect(post?.headers.get("X-HeartStone-CSRF")).toBe("1");
  });

  it("marks the session signed out when the API returns an unauthenticated 401", async () => {
    const fetch = vi.fn(async (req: Request) =>
      req.url.includes("/api/v1/")
        ? json({ statusCode: 401, message: "Session has expired" }, 401)
        : json({ authenticated: true }),
    );
    render(
      <ApiProvider fetch={fetch}>
        <Probe />
      </ApiProvider>,
    );
    await screen.findByText("status:authenticated");
    await act(async () => screen.getByRole("button", { name: "me" }).click());
    await waitFor(() => expect(screen.getByText("status:unauthenticated")).toBeInTheDocument());
    expect(screen.getByText("reason:session-ended")).toBeInTheDocument();
  });

  it("shares one session between components", async () => {
    const fetch = vi.fn(async (req: Request) => {
      void req;
      return json({ authenticated: false });
    });
    render(
      <ApiProvider fetch={fetch}>
        <Probe />
        <Probe />
      </ApiProvider>,
    );
    expect(await screen.findAllByText("status:unauthenticated")).toHaveLength(2);
    expect(screen.getAllByText("reason:none")).toHaveLength(2);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("throws a clear error outside the provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() => render(<Probe />)).toThrow(/inside <ApiProvider>/);
    spy.mockRestore();
  });
});
