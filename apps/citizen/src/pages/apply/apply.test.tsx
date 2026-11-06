import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, on, renderAt, representingMe } from "../../test/harness";
import {
  applicationDetail,
  draftId,
  draftRecord,
  serviceDetail,
  startExperience,
} from "../../test/fixtures";

const base = [
  on("GET", "/experience/citizen/services/register-employer", () => json(serviceDetail)),
  on("GET", "/experience/citizen/services/register-employer/start", () => json(startExperience)),
];

function draftStore(initial: Record<string, unknown> = {}, record: Record<string, unknown> = {}) {
  let answers: Record<string, unknown> = initial;
  return [
    on("GET", `/applications/${draftId}`, () =>
      json(draftRecord({ ...record, draftAnswers: answers })),
    ),
    on("PATCH", `/applications/${draftId}/draft`, async (req) => {
      answers = ((await req.json()) as { draftAnswers: Record<string, unknown> }).draftAnswers;
      return json(draftRecord({ draftAnswers: answers, updatedAt: "2026-10-01T09:45:00.000Z" }));
    }),
  ];
}

const repDraft = {
  applicantCategory: "AUTHORIZED_REPRESENTATIVE",
  organizationId: "22222222-2222-4222-8222-222222222222",
  representativeAuthorityId: "11111111-1111-4111-8111-111111111111",
};

describe("Apply: start", () => {
  it("asks who is applying, then creates a draft for a represented business", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt(
      "/dashboard/services/register-employer/apply",
      [
        ...base,
        on("POST", "/experience/citizen/services/register-employer/applications", () =>
          json(draftRecord(repDraft), 201),
        ),
        ...draftStore({}, repDraft),
      ],
      { me: representingMe },
    );
    const group = await screen.findByRole("group", { name: "Who is applying?" });
    await user.click(
      within(group).getByRole("radio", {
        name: /Example Catering Ltd, as its authorised representative/,
      }),
    );
    await user.click(screen.getByRole("button", { name: "Start application" }));
    expect(
      await screen.findByRole("heading", { level: 2, name: "About the business" }),
    ).toBeInTheDocument();
    expect(
      mutations("POST", "/experience/citizen/services/register-employer/applications")[0]?.body,
    ).toEqual({
      configurationFingerprint: "fp-1",
      serviceVersionId: startExperience.serviceVersionId,
      applicantCategory: "AUTHORIZED_REPRESENTATIVE",
      organizationId: "22222222-2222-4222-8222-222222222222",
      representativeAuthorityId: "11111111-1111-4111-8111-111111111111",
    });
    // Acting-as is shown on the transactional page.
    const acting = screen
      .getByRole("heading", { level: 2, name: "Acting as" })
      .closest("[data-tone]") as HTMLElement;
    expect(acting).toHaveTextContent("You, Alex Example, are acting for Example Catering Ltd.");
    expect(acting).toHaveTextContent("licences and filings");
  });

  it("requires a choice before starting", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/dashboard/services/register-employer/apply", base, {
      me: representingMe,
    });
    await user.click(await screen.findByRole("button", { name: "Start application" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Select who is applying");
    expect(
      mutations("POST", "/experience/citizen/services/register-employer/applications"),
    ).toHaveLength(0);
  });

  it("explains an information-only service that cannot be started", async () => {
    renderAt("/dashboard/services/register-employer/apply", [
      on("GET", "/experience/citizen/services/register-employer", () => json(serviceDetail)),
      on("GET", "/experience/citizen/services/register-employer/start", () =>
        json({ statusCode: 404, message: "Public service 'x' is not available to start" }, 404),
      ),
    ]);
    expect(await screen.findByText("We could not find this")).toBeInTheDocument();
  });
});

