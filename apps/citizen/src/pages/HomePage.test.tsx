import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, never, on, renderAt } from "../test/harness";

const counts = {
  activeApplications: 3,
  actionRequired: 2,
  pendingGovernmentRequests: 0,
  recentDecisions: 1,
  issuedCredentials: 2,
  outstandingPayments: 1,
  upcomingExpirations: 1,
  unreadMessages: 2,
  appealsRedressMatters: 0,
  upcomingAppointments: 1,
};

const home = (overrides: Record<string, unknown> = {}) =>
  on("GET", "/experience/citizen/home", () =>
    json({
      counts,
      recentItems: [
        {
          itemType: "CASE",
          itemId: "case-1",
          title: "Food service licence",
          occurredAt: "2026-09-22T10:00:00.000Z",
          attribution: {
            institutionId: "i",
            institutionCode: "BL",
            institutionName: "Business Licensing",
          },
        },
      ],
      serviceRecommendations: [
        {
          serviceId: "svc-1",
          serviceSlug: "register-employer",
          publicName: "Register as an employer",
          recommendationReason: { label: "Because you are applying for a licence" },
        },
      ],
      disclaimer: { label: "This page summarises your records." },
      ...overrides,
    }),
  );

const actions = (items: unknown[]) =>
  on("GET", "/experience/citizen/actions", () =>
    json({
      items,
      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: items.length,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    }),
  );

const payAction = {
  actionCode: "PAY_INVOICE",
  label: { label: "Pay invoice" },
  priority: 1,
  dueAt: "2026-10-10T00:00:00.000Z",
  createdAt: "2026-10-01T00:00:00.000Z",
  attribution: {
    institutionId: "i",
    institutionCode: "BL",
    institutionName: "Business Licensing",
    serviceName: "Food service licence",
  },
  deepLink: { route: "citizen.payment.invoice", params: { invoiceId: "inv-1" } },
};

describe("Home", () => {
  it("greets the person and shows the backend's counts, actions, activity and suggestions", async () => {
    renderAt("/dashboard", [home(), actions([payAction])]);
    expect(await screen.findByRole("heading", { level: 1, name: /Alex$/ })).toBeInTheDocument();
    const glance = await screen.findByRole("list", { name: "At a glance" });
    expect(within(glance).getByText("Active applications").closest("li")).toHaveTextContent("3");
    expect(within(glance).getByText("Unread messages").closest("li")).toHaveTextContent("2");
    const todo = await screen.findByRole("list", { name: "Things to do" });
    expect(within(todo).getByText("Pay invoice")).toBeInTheDocument();
    expect(todo).toHaveTextContent("Business Licensing · Food service licence");
    expect(todo).toHaveTextContent("Paying does not decide your application.");
    expect(screen.getByRole("list", { name: "Recent activity" })).toHaveTextContent(
      "Food service licence",
    );
    expect(screen.getByRole("link", { name: "Register as an employer" })).toHaveAttribute(
      "href",
      "/dashboard/services/register-employer",
    );
    expect(screen.getByText("This page summarises your records.")).toBeInTheDocument();
  });

  it("turns the backend's deep links into in-app links, and leaves unknown ones unlinked", async () => {
    const unknown = {
      ...payAction,
      actionCode: "SUBMIT_APPEAL",
      label: { label: "Submit appeal" },
      deepLink: { route: "citizen.unknown", params: {} },
    };
    renderAt("/dashboard", [home(), actions([payAction, unknown])]);
    const todo = await screen.findByRole("list", { name: "Things to do" });
    expect(within(todo).getByRole("link", { name: "Pay invoice" })).toHaveAttribute(
      "href",
      "/dashboard/payments/inv-1",
    );
    expect(within(todo).queryByRole("link", { name: "Submit appeal" })).not.toBeInTheDocument();
    expect(todo).toHaveTextContent("Submit appeal");
  });

  it("shows empty states", async () => {
    renderAt("/dashboard", [home({ recentItems: [], serviceRecommendations: [] }), actions([])]);
    expect(await screen.findByText("Nothing needs your attention right now.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "No recent activity" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Suggested for you" })).not.toBeInTheDocument();
  });

  it("announces loading", async () => {
    renderAt("/dashboard", [
      on("GET", "/experience/citizen/home", never),
      on("GET", "/experience/citizen/actions", never),
    ]);
    expect(await screen.findByText("Loading your summary")).toBeInTheDocument();
  });

  it("offers Try again for a failed read, and recovers", async () => {
    let calls = 0;
    const { unhandled } = renderAt("/dashboard", [
      on("GET", "/experience/citizen/home", () =>
        ++calls === 1
          ? json({ statusCode: 500, message: "x" }, 500)
          : json({
              counts,
              recentItems: [],
              serviceRecommendations: [],
              disclaimer: { label: "d" },
            }),
      ),
      actions([]),
    ]);
    const retry = await screen.findByRole("button", { name: "Try again" });
    expect(screen.getByText("We could not load your summary")).toBeInTheDocument();
    await userEvent.setup().click(retry);
    expect(await screen.findByRole("list", { name: "At a glance" })).toBeInTheDocument();
    expect(unhandled).toEqual([]);
  });

  it("says the account is a basic digital ID, shows sign-in strength, and never claims 'verified'", async () => {
    renderAt("/dashboard", [home(), actions([])]);
    expect(
      await screen.findByRole("heading", { name: "Your account is a basic digital ID" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/has not been through an identity check/)).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.queryByText(/verified/i)).not.toBeInTheDocument();
    // No gold (official) styling for an account that has not been identity-checked.
    expect(document.querySelector('[data-tone="official"]')).toBeNull();
  });

  it("sends 'describe what you need' to the service search", async () => {
    const user = userEvent.setup();
    renderAt("/dashboard", [
      home(),
      actions([]),
      on("POST", "/experience/citizen/services/match", () => json([])),
      on("GET", "/public/service-families", () => json([])),
    ]);
    await user.type(
      await screen.findByLabelText("Describe what you need", { exact: false }),
      "open a shop",
    );
    await user.click(screen.getByRole("button", { name: "Find services" }));
    expect(
      await screen.findByRole("heading", { level: 1, name: "Find a service" }),
    ).toBeInTheDocument();
    expect(window.location.search).toBe("?q=open%20a%20shop");
  });
});
