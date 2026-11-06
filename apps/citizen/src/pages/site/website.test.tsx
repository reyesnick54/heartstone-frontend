// The public website: real pages rendered from the tenant's website content, with no backend
// needed; a working search; sign-in and registration through the gateway; and the backend only
// adding "Apply online" when a service is published in its catalogue.
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApiProvider } from "@heartstone/api-client/react";
import { OnlineApplication, isOpenOnline } from "../../components/OnlineApplication";
import type { ServiceContent } from "../../content/schema";
import { validateContent } from "../../content/validate";
import { hasRoute } from "../../routes";
import { json, renderAt } from "../../test/harness";
import { serviceDetail } from "../../test/fixtures";
import { WEBSITE_CONTENT } from "../../tenant";

afterEach(() => window.history.replaceState(null, "", "/"));

/** Requests the page made to the backend API (the session check is the gateway's). */
function apiCalls(fetch: ReturnType<typeof renderAt>["fetch"]): string[] {
  return fetch.mock.calls
    .map(([req]) => new URL(req.url).pathname)
    .filter((path) => path.startsWith("/api/"));
}

describe("Website home", () => {
  it("links to sign in and registration through the gateway, and to the public tools", async () => {
    renderAt("/", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1, name: "Government services, in one place." });
    const account = screen.getByRole("region", { name: "Your government account" });
    expect(
      within(account).getByRole("link", { name: "Sign in with your digital ID" }),
    ).toHaveAttribute("href", "/auth/login?returnTo=%2Fdashboard");
    expect(within(account).getByRole("link", { name: "Get a digital ID" })).toHaveAttribute(
      "href",
      "/auth/register?returnTo=%2Fdashboard",
    );
    expect(
      within(account).getByRole("link", { name: "Check a government document is genuine" }),
    ).toHaveAttribute("href", "/verify");
    expect(
      within(account).getByRole("link", {
        name: "Government official? Sign in to your workstation",
      }),
    ).toHaveAttribute("href", "/officials");
    const searches = screen.getByRole("navigation", { name: "Common searches" });
    expect(within(searches).getByRole("link", { name: "Register a company" })).toHaveAttribute(
      "href",
      "/search?q=register%20a%20company",
    );
  });

  it("renders in full from content, with no backend requests, spinners or empty states", async () => {
    const { fetch, unhandled } = renderAt("/", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1 });
    expect(screen.getByRole("heading", { level: 2, name: "What ABSEZ is" })).toBeInTheDocument();
    const popular = screen.getByRole("list", { name: "Popular services" });
    expect(within(popular).getByRole("link", { name: "Register a new company" })).toHaveAttribute(
      "href",
      "/services/register-a-company",
    );
    const path = screen.getByRole("list", {
      name: "How your application moves through the One-Stop Service",
    });
    expect(within(path).getAllByRole("listitem")).toHaveLength(6);
    expect(within(path).getByText("Within 72 hours")).toBeInTheDocument();
    expect(within(path).getByText("Within 24 hours")).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Life events" })).toHaveTextContent(
      "Starting a business in the zone",
    );
    expect(screen.queryByText(/published yet|coming soon/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("status", { name: /loading/i })).not.toBeInTheDocument();
    expect(apiCalls(fetch)).toEqual([]);
    expect(unhandled).toEqual([]);
  });

  it("searches the website from the hero and shows grouped results", async () => {
    const user = userEvent.setup();
    renderAt("/", [], { signedIn: false });
    await user.type(
      await screen.findByLabelText("What do you need to do?", { exact: false }),
      "work permit",
    );
    await user.click(
      within(screen.getByRole("search", { name: "Find a service" })).getByRole("button", {
        name: "Search",
      }),
    );
    expect(
      await screen.findByRole("heading", { level: 1, name: "Search results for “work permit”" }),
    ).toHaveFocus();
    expect(window.location.pathname + window.location.search).toBe("/search?q=work%20permit");
    const services = screen.getByRole("list", { name: "Services" });
    expect(within(services).getAllByRole("link")[0]).toHaveAccessibleName(
      "Apply for a work permit",
    );
  });

  it("has a search box in the header that works from any page", async () => {
    const user = userEvent.setup();
    renderAt("/about", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1 });
    const header = screen.getByRole("search", { name: "Site search" });
    await user.type(within(header).getByRole("searchbox", { name: "Search this website" }), "visa");
    await user.click(within(header).getByRole("button", { name: "Search" }));
    expect(
      await screen.findByRole("heading", { level: 1, name: "Search results for “visa”" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Services" })).toHaveTextContent(
      "Make an immigration application",
    );
  });

  it("folds the main navigation behind a Menu button on small screens", async () => {
    const user = userEvent.setup();
    renderAt("/", [], { signedIn: false });
    const toggle = await screen.findByRole("button", { name: "Menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const nav = document.getElementById(toggle.getAttribute("aria-controls") ?? "");
    expect(nav).toHaveAccessibleName("Main");
  });

  it("moves focus to the new page's h1 after following a header link", async () => {
    const user = userEvent.setup();
    renderAt("/", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1 });
    const nav = screen.getByRole("navigation", { name: "Main" });
    await user.click(within(nav).getByRole("link", { name: "Help" }));
    expect(await screen.findByRole("heading", { level: 1, name: "Help" })).toHaveFocus();
    expect(within(nav).getByRole("link", { name: "Help" })).toHaveAttribute("aria-current", "page");
  });
});

