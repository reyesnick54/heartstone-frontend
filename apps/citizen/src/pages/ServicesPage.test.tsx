import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, never, on, renderAt } from "../test/harness";
import { service } from "../test/fixtures";

const families = on("GET", "/public/service-families", () =>
  json([{ id: "f1", code: "EMPLOYMENT", name: "Employment", description: null }]),
);

describe("Find a service", () => {
  it("lists published services with the backend's availability and office", async () => {
    renderAt("/services", [
      families,
      on("GET", "/experience/citizen/services", () =>
        json({
          items: [
            service,
            {
              ...service,
              serviceId: "svc-2",
              slug: "info",
              publicName: "Contributions explained",
              availabilityStatus: "INFORMATION_ONLY",
              isInformationOnly: true,
              applicationCapable: false,
            },
          ],
          page: 1,
          limit: 20,
          total: 2,
          totalPages: 1,
        }),
      ),
    ]);
    const list = await screen.findByRole("list", { name: "Services" });
    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(
      within(items[0] as HTMLElement).getByRole("link", { name: "Register as an employer" }),
    ).toHaveAttribute("href", "/services/register-employer");
    expect(items[0]).toHaveTextContent("Labour Department");
    expect(items[0]).toHaveTextContent("Apply online");
    expect(items[1]).toHaveTextContent("Information only");
    expect(screen.getByRole("heading", { level: 2, name: "2 services" })).toBeInTheDocument();
  });

  it("filters by category through the query string", async () => {
    const user = userEvent.setup();
    const { fetch } = renderAt("/services", [
      families,
      on("GET", "/experience/citizen/services", () =>
        json({ items: [], page: 1, limit: 20, total: 0, totalPages: 0 }),
      ),
    ]);
    await user.selectOptions(
      await screen.findByLabelText("Category", { exact: false }),
      "EMPLOYMENT",
    );
    expect(window.location.search).toBe("?family=EMPLOYMENT");
    await screen.findByRole("heading", { name: "No services published yet" });
    const urls = (fetch.mock.calls as [Request][])
      .map(([r]) => r.url)
      .filter((u) => u.includes("/experience/citizen/services"));
    expect(urls.some((u) => u.includes("family=EMPLOYMENT"))).toBe(true);
  });

  it("matches what the person describes (rule-based) and shows an empty result honestly", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/services", [
      families,
      on("GET", "/experience/citizen/services", () =>
        json({ items: [], page: 1, limit: 20, total: 0, totalPages: 0 }),
      ),
      on("POST", "/experience/citizen/services/match", () => json([])),
    ]);
    await user.type(
      await screen.findByLabelText("What do you need to do?", { exact: false }),
      "open a shop",
    );
    await user.click(screen.getByRole("button", { name: "Find services" }));
    expect(await screen.findByRole("heading", { name: "No services match" })).toBeInTheDocument();
    expect(mutations("POST", "/experience/citizen/services/match")[0]?.body).toEqual({
      query: "open a shop",
    });
  });

  it("shows loading and a retryable error", async () => {
    let calls = 0;
    renderAt("/services", [
      families,
      on("GET", "/experience/citizen/services", () =>
        ++calls === 1
          ? json({ statusCode: 503, message: "down" }, 503)
          : json({ items: [service], page: 1, limit: 20, total: 1, totalPages: 1 }),
      ),
    ]);
    expect(await screen.findByText("We could not load services")).toBeInTheDocument();
    (await screen.findByRole("button", { name: "Try again" })).click();
    expect(
      await screen.findByRole("link", { name: "Register as an employer" }),
    ).toBeInTheDocument();
  });

  it("announces loading", async () => {
    renderAt("/services", [families, on("GET", "/experience/citizen/services", never)]);
    expect(await screen.findByText("Loading services")).toBeInTheDocument();
  });
});
