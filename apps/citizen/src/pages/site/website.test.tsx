// The public website inside the citizen app: real pages, public endpoints, honest empty states,
// and sign-in / registration links through the gateway.
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, on, renderAt } from "../../test/harness";
import { service, serviceDetail } from "../../test/fixtures";

const page = (items: unknown[]) =>
  json({ items, page: 1, limit: 20, total: items.length, totalPages: items.length ? 1 : 0 });
const emptyServices = on("GET", "/public/services", () => page([]));
const noFamilies = on("GET", "/public/service-families", () => json([]));
const families = on("GET", "/public/service-families", () =>
  json([
    {
      id: "f1",
      code: "employment",
      name: "Work and employment",
      description: "Permits, employers",
    },
  ]),
);

afterEach(() => window.history.replaceState(null, "", "/"));

describe("Website home", () => {
  it("links to sign in and registration through the gateway, and to the public tools", async () => {
    renderAt("/", [emptyServices, noFamilies], { signedIn: false });
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
    // No workstation address is configured for this host, so it explains where to sign in.
    expect(
      within(account).getByRole("link", {
        name: "Government official? Sign in to your workstation",
      }),
    ).toHaveAttribute("href", "/officials");
    const searches = screen.getByRole("navigation", { name: "Common searches" });
    expect(within(searches).getByRole("link", { name: "Register a business" })).toHaveAttribute(
      "href",
      "/services?q=register%20a%20business",
    );
  });

  it("says honestly that nothing is published yet, instead of showing example services", async () => {
    renderAt("/", [emptyServices, noFamilies], { signedIn: false });
    expect(await screen.findByText("No services are published yet")).toBeInTheDocument();
    expect(await screen.findByText("No topics yet")).toBeInTheDocument();
    expect(screen.queryByText(/Transport Board|Labour Department/)).not.toBeInTheDocument();
  });

  it("lists published services and topics from the public catalogue", async () => {
    renderAt("/", [on("GET", "/public/services", () => page([service])), families], {
      signedIn: false,
    });
    const list = await screen.findByRole("list", { name: "Services" });
    expect(within(list).getByRole("link", { name: /Register as an employer/ })).toHaveAttribute(
      "href",
      "/services/register-employer",
    );
    const topics = await screen.findByRole("list", { name: "Topics" });
    expect(within(topics).getByRole("link", { name: /Work and employment/ })).toHaveAttribute(
      "href",
      "/topics/employment",
    );
  });

  it("searches the public catalogue in plain words", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt(
      "/",
      [emptyServices, noFamilies, on("POST", "/public/services/match", () => json([]))],
      { signedIn: false },
    );
    await user.type(
      await screen.findByLabelText("What do you need to do?", { exact: false }),
      "open a shop",
    );
    await user.click(screen.getByRole("button", { name: "Search" }));
    expect(await screen.findByRole("heading", { level: 1, name: "Find a service" })).toHaveFocus();
    expect(window.location.pathname + window.location.search).toBe("/services?q=open%20a%20shop");
    expect(await screen.findByText("No services match")).toBeInTheDocument();
    expect(mutations("POST", "/public/services/match")[0]?.body).toEqual({ query: "open a shop" });
  });

  it("folds the main navigation behind a Menu button on small screens", async () => {
    const user = userEvent.setup();
    renderAt("/", [emptyServices, noFamilies], { signedIn: false });
    const toggle = await screen.findByRole("button", { name: "Menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const nav = document.getElementById(toggle.getAttribute("aria-controls") ?? "");
    expect(nav).toHaveAccessibleName("Main");
  });

  it("moves focus to the new page's h1 after following a header link", async () => {
    const user = userEvent.setup();
    renderAt("/", [emptyServices, noFamilies], { signedIn: false });
    await screen.findByRole("heading", { level: 1 });
    const nav = screen.getByRole("navigation", { name: "Main" });
    await user.click(within(nav).getByRole("link", { name: "Help" }));
    expect(await screen.findByRole("heading", { level: 1, name: "Help" })).toHaveFocus();
    expect(within(nav).getByRole("link", { name: "Help" })).toHaveAttribute("aria-current", "page");
  });
});

describe("Public services", () => {
  it("lists the public catalogue with an honest empty state", async () => {
    renderAt("/services", [emptyServices, noFamilies], { signedIn: false });
    expect(await screen.findByText("No services published yet")).toBeInTheDocument();
  });

  it("shows a service's public page and asks to sign in to apply, keeping the service", async () => {
    renderAt(
      "/services/register-employer",
      [on("GET", "/public/services/register-employer", () => json(serviceDetail))],
      { signedIn: false },
    );
    expect(
      await screen.findByRole("heading", { level: 1, name: "Register as an employer" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign in to apply" })).toHaveAttribute(
      "href",
      "/auth/login?returnTo=%2Fdashboard%2Fservices%2Fregister-employer",
    );
    expect(
      within(screen.getByRole("main")).getByRole("link", { name: "Get a digital ID" }),
    ).toHaveAttribute(
      "href",
      "/auth/register?returnTo=%2Fdashboard%2Fservices%2Fregister-employer",
    );
    expect(screen.queryByRole("link", { name: "Start application" })).not.toBeInTheDocument();
  });

  it("offers the application straight away to someone already signed in", async () => {
    renderAt("/services/register-employer", [
      on("GET", "/public/services/register-employer", () => json(serviceDetail)),
    ]);
    expect(await screen.findByRole("link", { name: "Start application" })).toHaveAttribute(
      "href",
      "/dashboard/services/register-employer/apply",
    );
  });
});

describe("Topics and audiences", () => {
  it("shows a topic from the backend's service families, with its services", async () => {
    renderAt(
      "/topics/employment",
      [families, on("GET", "/public/services", () => page([service]))],
      { signedIn: false },
    );
    expect(
      await screen.findByRole("heading", { level: 1, name: "Work and employment" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("list", { name: "Work and employment services" }),
    ).toHaveTextContent("Register as an employer");
  });

  it("says when a topic does not exist", async () => {
    renderAt("/topics/nope", [families, emptyServices], { signedIn: false });
    expect(
      await screen.findByRole("heading", { level: 1, name: "Topic not found" }),
    ).toBeInTheDocument();
  });

  it("filters the business page by applicant category", async () => {
    const seen: string[] = [];
    renderAt(
      "/business",
      [
        on("GET", "/public/services", (_req, url) => {
          seen.push(url.searchParams.get("applicantCategory") ?? "");
          return page([]);
        }),
      ],
      { signedIn: false },
    );
    expect(await screen.findByText("No services are published here yet")).toBeInTheDocument();
    expect(seen).toContain("BUSINESS");
    expect(screen.getByRole("heading", { name: "Acting for a business" })).toBeInTheDocument();
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

  it("marks pages that are not ready as coming soon, not as real information", async () => {
    renderAt("/life-events", [], { signedIn: false });
    expect(await screen.findByText("Guides are coming soon")).toBeInTheDocument();
    window.history.replaceState(null, "", "/");
    renderAt("/offices", [], { signedIn: false });
    expect(await screen.findByText("Office details are coming soon")).toBeInTheDocument();
  });
});