describe("Every top-level page", () => {
  it.each([
    ["/services", "Services"],
    ["/topics", "Service areas"],
    ["/individuals", "Services for individuals and families"],
    ["/business", "Business and investors"],
    ["/life-events", "Life events"],
    ["/help", "Help"],
    ["/help/questions", "Common questions"],
    ["/glossary", "Glossary"],
    ["/about", "About ABSEZ and the One-Stop Service"],
    ["/departments", "Departments"],
    ["/search", "Search"],
    ["/contact", "Contact us"],
  ])("%s renders one h1 from content without calling the backend", async (path, title) => {
    const { fetch } = renderAt(path, [], { signedIn: false });
    expect(await screen.findByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(apiCalls(fetch)).toEqual([]);
  });

  it("links only to pages that exist", () => {
    expect(validateContent(WEBSITE_CONTENT, hasRoute)).toEqual([]);
  });
});

describe("Service pages", () => {
  it("shows a full service page from content", async () => {
    const { fetch } = renderAt("/services/work-permit", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Apply for a work permit" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Labour Coordination Department" })).toHaveAttribute(
      "href",
      "/departments/labour-coordination",
    );
    for (const heading of [
      "Who this is for",
      "What you can do",
      "What to prepare",
      "How it works",
      "Service standards",
      "How the decision is made",
      "If you disagree with a decision",
    ]) {
      expect(screen.getByRole("heading", { level: 2, name: heading })).toBeInTheDocument();
    }
    expect(
      screen.getByRole("list", { name: "Steps: Work permit processing (Appendix C, Workflow 4)" }),
    ).toHaveTextContent("Employer eligibility check");
    expect(screen.getByRole("table", { name: "Target times" })).toHaveTextContent(
      "Within 72 hours of receipt",
    );
    expect(screen.getByRole("region", { name: "How the decision is made" })).toHaveTextContent(
      "Approved by ABSEZ within its delegated authority",
    );
    expect(screen.getByText(/Based on:/).parentElement).toHaveTextContent("Appendix C, Workflow 4");
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toHaveTextContent(
      "Work and employment",
    );
    // Not published in the backend catalogue: an honest route to start, and no request.
    const start = screen.getByRole("region", { name: "How to start" });
    expect(start).toHaveTextContent("Online applications for this service are being prepared");
    expect(within(start).getByRole("link", { name: "Contact ABSEZ" })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(apiCalls(fetch)).toEqual([]);
  });

  it("uses the general One-Stop steps where the documents set no workflow", async () => {
    renderAt("/services/vehicle-registration", [], { signedIn: false });
    expect(
      await screen.findByRole("list", { name: "How applications are handled" }),
    ).toHaveTextContent("Completeness review");
  });

  it("shows the emergency number on safety services", async () => {
    renderAt("/services/safety-incident-report", [], { signedIn: false });
    expect(
      await screen.findByText(/Do not use this website to report an emergency/),
    ).toHaveTextContent("Call 911");
  });

  it("says when a service does not exist", async () => {
    renderAt("/services/nope", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Service not found" }),
    ).toBeInTheDocument();
  });

  it("sends old service searches to the website search", async () => {
    renderAt("/services?q=open%20a%20shop", [], { signedIn: false });
    await waitFor(() => expect(window.location.pathname).toBe("/search"));
    expect(window.location.search).toBe("?q=open%20a%20shop");
  });

  it("groups every service by area on /services", async () => {
    renderAt("/services", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1, name: "Services" });
    for (const category of WEBSITE_CONTENT.categories) {
      expect(screen.getByRole("list", { name: `${category.name} services` })).toBeInTheDocument();
    }
    const total = WEBSITE_CONTENT.categories.reduce(
      (n, c) =>
        n +
        within(screen.getByRole("list", { name: `${c.name} services` })).getAllByRole("listitem")
          .length,
      0,
    );
    expect(total).toBe(WEBSITE_CONTENT.services.length);
  });

  it("shows a service area with its services and departments", async () => {
    renderAt("/topics/customs", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Customs and trade" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Customs and trade services" })).toHaveTextContent(
      "Customs declarations and clearance",
    );
    expect(
      screen.getByRole("link", { name: "Customs Coordination Department" }),
    ).toBeInTheDocument();
  });
});

