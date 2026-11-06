import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, never, on, renderAt, representingMe, safeHaltBody } from "../test/harness";
import {
  applicationDetail,
  appointmentDetail,
  appointmentRecord,
  caseStatus,
  credential,
  documentSummary,
  draftId,
  invoice,
  message,
} from "../test/fixtures";

const page = (items: unknown[]) => ({
  items,
  pagination: {
    page: 1,
    pageSize: 20,
    totalItems: items.length,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  },
});

describe("Applications", () => {
  it("lists applications with the backend's public status, and links drafts back to the form", async () => {
    renderAt("/dashboard/applications", [
      on("GET", "/experience/citizen/applications", () =>
        json(
          page([
            applicationDetail(),
            applicationDetail({
              applicationId: "a2",
              applicationNumber: undefined,
              status: "DRAFT",
              publicStatusLabel: undefined,
            }),
          ]),
        ),
      ),
    ]);
    const list = await screen.findByRole("list", { name: "All applications" });
    const items = within(list).getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("Received");
    expect(within(items[0] as HTMLElement).getByRole("link")).toHaveAttribute(
      "href",
      `/dashboard/applications/${draftId}`,
    );
    expect(within(items[1] as HTMLElement).getByRole("link")).toHaveAttribute(
      "href",
      "/dashboard/services/register-employer/apply?application=a2",
    );
    expect(items[1]).toHaveTextContent("Draft");
  });

  it("shows an empty state", async () => {
    renderAt("/dashboard/applications", [
      on("GET", "/experience/citizen/applications", () => json(page([]))),
    ]);
    expect(
      await screen.findByRole("heading", { name: "You have no applications yet" }),
    ).toBeInTheDocument();
  });

  it("explains forbidden", async () => {
    renderAt("/dashboard/applications", [
      on("GET", "/experience/citizen/applications", () =>
        json({ statusCode: 403, message: "Forbidden" }, 403),
      ),
    ]);
    expect(await screen.findByText("You cannot see this")).toBeInTheDocument();
  });
});

describe("Application detail", () => {
  it("shows the case timeline from the backend's milestones, related invoices and acting-as", async () => {
    renderAt(
      `/dashboard/applications/${draftId}`,
      [
        on("GET", `/experience/citizen/applications/${draftId}`, () =>
          json(
            applicationDetail({
              organizationId: "22222222-2222-4222-8222-222222222222",
              organizationName: "Example Catering Ltd",
              representativeAuthorityId: "11111111-1111-4111-8111-111111111111",
            }),
          ),
        ),
        on("GET", "/experience/citizen/cases/case-1/status", () => json(caseStatus)),
        on("GET", "/experience/citizen/payments", () => json([invoice()])),
      ],
      { me: representingMe },
    );
    const timeline = await screen.findByRole("list", { name: "Case milestones" });
    const steps = within(timeline).getAllByRole("listitem");
    expect(steps[0]).toHaveTextContent("Completed step: Submitted Completed");
    expect(steps[1]).toHaveAttribute("aria-current", "step");
    expect(steps[1]).toHaveTextContent("In progress");
    expect(screen.getByText("An inspector needs to visit your premises.")).toBeInTheDocument();
    expect(screen.getByText("Inspection proposed")).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: "Invoice INV-2026-018204" })).toHaveAttribute(
      "href",
      "/dashboard/payments/88888888-8888-4888-8888-888888888888",
    );
    expect(screen.getByText("Paying a fee does not decide your application.")).toBeInTheDocument();
    expect(screen.getByText(/are acting for/)).toHaveTextContent("Example Catering Ltd");
    // No decision is invented.
    expect(screen.queryByText(/approved/i)).not.toBeInTheDocument();
  });

  it("shows not found with a way back", async () => {
    renderAt("/dashboard/applications/nope", [
      on("GET", "/experience/citizen/applications/nope", () =>
        json({ statusCode: 404, message: "Not found" }, 404),
      ),
    ]);
    expect(await screen.findByRole("link", { name: "Your applications" })).toHaveAttribute(
      "href",
      "/dashboard/applications",
    );
  });
});

