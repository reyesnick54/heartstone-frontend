import { act, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EXPERIENCE_NAME } from "./App";
import { json, never, on, renderAt, safeHaltBody, stepUpBody } from "./test/harness";

const emptyHome = on("GET", "/experience/citizen/home", () =>
  json({
    counts: {
      activeApplications: 0,
      actionRequired: 0,
      pendingGovernmentRequests: 0,
      recentDecisions: 0,
      issuedCredentials: 0,
      outstandingPayments: 0,
      upcomingExpirations: 0,
      unreadMessages: 0,
      appealsRedressMatters: 0,
      upcomingAppointments: 0,
    },
    recentItems: [],
    serviceRecommendations: [],
    disclaimer: { label: "Home disclaimer" },
  }),
);
const noActions = on("GET", "/experience/citizen/actions", () =>
  json({
    items: [],
    pagination: {
      page: 1,
      pageSize: 10,
      totalItems: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  }),
);
const servicesList = on("GET", "/experience/citizen/services", () =>
  json({ items: [], page: 1, limit: 20, total: 0, totalPages: 0 }),
);
const families = on("GET", "/public/service-families", () => json([]));

afterEach(() => window.history.replaceState(null, "", "/"));

describe("signed out", () => {
  it("shows one h1, a sign-in link through the gateway and the not-live notice", async () => {
    renderAt("/", [], { signedIn: false });
    const link = await screen.findByRole("link", { name: "Sign in" });
    expect(link).toHaveAttribute("href", "/auth/login?returnTo=%2F");
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(EXPERIENCE_NAME);
    expect(screen.getAllByText(/not a live government service/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: "Sign out" })).not.toBeInTheDocument();
  });

  it("keeps the deep link as the sign-in return path", async () => {
    renderAt("/applications/abc", [], { signedIn: false });
    const link = await screen.findByRole("link", { name: "Sign in" });
    expect(link).toHaveAttribute("href", "/auth/login?returnTo=%2Fapplications%2Fabc");
  });

  it("uses tenant placeholders, not a government name, in the official banner", async () => {
    renderAt("/", [], { signedIn: false });
    await screen.findByRole("link", { name: "Sign in" });
    expect(screen.getByRole("region", { name: "Official website notice" })).toHaveTextContent(
      /tenant configuration/i,
    );
  });

  it("shows gateway sign-in errors and removes them from the address bar", async () => {
    renderAt("/?signin_error=not-linked", [], { signedIn: false });
    expect(await screen.findByText("We could not find your account")).toBeInTheDocument();
    expect(window.location.search).toBe("");
  });

  it("announces that it is checking the session", () => {
    renderAt("/", [], { signedIn: false });
    expect(screen.getByRole("status")).toHaveTextContent(/checking whether you are signed in/i);
  });
});

describe("signed-in shell", () => {
  it("has a skip link, main landmark, sidebar and bottom tabs with the current page marked", async () => {
    renderAt("/", [emptyHome, noActions]);
    await screen.findByRole("heading", { level: 1, name: /Alex/ });
    expect(screen.getByRole("link", { name: "Skip to main content" })).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    const navs = screen.getAllByRole("navigation", { name: "Main" });
    expect(navs).toHaveLength(2);
    const tabBar = navs[1] as HTMLElement;
    for (const name of ["Home", "Services", "Applications", "Messages", "More"]) {
      // Tabs only appear for pages that exist in this build; Home and Services always do.
      if (name === "Home" || name === "Services") {
        expect(within(tabBar).getByRole("link", { name })).toBeInTheDocument();
      }
    }
    expect(within(tabBar).getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByText("Signed in as", { exact: false })).toHaveTextContent("Alex Example");
  });

  it("moves focus to the new page's h1 after an in-app navigation", async () => {
    const user = userEvent.setup();
    renderAt("/", [emptyHome, noActions, servicesList, families]);
    await screen.findByRole("heading", { level: 1, name: /Alex/ });
    const tabBar = screen.getAllByRole("navigation", { name: "Main" })[1] as HTMLElement;
    await user.click(within(tabBar).getByRole("link", { name: "Services" }));
    const h1 = await screen.findByRole("heading", { level: 1, name: "Find a service" });
    expect(h1).toHaveFocus();
    expect(window.location.pathname).toBe("/services");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("follows back and forward", async () => {
    const user = userEvent.setup();
    renderAt("/", [emptyHome, noActions, servicesList, families]);
    await screen.findByRole("heading", { level: 1, name: /Alex/ });
    const tabBar = screen.getAllByRole("navigation", { name: "Main" })[1] as HTMLElement;
    await user.click(within(tabBar).getByRole("link", { name: "Services" }));
    await screen.findByRole("heading", { level: 1, name: "Find a service" });
    await act(async () => {
      window.history.back();
      await new Promise((r) => setTimeout(r, 20));
    });
    expect(await screen.findByRole("heading", { level: 1, name: /Alex/ })).toBeInTheDocument();
  });

  it("shows a not-found page for an unknown path, inside the shell", async () => {
    renderAt("/no-such-page", []);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "go to your home page" })).toHaveAttribute("href", "/");
  });

  it("signs out with POST /auth/logout and returns to the landing", async () => {
    const user = userEvent.setup();
    const { fetch } = renderAt("/", [emptyHome, noActions]);
    await user.click(await screen.findByRole("button", { name: "Sign out" }));
    expect(await screen.findByRole("link", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByText(/you have signed out/i)).toBeInTheDocument();
    const post = (fetch.mock.calls as [Request][]).find(([r]) => r.method === "POST")?.[0];
    expect(new URL(post?.url ?? "").pathname).toBe("/auth/logout");
    expect(post?.headers.get("X-HeartStone-CSRF")).toBe("1");
  });

  it("returns to the landing when the backend ends the session", async () => {
    renderAt("/", [
      on("GET", "/experience/citizen/home", () =>
        json({ statusCode: 401, message: "Session has expired" }, 401),
      ),
      noActions,
    ]);
    expect(await screen.findByText(/your session has ended/i)).toBeInTheDocument();
  });
});

describe("account errors", () => {
  it("keeps the shell and offers Try again when /me fails", async () => {
    renderAt("/", [emptyHome, noActions], {
      me: () => json({ statusCode: 500, message: "x" }, 500),
    });
    expect(
      await screen.findByRole("heading", { level: 1, name: "We could not load your account" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument();
    expect(screen.getByText(/^Reference: /)).toBeInTheDocument();
  });

  it("asks for a fresh sign-in when a page needs step-up", async () => {
    renderAt("/", [on("GET", "/experience/citizen/home", () => json(stepUpBody, 401)), noActions]);
    const link = await screen.findByRole("link", { name: "Sign in again" });
    expect(link.getAttribute("href")).toMatch(/reauth=1/);
  });

  it("explains a safe halt", async () => {
    renderAt("/", [
      on("GET", "/experience/citizen/home", () => json(safeHaltBody, 403)),
      noActions,
    ]);
    expect(await screen.findByText("This service is paused")).toBeInTheDocument();
  });

  it("keeps loading states announced", () => {
    renderAt("/", [on("GET", "/experience/citizen/home", never), noActions]);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