describe("Apply online or being prepared", () => {
  const first = WEBSITE_CONTENT.services[0];
  if (!first) throw new Error("no services");
  const base: ServiceContent = first;
  const linked: ServiceContent = { ...base, catalogueCode: "register-employer" };

  /** Renders the panel; returns the API requests it made (not the provider's session check). */
  function renderPanel(service: ServiceContent, respond: () => Response | Promise<Response>) {
    const apiRequests: string[] = [];
    const fetch = vi.fn(async (req: Request) => {
      const path = new URL(req.url).pathname;
      if (!path.startsWith("/api/")) return json({ authenticated: false });
      apiRequests.push(path);
      return respond();
    });
    render(
      <ApiProvider fetch={fetch}>
        <OnlineApplication service={service} />
      </ApiProvider>,
    );
    return apiRequests;
  }

  it("offers Apply online when the catalogue has the service open for applications", async () => {
    renderPanel(linked, () => json(serviceDetail));
    expect(await screen.findByRole("link", { name: "Apply online" })).toHaveAttribute(
      "href",
      "/dashboard/services/register-employer/apply",
    );
  });

  it("says applications are being prepared when the catalogue has it but not open", async () => {
    renderPanel(linked, () => json({ ...serviceDetail, availabilityStatus: "UNDER_DEVELOPMENT" }));
    await waitFor(() =>
      expect(screen.getByRole("region", { name: "How to start" })).toHaveTextContent(
        "being prepared",
      ),
    );
    expect(screen.queryByRole("link", { name: "Apply online" })).not.toBeInTheDocument();
  });

  it("fails silently to the content-only panel when the backend errors", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const requests = renderPanel(linked, () =>
      json({ statusCode: 404, message: "Not found" }, 404),
    );
    await waitFor(() => expect(warn).toHaveBeenCalled());
    expect(requests).toEqual(["/api/v1/public/services/register-employer"]);
    expect(screen.getByRole("region", { name: "How to start" })).toHaveTextContent(
      "Online applications for this service are being prepared",
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.queryByText(/not found|could not/i)).not.toBeInTheDocument();
    warn.mockRestore();
  });

  it("does not call the backend for a service with no catalogue code", () => {
    const requests = renderPanel(base, () => json(serviceDetail));
    expect(requests).toEqual([]);
    expect(screen.getByRole("region", { name: "How to start" })).toBeInTheDocument();
  });

  it("treats only open catalogue states as open", () => {
    const s = { applicationCapable: true, isInformationOnly: false };
    expect(isOpenOnline({ ...s, availabilityStatus: "ACTIVE" })).toBe(true);
    expect(isOpenOnline({ ...s, availabilityStatus: "PILOT_ONLY" })).toBe(true);
    expect(isOpenOnline({ ...s, availabilityStatus: "SUSPENDED" })).toBe(false);
    expect(isOpenOnline({ ...s, applicationCapable: false, availabilityStatus: "ACTIVE" })).toBe(
      false,
    );
    expect(isOpenOnline({ ...s, isInformationOnly: true, availabilityStatus: "ACTIVE" })).toBe(
      false,
    );
  });
});

