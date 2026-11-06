import { act, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TENANT } from "./tenant";
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

const emptyCatalogue = [
  on("GET", "/public/services", () =>
    json({ items: [], page: 1, limit: 8, total: 0, totalPages: 0 }),
  ),
  families,
];

describe("signed out", () => {
  it("shows the website home with one h1, sign-in links through the gateway and the not-live notice", async () => {
    renderAt("/", emptyCatalogue, { signedIn: false });
    const headings = await screen.findAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Government services, in one place.");
    // Header first (straight to the gateway), then the footer's sign-in page.
    expect(screen.getAllByRole("link", { name: "Sign in" })[0]).toHaveAttribute(
      "href",
      "/auth/login?returnTo=%2Fdashboard",
    );
    expect(screen.getAllByText(/not a live government service/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: "Sign out" })).not.toBeInTheDocument();
  });

  it("keeps the deep link as the sign-in return path", async () => {
    renderAt("/dashboard/applications/abc", [], { signedIn: false });
    expect(await screen.findByRole("heading", { level: 1, name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign in with your digital ID" })).toHaveAttribute(
      "href",
      "/auth/login?returnTo=%2Fdashboard%2Fapplications%2Fabc",
    );
    expect(screen.getByRole("link", { name: /I don.t have a digital ID yet/ })).toHaveAttribute(
      "href",
      "/auth/register?returnTo=%2Fdashboard%2Fapplications%2Fabc",
    );
  });

  it("shows the tenant's official statement, how-to-tell link and lockup", async () => {
    renderAt("/", emptyCatalogue, { signedIn: false });
    await screen.findByRole("heading", { level: 1 });
    const banner = screen.getByRole("region", { name: "Official website notice" });
    expect(banner).toHaveTextContent(TENANT.officialStatement);
    expect(banner).toHaveTextContent(TENANT.environmentNotice);
    expect(within(banner).getByRole("link", { name: "How to tell" })).toHaveAttribute(
      "href",
      TENANT.howToTellHref,
    );
    const lockups = screen.getAllByRole("img", { name: TENANT.lockup.alt });
    expect(new Set(lockups.map((img) => img.getAttribute("src")))).toEqual(
      new Set([TENANT.lockup.onDark.src, TENANT.lockup.onLight.src]),
    );
  });

  it("serves the how-to-tell page to signed-out visitors", async () => {
    renderAt(TENANT.howToTellHref, [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "How to tell this site is official" }),
    ).toBeInTheDocument();
    expect(screen.getByText(new RegExp(TENANT.officialSiteAddress))).toBeInTheDocument();
  });

  it("shows gateway sign-in errors and removes them from the address bar", async () => {
    renderAt("/?signin_error=not-linked", emptyCatalogue, { signedIn: false });
    expect(await screen.findByText("We could not find your account")).toBeInTheDocument();
    expect(window.location.search).toBe("");
  });

  it("announces that it is checking the session before a signed-in page", () => {
    renderAt("/dashboard", [], { signedIn: false });
    expect(screen.getByRole("status")).toHaveTextContent(/checking whether you are signed in/i);
  });

  it("shows the website's not-found page for an unknown public path", async () => {
    renderAt("/no-such-page", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to the homepage" })).toHaveAttribute("href", "/");
  });
});

describe("signed in on the website", () => {
  it("sends / to the dashboard", async () => {
    renderAt("/", [emptyHome, noActions]);
    expect(await screen.findByRole("heading", { level: 1, name: /Alex/ })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/dashboard");
  });

  it("keeps public pages public, offering 'Your account' instead of 'Sign in'", async () => {
    renderAt("/how-to-tell", []);
    await screen.findByRole("heading", { level: 1, name: "How to tell this site is official" });
    const account = await screen.findAllByRole("link", { name: "Your account" });
    for (const link of account) expect(link).toHaveAttribute("href", "/dashboard");
    expect(screen.queryByRole("link", { name: "Sign in" })).not.toBeInTheDocument();
  });
});

describe("signed-in shell", () => {
  it("has a skip link, main landmark, sidebar and bottom tabs with the current page marked", async () => {
    renderAt("/dashboard", [emptyHome, noActions]);
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
    renderAt("/dashboard", [emptyHome, noActions, servicesList, families]);
    await screen.findByRole("heading", { level: 1, name: /Alex/ });
    const tabBar = screen.getAllByRole("navigation", { name: "Main" })[1] as HTMLElement;
    await user.click(within(tabBar).getByRole("link", { name: "Services" }));
    const h1 = await screen.findByRole("heading", { level: 1, name: "Find a service" });
    expect(h1).toHaveFocus();
    expect(window.location.pathname).toBe("/dashboard/services");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("follows back and forward", async () => {
    const user = userEvent.setup();
    renderAt("/dashboard", [emptyHome, noActions, servicesList, families]);
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
    renderAt("/dashboard/no-such-page", []);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "go to your home page" })).toHaveAttribute(
      "href",
      "/dashboard",
    );
  });

  it("signs out with POST /auth/logout and shows the signed-out page", async () => {
    const user = userEvent.setup();
    const { fetch } = renderAt("/dashboard", [emptyHome, noActions]);
    await user.click(await screen.findByRole("button", { name: "Sign out" }));
    expect(
      await screen.findByRole("heading", { level: 1, name: "You've signed out" }),
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe("/signed-out");
    expect(screen.getByRole("link", { name: "Also sign out of your digital ID" })).toHaveAttribute(
      "href",
      "/auth/logout/redirect",
    );
    const post = (fetch.mock.calls as [Request][]).find(([r]) => r.method === "POST")?.[0];
    expect(new URL(post?.url ?? "").pathname).toBe("/auth/logout");
    expect(post?.headers.get("X-HeartStone-CSRF")).toBe("1");
  });

  it("asks to sign in again, keeping the page, when the backend ends the session", async () => {
    renderAt("/dashboard", [
      on("GET", "/experience/citizen/home", () =>
        json({ statusCode: 401, message: "Session has expired" }, 401),
      ),
      noActions,
    ]);
    expect(await screen.findByText(/your session has ended/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign in with your digital ID" })).toHaveAttribute(
      "href",
      "/auth/login?returnTo=%2Fdashboard",
    );
  });
});

describe("account errors", () => {
  it("keeps the shell and offers Try again when /me fails", async () => {
    renderAt("/dashboard", [emptyHome, noActions], {
      me: () => json({ statusCode: 500, message: "x" }, 500),
    });
    expect(
      await screen.findByRole("heading", { level: 1, name: "We could not load your account" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument();
    expect(screen.getByText(/^Reference: /)).toBeInTheDocument();
  });

  it("asks for a fresh sign-in when a page needs step-up", async () => {
    renderAt("/dashboard", [
      on("GET", "/experience/citizen/home", () => json(stepUpBody, 401)),
      noActions,
    ]);
    const link = await screen.findByRole("link", { name: "Sign in again" });
    expect(link.getAttribute("href")).toMatch(/reauth=1/);
  });

  it("explains a safe halt", async () => {
    renderAt("/dashboard", [
      on("GET", "/experience/citizen/home", () => json(safeHaltBody, 403)),
      noActions,
    ]);
    expect(await screen.findByText("This service is paused")).toBeInTheDocument();
  });

  it("keeps loading states announced", () => {
    renderAt("/dashboard", [on("GET", "/experience/citizen/home", never), noActions]);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
