import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, on, renderAt } from "../test/harness";
import { serviceDetail, startExperience } from "../test/fixtures";

const base = [
  on("GET", "/experience/citizen/services/register-employer", () => json(serviceDetail)),
  on("GET", "/experience/citizen/services/register-employer/start", () => json(startExperience)),
];

describe("Eligibility", () => {
  it("asks the service's rules, sends the answers, and shows the non-binding result", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/services/register-employer/eligibility", [
      ...base,
      on("POST", "/experience/citizen/services/register-employer/eligibility", () =>
        json(
          {
            serviceId: "svc-1",
            serviceVersionId: "v",
            eligible: true,
            matchedRules: ["REGISTERED"],
            unmatchedRequiredRules: [],
            guidanceNotes: [],
            nonbindingDisclaimer: "This is guidance, not a decision.",
          },
          201,
        ),
      ),
    ]);
    const group = await screen.findByRole("group", { name: "Is the business registered?" });
    await user.click(screen.getByRole("radio", { name: "Individual" }));
    await user.click(group.querySelector('input[value="true"]') as HTMLElement);
    await user.click(screen.getByRole("button", { name: "Check my answers" }));
    expect(
      await screen.findByRole("heading", { name: "You appear to meet the requirements" }),
    ).toBeInTheDocument();
    expect(screen.getByText("This is guidance, not a decision.")).toBeInTheDocument();
    const body = mutations("POST", "/experience/citizen/services/register-employer/eligibility")[0]
      ?.body;
    expect(body).toEqual({
      applicantCategory: "INDIVIDUAL",
      attributes: { REGISTERED: true },
      serviceVersionId: startExperience.serviceVersionId,
    });
  });

  it("explains a failed check without retrying it", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/services/register-employer/eligibility", [
      ...base,
      on("POST", "/experience/citizen/services/register-employer/eligibility", () =>
        json({ statusCode: 500, message: "x" }, 500),
      ),
    ]);
    await user.click(await screen.findByRole("button", { name: "Check my answers" }));
    expect(await screen.findByText("We could not check your answers")).toBeInTheDocument();
    expect(
      mutations("POST", "/experience/citizen/services/register-employer/eligibility"),
    ).toHaveLength(1);
  });
});