describe("Life events, business and about", () => {
  it("shows a life event's steps, each linking to its services", async () => {
    renderAt("/life-events/starting-a-business", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Starting a business in the zone" }),
    ).toBeInTheDocument();
    const steps = screen.getByRole("list", { name: "Steps: Starting a business in the zone" });
    expect(
      within(steps).getByRole("heading", { name: /Register your company/ }),
    ).toBeInTheDocument();
    expect(within(steps).getByRole("link", { name: "Register a new company" })).toHaveAttribute(
      "href",
      "/services/register-a-company",
    );
  });

  it("shows project readiness with its disclaimers", async () => {
    renderAt("/business/project-readiness", [], { signedIn: false });
    expect(
      await screen.findByRole("table", { name: "Project readiness statuses" }),
    ).toHaveTextContent("Ready for implementation");
    expect(screen.getByText(/does not count as any regulatory approval/)).toBeInTheDocument();
    expect(screen.getByText(/does not guarantee investment performance/)).toBeInTheDocument();
  });

  it("lists investor guides, sectors and services on the business page", async () => {
    renderAt("/business", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1, name: "Business and investors" });
    expect(screen.getByRole("list", { name: "Investor guides" })).toHaveTextContent(
      "Strategic projects",
    );
    expect(screen.getByRole("list", { name: "Sectors" })).toHaveTextContent(
      "Only activities that are lawful can be licensed.",
    );
    expect(screen.getByRole("heading", { name: "Acting for a business" })).toBeInTheDocument();
  });

  it("explains the Advisory Committee's supervisory role on About", async () => {
    renderAt("/about", [], { signedIn: false });
    const advisory = await screen.findByRole("region", { name: "The Advisory Committee" });
    expect(advisory).toHaveTextContent("Citizenship by Investment Unit (CIU)");
    expect(advisory).toHaveTextContent("does not interfere directly");
  });

  it("shows a department with its services", async () => {
    renderAt("/departments/customs-coordination", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Customs Coordination Department" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("list", { name: "Services of the Customs Coordination Department" }),
    ).toHaveTextContent("Import and export coordination");
  });
});

describe("Help", () => {
  it("lists every case status", async () => {
    renderAt("/help/case-statuses", [], { signedIn: false });
    const table = await screen.findByRole("table", { name: "Case statuses" });
    expect(within(table).getAllByRole("row")).toHaveLength(
      WEBSITE_CONTENT.help.caseStatuses.length + 1,
    );
  });

  it("opens and focuses the question a search result links to", async () => {
    renderAt("/help/questions#fees", [], { signedIn: false });
    await screen.findByRole("heading", { level: 1, name: "Common questions" });
    const item = document.getElementById("fees");
    expect(item).toHaveAttribute("open");
    await waitFor(() => expect(item?.querySelector("summary")).toHaveFocus());
  });

  it("shows the glossary with its important differences", async () => {
    renderAt("/glossary", [], { signedIn: false });
    expect(await screen.findByText("Complete is not the same as approved")).toBeInTheDocument();
    expect(screen.getByText("Deficiency notice")).toBeInTheDocument();
  });

  it("says plainly when nothing matches a search", async () => {
    renderAt("/search?q=zzzqqq", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { name: "Nothing matched your search" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("No results");
  });
});

describe("Account pages", () => {
  it("explains a basic digital ID honestly and links to registration", async () => {
    renderAt("/digital-id", [], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Get a digital ID" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/It does not check who you are/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Create your digital ID" })).toHaveAttribute(
      "href",
      "/auth/register?returnTo=%2Fdashboard",
    );
  });

  it("tells officials where to get the workstation address when none is configured", async () => {
    renderAt("/officials", [], { signedIn: false });
    expect(
      await screen.findByText(/system administrator will give you the workstation address/),
    ).toBeInTheDocument();
  });
});
