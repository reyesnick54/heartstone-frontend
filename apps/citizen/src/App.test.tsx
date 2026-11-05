import { act, render, screen, within } from "@testing-library/react";
import { ApiProvider } from "@heartstone/api-client/react";
import { App, EXPERIENCE_NAME } from "./App";

type Responder = (req: Request) => Response | Promise<Response>;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

const citizenMe = {
  profile: { identityId: "identity-1", displayName: "Alex Example" },
  classification: { classificationNote: "Derived from application history only" },
  organizationRelationships: [],
  representationRelationships: [],
  accountAssurance: {
    assuranceLevel: "MEDIUM",
    accountStatus: "ACTIVE",
    sessionId: "s-1",
    hasGovernmentAuthority: false,
    assuranceNote: "n",
  },
  communicationPreferences: [],
  disclaimer: { label: "This summary does not confer any government authority." },
};

function renderApp(responder: Responder) {
  const fetch = vi.fn(async (req: Request) => responder(req));
  render(
    <ApiProvider fetch={fetch}>
      <App />
    </ApiProvider>,
  );
  return fetch;
}

const signedOut: Responder = () => json({ authenticated: false });

const signedIn =
  (me: Responder = () => json(citizenMe)): Responder =>
  (req) => {
    const path = new URL(req.url).pathname;
    if (path === "/auth/session") return json({ authenticated: true, identityId: "identity-1" });
    if (path === "/auth/logout") return new Response(null, { status: 204 });
    if (path === "/api/v1/experience/citizen/me") return me(req);
    throw new Error(`unexpected ${path}`);
  };

afterEach(() => window.history.replaceState(null, "", "/"));

describe("App (F2 citizen shell)", () => {
  it("renders a single level-one heading naming the experience", async () => {
    renderApp(signedOut);
    await screen.findByRole("link", { name: "Sign in" });
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(EXPERIENCE_NAME);
  });

  it("does not present itself as a live or operational service", async () => {
    renderApp(signedOut);
    await screen.findByRole("link", { name: "Sign in" });
    expect(screen.getAllByText(/not a live government service/i).length).toBeGreaterThan(0);
  });

  it("shows the official-website banner with placeholder text, not a real government name", async () => {
    renderApp(signedOut);
    await screen.findByRole("link", { name: "Sign in" });
    expect(screen.getByRole("region", { name: "Official website notice" })).toHaveTextContent(
      /tenant configuration/i,
    );
  });

  it("uses the citizen shell landmarks and bottom tabs", async () => {
    renderApp(signedOut);
    await screen.findByRole("link", { name: "Sign in" });
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getAllByRole("navigation", { name: "Main" })).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Skip to main content" })).toBeInTheDocument();
  });

  it("announces that it is checking the session while loading", () => {
    renderApp(() => new Promise<Response>(() => undefined));
    expect(screen.getByRole("status")).toHaveTextContent(/checking whether you are signed in/i);
  });

  it("offers sign-in through the gateway when signed out", async () => {
    renderApp(signedOut);
    const link = await screen.findByRole("link", { name: "Sign in" });
    expect(link).toHaveAttribute("href", "/auth/login?returnTo=%2F");
    expect(screen.queryByRole("button", { name: "Sign out" })).not.toBeInTheDocument();
  });

  it("shows the signed-in person's display name from the backend and a sign-out button", async () => {
    const fetch = renderApp(signedIn());
    const card = await screen.findByRole("region", { name: "Your account" });
    expect(within(card).getByText("Alex Example")).toBeInTheDocument();
    // The account bar in the shell's top bar names the person too.
    expect(screen.getByText(/signed in as/i, { selector: "span" })).toHaveTextContent(
      "Signed in as Alex Example",
    );
    expect(screen.getByRole("button", { name: "Sign out" })).toBeInTheDocument();
    expect(
      screen.getByText("This summary does not confer any government authority."),
    ).toBeInTheDocument();
    const meCall = fetch.mock.calls.find(([r]) => r.url.endsWith("/experience/citizen/me"));
    expect(meCall?.[0].credentials).toBe("same-origin");
  });

  it("signs out with POST /auth/logout and returns to the signed-out view", async () => {
    const fetch = renderApp(signedIn());
    const button = await screen.findByRole("button", { name: "Sign out" });
    await act(async () => button.click());
    expect(await screen.findByRole("link", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByText(/you have signed out/i)).toBeInTheDocument();
    const post = fetch.mock.calls.find(([r]) => r.method === "POST")?.[0];
    expect(new URL(post?.url ?? "").pathname).toBe("/auth/logout");
    expect(post?.headers.get("X-HeartStone-CSRF")).toBe("1");
  });

  it("explains a safe halt without inventing a status", async () => {
    renderApp(
      signedIn(() =>
        json(
          {
            message: "Blocked",
            outcome: "SAFE_HALT",
            status: "SAFE_HALT",
            explanationCodes: [],
            summary: "Halted",
            safeHalt: true,
            requiresRevalidation: false,
          },
          403,
        ),
      ),
    );
    expect(await screen.findByText("This service is paused")).toBeInTheDocument();
  });

  it("asks for a fresh sign-in on step-up", async () => {
    renderApp(
      signedIn(() =>
        json({ statusCode: 401, message: "Recent stronger authentication is required" }, 401),
      ),
    );
    const link = await screen.findByRole("link", { name: "Sign in again" });
    expect(link.getAttribute("href")).toMatch(/reauth=1/);
  });

  it("returns to the signed-out view when the backend ends the session", async () => {
    renderApp(signedIn(() => json({ statusCode: 401, message: "Session has expired" }, 401)));
    expect(await screen.findByRole("link", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByText(/your session has ended/i)).toBeInTheDocument();
  });

  it("shows a retryable error with a reference when the backend fails", async () => {
    let calls = 0;
    renderApp(
      signedIn(() => {
        calls++;
        return calls === 1 ? json({ statusCode: 500, message: "x" }, 500) : json(citizenMe);
      }),
    );
    expect(await screen.findByText("We could not load your details")).toBeInTheDocument();
    expect(screen.getByText(/^Reference: /)).toBeInTheDocument();
    await act(async () => screen.getByRole("button", { name: "Try again" }).click());
    expect(await screen.findAllByText("Alex Example")).not.toHaveLength(0);
  });

  it("shows sign-in errors reported by the gateway and removes them from the address bar", async () => {
    window.history.replaceState(null, "", "/?signin_error=not-linked");
    renderApp(signedOut);
    expect(await screen.findByText("We could not find your account")).toBeInTheDocument();
    expect(window.location.search).toBe("");
  });
});