describe("Appointments", () => {
  it("splits upcoming and past and states that booking is not approval", async () => {
    renderAt("/dashboard/appointments", [
      on("GET", "/experience/citizen/appointments", () =>
        json(
          page([
            appointmentDetail(),
            appointmentDetail({
              id: "old",
              status: "COMPLETED",
              reasonName: "Vehicle inspection",
              scheduledStartsAt: "2026-09-22T09:00:00.000Z",
              scheduledEndsAt: null,
            }),
          ]),
        ),
      ),
    ]);
    const tab = await screen.findByRole("tab", { name: /Upcoming/ });
    expect(tab).toHaveTextContent("1");
    expect(screen.getByRole("list", { name: "Upcoming appointments" })).toHaveTextContent(
      "Premises inspection",
    );
    expect(screen.getByText(/does not mean your application is approved/)).toBeInTheDocument();
  });

  it("confirms once and shows the backend's new status", async () => {
    const user = userEvent.setup();
    let confirmed = false;
    const { mutations } = renderAt("/dashboard/appointments/77777777-7777-4777-8777-777777777777", [
      on("GET", "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777", () =>
        json(
          appointmentDetail(confirmed ? { status: "CONFIRMED", availableActions: ["VIEW"] } : {}),
        ),
      ),
      on(
        "POST",
        "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/confirm",
        () => {
          confirmed = true;
          return json(appointmentRecord("CONFIRMED"), 201);
        },
      ),
    ]);
    await user.click(await screen.findByRole("button", { name: "Confirm this time" }));
    expect(await screen.findByText("Appointment confirmed")).toBeInTheDocument();
    expect(screen.getByText(/The office's record now shows: Confirmed/)).toBeInTheDocument();
    expect(
      mutations(
        "POST",
        "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/confirm",
      ),
    ).toHaveLength(1);
    expect(
      await screen.findByText("There is nothing to do for this appointment."),
    ).toBeInTheDocument();
  });

  it("validates and sends a reschedule request", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/dashboard/appointments/77777777-7777-4777-8777-777777777777", [
      on("GET", "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777", () =>
        json(appointmentDetail()),
      ),
      on(
        "POST",
        "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/reschedule-request",
        () => json(appointmentRecord("SCHEDULED"), 201),
      ),
    ]);
    await user.click(await screen.findByRole("button", { name: "Send request" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Enter the date and time that suits you");
    expect(screen.getByLabelText(/Preferred date and time/)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await user.type(screen.getByLabelText(/Preferred date and time/), "2099-10-20T09:00");
    await user.type(
      screen.getByLabelText(/Why do you need a different time/),
      "Kitchen is being painted",
    );
    await user.click(screen.getByRole("button", { name: "Send request" }));
    expect(await screen.findByText("Your request has been sent")).toBeInTheDocument();
    const body = mutations(
      "POST",
      "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/reschedule-request",
    )[0]?.body as Record<string, string>;
    expect(body.reason).toBe("Kitchen is being painted");
    expect(new Date(body.requestedStartsAt ?? "").getTime()).not.toBeNaN();
  });

  it("cancels after confirming in a dialog", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/dashboard/appointments/77777777-7777-4777-8777-777777777777", [
      on("GET", "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777", () =>
        json(appointmentDetail()),
      ),
      on(
        "POST",
        "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/cancel",
        () => json(appointmentRecord("CANCELLED"), 201),
      ),
    ]);
    await user.click(await screen.findByRole("button", { name: "Cancel appointment" }));
    const dialog = screen.getByRole("alertdialog", { name: "Cancel this appointment?" });
    await user.click(within(dialog).getByRole("button", { name: "Yes, cancel it" }));
    expect(await screen.findByText("Appointment cancelled")).toBeInTheDocument();
    expect(
      mutations(
        "POST",
        "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/cancel",
      )[0]?.body,
    ).toEqual({});
  });

  it("only offers the actions the backend allows", async () => {
    renderAt("/dashboard/appointments/x", [
      on("GET", "/experience/citizen/appointments/x", () =>
        json(appointmentDetail({ status: "REQUESTED", availableActions: ["VIEW", "CANCEL"] })),
      ),
    ]);
    expect(await screen.findByRole("button", { name: "Cancel appointment" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Confirm this time" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Send request" })).not.toBeInTheDocument();
  });

  it("explains a safe halt on confirm", async () => {
    const user = userEvent.setup();
    renderAt("/dashboard/appointments/77777777-7777-4777-8777-777777777777", [
      on("GET", "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777", () =>
        json(appointmentDetail()),
      ),
      on(
        "POST",
        "/experience/citizen/appointments/77777777-7777-4777-8777-777777777777/confirm",
        () => json(safeHaltBody, 403),
      ),
    ]);
    await user.click(await screen.findByRole("button", { name: "Confirm this time" }));
    expect(await screen.findByText("This service is paused")).toBeInTheDocument();
  });
});

