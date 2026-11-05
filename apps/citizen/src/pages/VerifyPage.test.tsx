import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, on, renderAt } from "../test/harness";

const result = (overrides: Record<string, unknown> = {}) => ({
  verificationStatus: "CURRENT",
  verificationTimestamp: "2026-10-01T10:16:00.000Z",
  verificationUri: "https://example.invalid/verify/X",
  qrReferenceDisclaimer: "Verification reflects the registry at the time of the check.",
  instrumentType: "Vehicle registration certificate",
  instrumentNumber: "VRC-2026-004512",
  issuer: "Transport Board",
  expiryDate: "2027-09-21T00:00:00.000Z",
  ...overrides,
});

describe("Verify (public)", () => {
  it("works signed out, validates an empty code, and checks a code through the query string", async () => {
    const user = userEvent.setup();
    renderAt(
      "/verify",
      [
        on("GET", "/public/instruments/verify/VR4P-8NQ2", () =>
          json(result({ cryptographicVerificationPassed: true })),
        ),
      ],
      { signedIn: false },
    );
    await user.click(await screen.findByRole("button", { name: "Check" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Enter the verification code");
    await user.type(screen.getByLabelText(/Verification code/), "VR4P-8NQ2");
    await user.click(screen.getByRole("button", { name: "Check" }));
    expect(await screen.findByRole("heading", { name: "Genuine and current" })).toBeInTheDocument();
    expect(window.location.search).toBe("?code=VR4P-8NQ2");
    expect(screen.getByText("Government issued · verified")).toHaveAttribute(
      "data-tone",
      "official",
    );
    expect(screen.getByText("Digital signature checked and valid")).toBeInTheDocument();
  });

  it("does not say genuine, or show gold, when the signature was not checked", async () => {
    renderAt(
      "/verify?code=ABC",
      [on("GET", "/public/instruments/verify/ABC", () => json(result()))],
      { signedIn: false },
    );
    expect(
      await screen.findByRole("heading", { name: "Current record found" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Digital signature not checked")).toBeInTheDocument();
    expect(document.querySelector('[data-tone="official"]')).toBeNull();
    expect(screen.queryByRole("heading", { name: /genuine/i })).not.toBeInTheDocument();
  });

  it("shows revoked documents as not valid", async () => {
    renderAt(
      "/verify?code=REV",
      [
        on("GET", "/public/instruments/verify/REV", () =>
          json(result({ verificationStatus: "REVOKED" })),
        ),
      ],
      { signedIn: false },
    );
    expect(await screen.findByRole("heading", { name: "Not valid: revoked" })).toBeInTheDocument();
  });

  it("explains an unknown code", async () => {
    renderAt(
      "/verify?code=NOPE",
      [
        on("GET", "/public/instruments/verify/NOPE", () =>
          json({ statusCode: 404, message: "Not found" }, 404),
        ),
      ],
      { signedIn: false },
    );
    expect(await screen.findByText("No match")).toBeInTheDocument();
  });

  it("asks people to wait when rate limited", async () => {
    renderAt(
      "/verify?code=R",
      [
        on(
          "GET",
          "/public/instruments/verify/R",
          () =>
            new Response(JSON.stringify({ statusCode: 429, message: "Too many" }), {
              status: 429,
              headers: { "content-type": "application/json", "retry-after": "30" },
            }),
        ),
      ],
      {
        signedIn: false,
      },
    );
    expect(await screen.findByText("Please wait a moment")).toBeInTheDocument();
    expect(screen.getByText(/try again in 30 seconds/)).toBeInTheDocument();
  });
});
