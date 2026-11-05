import { screen, within } from "@testing-library/react";
import { json, on, renderAt } from "../test/harness";
import { serviceDetail } from "../test/fixtures";

describe("Service detail", () => {
  it("shows the backend's stages, fees (with payment-is-not-approval), outputs and redress", async () => {
    renderAt("/services/register-employer", [
      on("GET", "/experience/citizen/services/register-employer", () => json(serviceDetail)),
    ]);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Register as an employer" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Expected stages" })).toHaveTextContent(
      "Documents checked",
    );
    expect(
      screen.getByText(/Paying a fee does not mean your application is approved/),
    ).toBeInTheDocument();
    expect(screen.getByText("Employer registration certificate")).toBeInTheDocument();
    expect(screen.getByText("Reconsideration")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Start application" })).toHaveAttribute(
      "href",
      "/services/register-employer/apply",
    );
    expect(screen.getByRole("link", { name: "Check if you can apply" })).toHaveAttribute(
      "href",
      "/services/register-employer/eligibility",
    );
  });

  it("does not offer to apply for an information-only service", async () => {
    renderAt("/services/info", [
      on("GET", "/experience/citizen/services/info", () =>
        json({
          ...serviceDetail,
          slug: "info",
          availabilityStatus: "INFORMATION_ONLY",
          isInformationOnly: true,
          applicationCapable: false,
        }),
      ),
    ]);
    expect(await screen.findByText("You cannot apply for this online")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Start application" })).not.toBeInTheDocument();
  });

  it("explains not found with a way back", async () => {
    renderAt("/services/missing", [
      on("GET", "/experience/citizen/services/missing", () =>
        json({ statusCode: 404, message: "Public service 'missing' was not found" }, 404),
      ),
    ]);
    const notice = (await screen.findByText("We could not find this")).closest(
      "[data-tone]",
    ) as HTMLElement;
    expect(within(notice).getByRole("link", { name: "Find a service" })).toHaveAttribute(
      "href",
      "/services",
    );
  });
});