describe("Documents", () => {
  it("says upload is not verification and shows the backend's check status", async () => {
    renderAt("/dashboard/documents", [
      on("GET", "/experience/citizen/documents", () => json([documentSummary()])),
    ]);
    expect(
      await screen.findByRole("heading", { name: "Upload is not verification" }),
    ).toBeInTheDocument();
    const row = (await screen.findByRole("link", { name: "Certificate of incorporation" })).closest(
      "tr",
    ) as HTMLElement;
    expect(row).toHaveTextContent("Not yet checked");
    expect(row).toHaveTextContent("Register as an employer");
    expect(screen.getByText(/cannot upload documents online yet/)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /upload/i })).not.toBeInTheDocument();
  });

  it("shows a document's recorded checks and a same-origin download", async () => {
    renderAt("/dashboard/documents/doc-1", [
      on("GET", "/experience/citizen/documents/doc-1", () =>
        json({
          ...documentSummary(),
          documentNumber: "DOC-1",
          sourceType: "APPLICANT_UPLOAD",
          currentVersionNumber: 1,
        }),
      ),
    ]);
    expect(await screen.findByRole("link", { name: "Download this document" })).toHaveAttribute(
      "href",
      "/api/v1/documents/versions/v1/download",
    );
    expect(screen.getByText("Unsigned")).toBeInTheDocument();
    expect(
      screen.getByText(/does not prove that what the document says is true/),
    ).toBeInTheDocument();
  });
});

describe("Credentials", () => {
  it("lists credentials without the gold official mark", async () => {
    renderAt("/dashboard/credentials", [
      on("GET", "/experience/citizen/credentials", () =>
        json([
          credential(),
          credential({ id: "c2", status: "EXPIRED", instrumentType: "Old permit" }),
        ]),
      ),
    ]);
    const list = await screen.findByRole("list", { name: "Current credentials" });
    expect(list).toHaveTextContent("Vehicle registration certificate");
    expect(list).not.toHaveTextContent("Old permit");
    expect(document.querySelector('[data-tone="official"]')).toBeNull();
  });

  it("shows gold only when the backend's verification is current and cryptographically passed", async () => {
    renderAt("/dashboard/credentials/99999999-9999-4999-8999-999999999999", [
      on("GET", "/experience/citizen/credentials/99999999-9999-4999-8999-999999999999", () =>
        json(credential()),
      ),
      on("GET", "/public/instruments/verify/VR4P-8NQ2-T7KX", () =>
        json({
          verificationStatus: "CURRENT",
          verificationTimestamp: "t",
          verificationUri: "u",
          qrReferenceDisclaimer: "q",
          cryptographicVerificationPassed: true,
        }),
      ),
    ]);
    expect(await screen.findByText("Government issued · verified")).toHaveAttribute(
      "data-tone",
      "official",
    );
    expect(screen.getByText("The vehicle must pass an inspection every year.")).toBeInTheDocument();
    expect(screen.getByText("VR4P-8NQ2-T7KX")).toBeInTheDocument();
  });

  it("does not show gold when cryptographic verification has not passed", async () => {
    renderAt("/dashboard/credentials/99999999-9999-4999-8999-999999999999", [
      on("GET", "/experience/citizen/credentials/99999999-9999-4999-8999-999999999999", () =>
        json(credential()),
      ),
      on("GET", "/public/instruments/verify/VR4P-8NQ2-T7KX", () =>
        json({
          verificationStatus: "CURRENT",
          verificationTimestamp: "t",
          verificationUri: "u",
          qrReferenceDisclaimer: "q",
          cryptographicVerificationPassed: false,
        }),
      ),
    ]);
    expect(await screen.findByText("VR4P-8NQ2-T7KX")).toBeInTheDocument();
    await new Promise((r) => setTimeout(r, 30));
    expect(document.querySelector('[data-tone="official"]')).toBeNull();
  });
});

