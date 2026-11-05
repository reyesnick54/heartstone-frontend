import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { json, never, on, renderAt, representingMe } from "../test/harness";

const fail = (path: string) => on("GET", path, () => json({ statusCode: 500, message: "x" }, 500));

describe("Work & employment", () => {
  it("shows permits, employers, worker record and backend actions; one failing source does not hide the rest", async () => {
    renderAt("/work", [
      on("GET", "/experience/citizen/employment", () =>
        json({
          profileReferenceNumber: "WRK-1",
          ruleEnvironment: "NON_PRODUCTION",
          disclaimer: "Labour disclaimer",
          immigrationCoordinationDisclaimer: "Not residency",
          activeEmployers: 1,
          workPermit: null,
          pendingApplications: 0,
        }),
      ),
      fail("/experience/citizen/employment/relationships"),
      on("GET", "/experience/citizen/employment/work-permits", () =>
        json([
          {
            id: "wp1",
            permitNumber: "WP-2024-002931",
            workerProfileReferenceId: "w",
            employerRegistryRecordId: null,
            workPermitApplicationProfileId: null,
            immigrationProfileId: null,
            linkedResidencyPermitRecordId: null,
            governmentDecisionId: null,
            officialInstrumentId: null,
            lifecycleStatus: "EFFECTIVE",
            doesNotCreateResidency: true,
            validFrom: null,
            validUntil: "2027-01-31T00:00:00.000Z",
            renewalOfPermitId: null,
            dataClassification: "WORKER_SELF",
            createdAt: "x",
            updatedAt: "x",
          },
        ]),
      ),
      on("GET", "/experience/citizen/employment/actions", () =>
        json({
          disclaimer: "d",
          items: [
            {
              actionKey: "CHANGE_EMPLOYER",
              label: "Change your employer",
              available: false,
              configuredObligation: false,
            },
          ],
        }),
      ),
    ]);
    expect(await screen.findByRole("list", { name: "Work permits" })).toHaveTextContent(
      "WP-2024-002931",
    );
    expect(screen.getByText("A work permit is not residency")).toBeInTheDocument();
    expect(await screen.findByText("We could not load employers")).toBeInTheDocument();
    expect(screen.getByText("WRK-1")).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "What you can do" })).toHaveTextContent(
      "Not available",
    );
    expect(screen.getByText("Labour disclaimer")).toBeInTheDocument();
  });
});

describe("Immigration", () => {
  it("shows the backend's status label and empty sections", async () => {
    renderAt("/immigration", [
      on("GET", "/experience/citizen/immigration", () =>
        json({
          packId: "p",
          packLabel: "Immigration",
          disclaimer: "Immigration disclaimer",
          activeApplicationsCount: 0,
          credentialsCount: 0,
          pendingActionsCount: 0,
        }),
      ),
      on("GET", "/experience/citizen/immigration/status", () =>
        json({
          statuses: [
            { verifiedStatusLabel: "Permanent resident", disclaimer: "Status is informational." },
          ],
          requestedInformationCount: 1,
          upcomingInterviewsCount: 0,
          upcomingBiometricsCount: 0,
          outstandingFeesCount: 0,
          openAppealsCount: 0,
        }),
      ),
      on("GET", "/experience/citizen/immigration/applications", () => json({ items: [] })),
      on("GET", "/experience/citizen/immigration/credentials", () => json({ items: [] })),
    ]);
    expect(await screen.findByText("Permanent resident")).toBeInTheDocument();
    expect(await screen.findByText("You have no immigration applications.")).toBeInTheDocument();
    expect(screen.getByText("You have no immigration permits on record.")).toBeInTheDocument();
  });
});

describe("Health", () => {
  it("lists programmes and recruiting studies, says it is not the medical record, and has no consent form", async () => {
    renderAt("/health", [
      on("GET", "/experience/citizen/healthcare", () =>
        json({
          disclaimer: "Health disclaimer.",
          applications: [],
          referrals: [
            {
              referralNumber: "RF-1",
              status: "SENT",
              programCode: "P",
              notGuaranteedEnrollment: true,
              notEnrollment: true,
            },
          ],
          screenings: [],
          enrolledPrograms: [
            {
              enrollmentNumber: "HP-1",
              status: "ACTIVE",
              programCode: "VAX",
              programName: "Adult vaccination programme",
              trialOpportunitySeparate: true,
              notClinicalOutcome: true,
            },
          ],
          requiredActions: [],
          consentState: "NOT_CONFIGURED",
          trialOpportunities: [],
        }),
      ),
      on("GET", "/experience/citizen/healthcare/appointments", () =>
        json({ items: [], disclaimer: "d" }),
      ),
      on("GET", "/public/clinical-trials/discover", () =>
        json({
          disclaimer: "Discovery is not a recommendation.",
          discoveryIsNotRecommendation: true,
          participantDataIncluded: false,
          forbiddenParticipantFields: [],
          trials: [
            {
              trialNumber: "CT-1",
              recruitmentStatus: "RECRUITING",
              listingLifecycleStatus: "RECRUITING",
              minimumAgeYears: 18,
              maximumAgeYears: 60,
              locationSummary: "Main clinic",
              phase: null,
              condition: null,
              intervention: null,
              sponsor: { displayName: "Research registry", sponsorReference: "S" },
              title: "Sleep study",
              publicSummary: null,
              broadEligibilitySummary: "Adults 18–60",
              eligibilityCriteria: [],
              listingIsNotRegulatoryApproval: true,
              discoveryIsNotRecommendation: true,
            },
          ],
        }),
      ),
    ]);
    expect(await screen.findByText("Adult vaccination programme")).toBeInTheDocument();
    expect(screen.getByText(/does not guarantee a place/)).toBeInTheDocument();
    expect(await screen.findByText("Sleep study")).toBeInTheDocument();
    expect(screen.getByText(/does not hold your medical records/)).toBeInTheDocument();
    expect(screen.getByText(/not available online yet/)).toBeInTheDocument();
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });
});