describe("Apply: dynamic form", () => {
  const stepUrl = `/dashboard/services/register-employer/apply?application=${draftId}&step=1`;

  it("renders fields from the schema with labels, hints and optional markers", async () => {
    renderAt(stepUrl, [...base, ...draftStore()]);
    expect(await screen.findByLabelText(/Business name/)).toBeRequired();
    expect(screen.getByLabelText(/Business registration number/)).toHaveAccessibleDescription(
      /On your certificate of incorporation/,
    );
    expect(screen.getByLabelText(/Business email/)).not.toBeRequired();
    expect(screen.getByLabelText(/Business email/).closest("div")?.parentElement).toHaveTextContent(
      "(optional)",
    );
    expect(
      screen.getByRole("group", { name: "Does the business rent its premises?" }),
    ).toBeInTheDocument();
    // Conditionally shown field is hidden until its condition holds.
    expect(screen.queryByLabelText(/Landlord name/)).not.toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Application steps" })).toHaveTextContent(
      "Check and submit",
    );
  });

  it("shows an error summary bound to the fields and does not save invalid answers", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt(stepUrl, [...base, ...draftStore()]);
    await user.type(await screen.findByLabelText(/Business email/), "not-an-email");
    await user.click(screen.getByRole("button", { name: "Save and continue" }));
    const summary = screen.getByRole("alert");
    expect(summary).toHaveTextContent("There is a problem");
    expect(summary).toHaveFocus();
    expect(within(summary).getByRole("link", { name: "Enter business name" })).toHaveAttribute(
      "href",
      "#field-businessName",
    );
    expect(screen.getByLabelText(/Business name/)).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText(/Business email/)).toHaveAccessibleDescription(
      /email address in the correct format/,
    );
    await user.click(within(summary).getByRole("link", { name: "Enter business name" }));
    expect(screen.getByLabelText(/Business name/)).toHaveFocus();
    expect(mutations("PATCH", `/applications/${draftId}/draft`)).toHaveLength(0);
  });

  it("shows conditional fields, saves visible answers and moves to the next step", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt(stepUrl, [...base, ...draftStore()]);
    await user.type(await screen.findByLabelText(/Business name/), "Example Ltd");
    await user.type(screen.getByLabelText(/Business registration number/), "C-1");
    await user.click(screen.getByRole("radio", { name: "Yes" }));
    await user.type(await screen.findByLabelText(/Landlord name/), "Harbour Estates");
    await user.click(screen.getByRole("button", { name: "Save and continue" }));
    expect(await screen.findByRole("heading", { level: 2, name: "Employees" })).toBeInTheDocument();
    expect(mutations("PATCH", `/applications/${draftId}/draft`)[0]?.body).toEqual({
      draftAnswers: {
        businessName: "Example Ltd",
        registrationNumber: "C-1",
        rents: "yes",
        landlord: "Harbour Estates",
      },
    });
    expect(screen.getByRole("heading", { level: 2, name: "Employees" })).toBeInTheDocument();
  });

  it("validates numbers against the schema's limits", async () => {
    const user = userEvent.setup();
    renderAt(`/dashboard/services/register-employer/apply?application=${draftId}&step=2`, [
      ...base,
      ...draftStore(),
    ]);
    await user.type(await screen.findByLabelText(/People you plan to employ/), "0");
    await user.click(screen.getByRole("button", { name: "Save and continue" }));
    expect(screen.getByRole("alert")).toHaveTextContent(
      "People you plan to employ must be 1 or more",
    );
  });

  it("tells the person when a save may or may not have reached the office (network), without retrying", async () => {
    const user = userEvent.setup();
    let patches = 0;
    renderAt(stepUrl, [
      ...base,
      on("GET", `/applications/${draftId}`, () => json(draftRecord())),
      on("PATCH", `/applications/${draftId}/draft`, () => {
        patches++;
        throw new TypeError("Failed to fetch");
      }),
    ]);
    await user.click(await screen.findByRole("button", { name: "Save as draft" }));
    expect(await screen.findByText("We do not know whether this went through")).toBeInTheDocument();
    expect(patches).toBe(1);
  });

  it("refuses to continue a draft whose service rules changed", async () => {
    renderAt(stepUrl, [
      ...base,
      on("GET", `/applications/${draftId}`, () =>
        json(draftRecord({ configurationFingerprint: "old" })),
      ),
    ]);
    expect(await screen.findByText("The rules for this service have changed")).toBeInTheDocument();
  });
});