describe("Payments", () => {
  it("lists invoices with pay and receipt links, stating payment is not approval", async () => {
    renderAt("/dashboard/payments", [
      on("GET", "/experience/citizen/payments", () =>
        json([
          invoice(),
          invoice({
            id: "paid-1",
            invoiceNumber: "INV-OLD",
            status: "PAID",
            balanceCents: 0,
            amountPaidCents: 15000,
            receipts: [{ id: "r1", receiptNumber: "RCT-1", issuedAt: "2026-09-18T00:00:00.000Z" }],
          }),
        ]),
      ),
    ]);
    expect(
      await screen.findByRole("link", { name: "Pay invoice INV-2026-018204" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Receipt RCT-1" })).toHaveAttribute(
      "href",
      "/dashboard/payments/paid-1/receipts/r1",
    );
    expect(screen.getByRole("heading", { name: "Payment is not approval" })).toBeInTheDocument();
  });

  it("creates one payment intent and never claims the payment or the application succeeded", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/dashboard/payments/88888888-8888-4888-8888-888888888888", [
      on("GET", "/experience/citizen/payments/88888888-8888-4888-8888-888888888888", () =>
        json(invoice()),
      ),
      on("POST", "/experience/citizen/payments/88888888-8888-4888-8888-888888888888/intents", () =>
        json(
          {
            id: "pi-1",
            intentReference: "PI-2026-1",
            status: "REQUIRES_PAYMENT",
            amountCents: 15000,
            currency: "XCD",
            invoiceId: "88888888-8888-4888-8888-888888888888",
            disclaimer: "Settlement does not alter decisions.",
          },
          201,
        ),
      ),
    ]);
    expect(await screen.findByText("Employer registration fee")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Continue to pay/ }));
    expect(await screen.findByText("Payment request created")).toBeInTheDocument();
    expect(screen.getByText(/nothing has been charged/)).toBeInTheDocument();
    expect(screen.getByText(/Requires payment/)).toBeInTheDocument();
    expect(
      mutations(
        "POST",
        "/experience/citizen/payments/88888888-8888-4888-8888-888888888888/intents",
      ),
    ).toHaveLength(1);
  });

  it("does not retry a payment intent after a network failure", async () => {
    const user = userEvent.setup();
    let posts = 0;
    renderAt("/dashboard/payments/88888888-8888-4888-8888-888888888888", [
      on("GET", "/experience/citizen/payments/88888888-8888-4888-8888-888888888888", () =>
        json(invoice()),
      ),
      on(
        "POST",
        "/experience/citizen/payments/88888888-8888-4888-8888-888888888888/intents",
        () => {
          posts++;
          throw new TypeError("Failed to fetch");
        },
      ),
    ]);
    await user.click(await screen.findByRole("button", { name: /Continue to pay/ }));
    expect(await screen.findByText("We do not know whether this went through")).toBeInTheDocument();
    expect(posts).toBe(1);
  });

  it("shows a receipt from the invoice's receipts", async () => {
    renderAt("/dashboard/payments/88888888-8888-4888-8888-888888888888/receipts/r1", [
      on("GET", "/experience/citizen/payments/88888888-8888-4888-8888-888888888888", () =>
        json(
          invoice({
            status: "PAID",
            balanceCents: 0,
            amountPaidCents: 15000,
            receipts: [
              { id: "r1", receiptNumber: "RCT-2026-022871", issuedAt: "2026-10-01T10:04:00.000Z" },
            ],
          }),
        ),
      ),
    ]);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Receipt RCT-2026-022871" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/this does not mean your application is approved/)).toBeInTheDocument();
  });
});