describe("Civil records", () => {
  it("links registry actions to their services", async () => {
    renderAt("/civil-records", [
      on("GET", "/experience/citizen/civil-status", () =>
        json({
          identityId: "identity-1",
          entitledRecordCount: 1,
          officialRecordCount: 1,
          pendingSubmissionCount: 0,
          templateDisclaimer: "Template disclaimer",
        }),
      ),
      on("GET", "/experience/citizen/vital-records", () =>
        json([
          {
            id: "v1",
            recordNumber: "BR-1991-1",
            eventType: "BIRTH",
            status: "OFFICIAL",
            summaryLabel: "Birth record",
            isSealed: false,
            isRestricted: false,
            institutionName: "Civil Registry",
          },
        ]),
      ),
      on("GET", "/experience/citizen/certificates", () => json([])),
      on("GET", "/experience/citizen/civil-registry/actions", () =>
        json([
          {
            actionCode: "REQUEST_BIRTH_CERTIFICATE",
            label: "Request a birth certificate",
            serviceSlug: "birth-certificate",
            description: "A certified copy",
          },
        ]),
      ),
    ]);
    expect(await screen.findByText("Birth record")).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: "Request a birth certificate" }),
    ).toHaveAttribute("href", "/services/birth-certificate");
  });
});

describe("Public safety", () => {
  it("tells people to call in an emergency, using the tenant placeholder", async () => {
    renderAt("/public-safety", [
      on("GET", "/experience/citizen/public-safety", never),
      on("GET", "/experience/citizen/public-safety/emergency-events", () =>
        json({ disclaimer: "d", items: [] }),
      ),
      on("GET", "/experience/citizen/public-safety/reports", () => json({ items: [] })),
      on("GET", "/experience/citizen/public-safety/assistance", () => json({ items: [] })),
    ]);
    expect(
      await screen.findByText(/EMERGENCY NUMBER — set by tenant configuration/),
    ).toBeInTheDocument();
    expect(await screen.findByText("There are no emergency notices.")).toBeInTheDocument();
  });
});

describe("Account pages", () => {
  it("shows the profile from /me and that changes are not available yet", async () => {
    renderAt("/profile", []);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Profile and identity" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Changing your details online is not available yet"),
    ).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  it("shows contact preferences read-only, with no save button", async () => {
    renderAt("/settings", []);
    expect(
      await screen.findByText("Changing these settings online is not available yet"),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /save/i })).not.toBeInTheDocument();
  });

  it("lists representations with scope and expiry", async () => {
    renderAt("/representation", [], { me: representingMe });
    const list = await screen.findByRole("list", { name: "Organisations you can act for" });
    expect(list).toHaveTextContent("Example Catering Ltd");
    expect(list).toHaveTextContent("licences and filings");
    expect(list).toHaveTextContent("31 March 2027");
  });
});

describe("Menu (mobile More)", () => {
  it("lists every area, shows acting-as, and signs out", async () => {
    const user = userEvent.setup();
    renderAt("/menu", [], { me: representingMe });
    expect(await screen.findByRole("heading", { level: 1, name: "Menu" })).toBeInTheDocument();
    const main = screen.getByRole("main");
    expect(within(main).getByRole("list", { name: "My government" })).toHaveTextContent(
      "Public safety",
    );
    expect(within(main).getByRole("list", { name: "Account" })).toHaveTextContent(
      "Businesses you represent",
    );
    expect(within(main).getByText(/You can also act for Example Catering Ltd/)).toBeInTheDocument();
    const tabBar = screen.getAllByRole("navigation", { name: "Main" })[1] as HTMLElement;
    expect(
      within(tabBar)
        .getAllByRole("link")
        .map((l) => l.textContent?.trim()),
    ).toEqual(["Home", "Services", "Applications", "Messages", "More"]);
    expect(within(tabBar).getByRole("link", { name: "More" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    await user.click(within(screen.getByRole("main")).getByRole("button", { name: "Sign out" }));
    expect(await screen.findByRole("link", { name: "Sign in" })).toBeInTheDocument();
  });
});

describe("Help", () => {
  it("is public and uses tenant contact placeholders", async () => {
    renderAt("/help", [], { signedIn: false });
    expect(await screen.findByRole("heading", { level: 1, name: "Help" })).toBeInTheDocument();
    expect(screen.getByText(/SUPPORT PHONE — set by tenant configuration/)).toBeInTheDocument();
  });
});