describe("Review and submit", () => {
  const reviewUrl = `/dashboard/services/register-employer/review?application=${draftId}`;
  const answered = {
    businessName: "Example Ltd",
    registrationNumber: "C-1",
    rents: "no",
    headcount: 3,
  };

  it("shows answers with change links, fees with payment-is-not-approval, and requires the declaration", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt(reviewUrl, [...base, ...draftStore(answered)]);
    expect(await screen.findByText("No, we own them")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Change business name" })).toHaveAttribute(
      "href",
      `/dashboard/services/register-employer/apply?application=${draftId}&step=1`,
    );
    expect(
      screen.getByText(/Paying the fee does not mean your application is approved/),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Submit application" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Confirm this declaration to continue");
    expect(mutations("POST", `/applications/${draftId}/submit`)).toHaveLength(0);
  });

  it("submits once with answers, fingerprint and an idempotency key, then shows the backend's reference", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt(reviewUrl, [
      ...base,
      ...draftStore(answered),
      on("POST", `/applications/${draftId}/submit`, () =>
        json({ applicationId: draftId, applicationNumber: "EMP-2026-000215" }, 201),
      ),
      on("GET", `/experience/citizen/applications/${draftId}`, () => json(applicationDetail())),
    ]);
    await user.click(
      await screen.findByRole("checkbox", {
        name: "The information I have given is true and complete.",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Submit application" }));
    expect(
      await screen.findByRole("heading", { level: 1, name: "Application submitted" }),
    ).toBeInTheDocument();
    expect(await screen.findByText("EMP-2026-000215")).toBeInTheDocument();
    expect(screen.getByText("Received")).toBeInTheDocument();
    const sent = mutations("POST", `/applications/${draftId}/submit`);
    expect(sent).toHaveLength(1);
    const body = sent[0]?.body as {
      answers: unknown;
      configurationFingerprint: string;
      idempotencyKey: string;
    };
    expect(body.answers).toEqual({ ...answered, truthful: true });
    expect(body.configurationFingerprint).toBe("fp-1");
    expect(body.idempotencyKey).toMatch(/^[0-9a-f-]{36}$/);
    expect(sent[0]?.headers.get("X-HeartStone-CSRF")).toBe("1");
    // The only mention of approval is the reminder that paying is not approval.
    expect(screen.getAllByText(/approved/i).map((e) => e.textContent)).toEqual([
      expect.stringContaining("Paying does not mean your application is approved"),
    ]);
  });

  it("binds the backend's field errors to the summary with links to the step", async () => {
    const user = userEvent.setup();
    renderAt(reviewUrl, [
      ...base,
      ...draftStore(answered),
      on("POST", `/applications/${draftId}/submit`, () =>
        json(
          {
            message: "Form response validation failed",
            errors: [
              {
                fieldKey: "registrationNumber",
                code: "MIN_LENGTH",
                message: "Value must be at least 5 characters",
              },
            ],
            missingRequiredFields: [],
          },
          409,
        ),
      ),
    ]);
    await user.click(
      await screen.findByRole("checkbox", {
        name: "The information I have given is true and complete.",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Submit application" }));
    const link = await screen.findByRole("link", {
      name: "Business registration number: Value must be at least 5 characters",
    });
    expect(link).toHaveAttribute(
      "href",
      `/dashboard/services/register-employer/apply?application=${draftId}&step=1`,
    );
  });

  it("explains a safe halt on submit", async () => {
    const user = userEvent.setup();
    renderAt(reviewUrl, [
      ...base,
      ...draftStore(answered),
      on("POST", `/applications/${draftId}/submit`, () =>
        json({ message: "Service paused", code: "SAFE_HALT_ACTIVE" }, 503),
      ),
    ]);
    await user.click(
      await screen.findByRole("checkbox", {
        name: "The information I have given is true and complete.",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Submit application" }));
    expect(await screen.findByText("This service is paused")).toBeInTheDocument();
  });

  it("asks for a fresh sign-in when submit needs step-up", async () => {
    const user = userEvent.setup();
    renderAt(reviewUrl, [
      ...base,
      ...draftStore(answered),
      on("POST", `/applications/${draftId}/submit`, () =>
        json({ statusCode: 401, message: "Multi-factor authentication is required" }, 401),
      ),
    ]);
    await user.click(
      await screen.findByRole("checkbox", {
        name: "The information I have given is true and complete.",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Submit application" }));
    const link = await screen.findByRole("link", { name: "Sign in again" });
    expect(link.getAttribute("href")).toContain("reauth=1");
    expect(link.getAttribute("href")).toContain(
      encodeURIComponent("/dashboard/services/register-employer/review"),
    );
  });

  it("explains a forbidden submit with the backend's reason", async () => {
    const user = userEvent.setup();
    renderAt(reviewUrl, [
      ...base,
      ...draftStore(answered),
      on("POST", `/applications/${draftId}/submit`, () =>
        json({ statusCode: 403, message: "Representative authority is not valid" }, 403),
      ),
    ]);
    await user.click(
      await screen.findByRole("checkbox", {
        name: "The information I have given is true and complete.",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Submit application" }));
    expect(await screen.findByText("Your application was not submitted")).toBeInTheDocument();
    expect(screen.getByText("Representative authority is not valid")).toBeInTheDocument();
  });
});

describe("Submitted", () => {
  it("does not claim a draft was submitted", async () => {
    renderAt(`/dashboard/applications/${draftId}/submitted`, [
      on("GET", `/experience/citizen/applications/${draftId}`, () =>
        json(applicationDetail({ status: "DRAFT", applicationNumber: undefined })),
      ),
    ]);
    expect(await screen.findByText("This application has not been submitted")).toBeInTheDocument();
  });
});