describe("Messages", () => {
  it("lists messages and filters those not yet acknowledged", async () => {
    renderAt("/dashboard/messages", [
      on("GET", "/experience/citizen/messages", () =>
        json([message(), message({ id: "m2", subject: "Decision", acknowledged: true })]),
      ),
    ]);
    expect(await screen.findByRole("list", { name: "All messages" })).toHaveTextContent(
      "Acknowledged",
    );
    expect(screen.getByRole("tab", { name: /Not yet acknowledged/ })).toHaveTextContent("1");
  });

  it("acknowledges once and shows the backend's receipt time", async () => {
    const user = userEvent.setup();
    const { mutations } = renderAt("/dashboard/messages/msg-1", [
      on("GET", "/experience/citizen/messages/msg-1", () => json(message())),
      on("POST", "/experience/citizen/messages/msg-1/acknowledge", () =>
        json(
          {
            receiptId: "rc1",
            messageId: "msg-1",
            receivedAt: "2026-10-01T10:00:00.000Z",
            disclaimer: "Acknowledgment confirms receipt only.",
          },
          201,
        ),
      ),
    ]);
    expect(await screen.findByText(/We have assessed your return/)).toBeInTheDocument();
    expect(screen.getByText(/It does not mean you agree with it/)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "I have received this message" }));
    expect(await screen.findByText("You have acknowledged this message")).toBeInTheDocument();
    expect(screen.getByText("Acknowledgment confirms receipt only.")).toBeInTheDocument();
    expect(mutations("POST", "/experience/citizen/messages/msg-1/acknowledge")).toHaveLength(1);
  });

  it("loading is announced", async () => {
    renderAt("/dashboard/messages", [on("GET", "/experience/citizen/messages", never)]);
    expect(await screen.findByText("Loading your messages")).toBeInTheDocument();
  });
});

describe("Renewals", () => {
  it("groups ready and coming-up renewals with the backend's next step", async () => {
    renderAt("/dashboard/renewals", [
      on("GET", "/experience/citizen/renewals", () =>
        json([
          {
            instrumentId: "i1",
            instrumentType: "Premises health certificate",
            issuer: { id: "x", name: "Environmental Health" },
            status: "EFFECTIVE",
            effectiveUntil: "2026-10-20T00:00:00.000Z",
            daysUntilExpiry: 19,
            renewalEligible: true,
            nextStep: "Start a renewal application",
            disclaimer: "Renewal is a new application.",
          },
          {
            instrumentId: "i2",
            instrumentType: "Driving licence",
            issuer: { id: "y", name: "Transport Board" },
            status: "EFFECTIVE",
            daysUntilExpiry: 62,
            renewalEligible: false,
            renewalReason: "Renewal opens 2 November",
            disclaimer: "Renewal is a new application.",
          },
        ]),
      ),
    ]);
    expect(await screen.findByRole("list", { name: "Ready to renew" })).toHaveTextContent(
      "19 days left",
    );
    expect(screen.getByRole("list", { name: "Coming up" })).toHaveTextContent(
      "Renewal opens 2 November",
    );
  });
});

describe("Appeals", () => {
  it("is an honest 'not available yet' page with no form", async () => {
    renderAt("/dashboard/appeals/request", []);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Request a review of a decision" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Requesting a review online is not available yet")).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /submit|send/i })).not.toBeInTheDocument();
  });
});
