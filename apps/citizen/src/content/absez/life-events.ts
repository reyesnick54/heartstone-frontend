// Life events: the services someone typically needs for a common situation, in a sensible order.
// Each event is built only from services and workflows in the ABSEZ documents. The order is
// guidance: ABSEZ confirms what each case needs.
import type { LifeEvent } from "../schema";
import { appx, art } from "./sources";

export const LIFE_EVENTS: readonly LifeEvent[] = [
  {
    slug: "starting-a-business",
    title: "Starting a business in the zone",
    summary: "Register a company, get the licences you need and take on staff.",
    intro:
      "If you are setting up a business in the zone, these are the services you are likely to need. You can apply for them through the One-Stop Service, and ABSEZ coordinates the departments involved.",
    steps: [
      {
        title: "Talk to Investor Relations",
        detail:
          "If you are investing, start with an enquiry. Investor Relations can explain the process and arrange an initial consultation.",
        serviceSlugs: ["investor-enquiry", "investor-registration"],
      },
      {
        title: "Register your company",
        detail: "Register the company that will operate in the zone.",
        serviceSlugs: ["register-a-company"],
      },
      {
        title: "Get a licence to operate",
        detail:
          "Apply for the licence your activity needs. Some sectors have their own licensing, such as financial services, cannabis or digital assets.",
        serviceSlugs: ["business-licence", "financial-services", "digital-asset-registration"],
      },
      {
        title: "Register as an employer and get work permits",
        detail: "If you will employ staff, register as an employer and apply for any work permits.",
        serviceSlugs: ["register-as-an-employer", "work-permit"],
      },
      {
        title: "Set up imports and exports",
        detail: "If you will move goods in or out of the zone, arrange customs coordination.",
        serviceSlugs: ["import-export"],
      },
    ],
    keywords: ["start a business", "new business", "set up", "open a business", "company", "trade"],
    sources: [appx("D", "Categories A, B, E, G"), appx("C", "Workflow 1"), art(10)],
  },
  {
    slug: "moving-to-work",
    title: "Moving to work in the zone",
    summary: "Work permits, immigration and relocation support for people coming to work.",
    intro:
      "If you are coming to work in the zone as an employee, consultant or senior executive, the One-Stop Service can coordinate your work permit, immigration application and relocation.",
    steps: [
      {
        title: "Get a work permit",
        detail:
          "Work permit applications go to the Labour Coordination Department, which also checks the employer's eligibility.",
        serviceSlugs: ["work-permit"],
      },
      {
        title: "Make your immigration application",
        detail:
          "The Immigration Coordination Department checks your application is complete and coordinates it through to a result.",
        serviceSlugs: ["immigration-application"],
      },
      {
        title: "Get help relocating",
        detail: "ABSEZ can coordinate your relocation and settlement in the zone.",
        serviceSlugs: ["relocation-support"],
      },
      {
        title: "If you will stay longer, look at residency",
        detail:
          "Residency programmes are handled by the Citizenship and Residency Services Department.",
        serviceSlugs: ["residency-application"],
      },
    ],
    keywords: ["move", "relocate", "work", "job", "visa", "work permit", "employment"],
    sources: [appx("C", "Workflows 3, 4"), art(13), art(15)],
  },
  {
    slug: "relocating-your-family",
    title: "Relocating your family",
    summary: "Applications and relocation support for family members of people moving to the zone.",
    intro:
      "Investors, employees, consultants and senior executives moving to the zone can bring their family members. The One-Stop Service coordinates applications for dependants alongside your own.",
    steps: [
      {
        title: "Plan your own move first",
        detail:
          "Your family's applications are usually connected to your own immigration application.",
        serviceSlugs: ["immigration-application"],
      },
      {
        title: "Apply for your family members",
        detail: "Make applications for your dependants.",
        serviceSlugs: ["family-member-applications"],
      },
      {
        title: "Get help settling in",
        detail: "ABSEZ can coordinate the relocation and settlement of family members too.",
        serviceSlugs: ["relocation-support"],
      },
      {
        title: "Residency for your family",
        detail:
          "If your family will live in Antigua and Barbuda, look at the residency programmes.",
        serviceSlugs: ["residency-application"],
      },
    ],
    keywords: ["family", "children", "spouse", "dependants", "relocate", "move"],
    sources: [art(13), appx("D", "Categories F, J")],
  },
  {
    slug: "building-or-developing",
    title: "Building or developing a project",
    summary: "Development approval, project evidence files, inspections and land.",
    intro:
      "If you plan land development, construction, infrastructure or a mixed-use project, the Development and Infrastructure Department coordinates the approvals, reviews and inspections.",
    steps: [
      {
        title: "Make sure your land rights are in order",
        detail: "Register the land, lease or title transfer the project depends on.",
        serviceSlugs: ["land-registration", "register-a-lease", "transfer-a-title"],
      },
      {
        title: "Prepare your project documents",
        detail:
          "Your project's documents are organised into a standard evidence file. A readiness assessment shows how complete they are.",
        serviceSlugs: ["project-evidence-file"],
      },
      {
        title: "Apply for development approval",
        detail:
          "Your application goes through completeness review, technical review and coordination between departments, then a decision.",
        serviceSlugs: ["development-approval"],
      },
      {
        title: "Inspections",
        detail:
          "ABSEZ arranges inspections, and joint inspections where several authorities are involved.",
        serviceSlugs: ["inspections"],
      },
      {
        title: "Keep to your approval conditions",
        detail:
          "ABSEZ monitors conditions such as development milestones and reporting as the project goes ahead.",
        serviceSlugs: ["licence-conditions"],
      },
    ],
    keywords: [
      "build",
      "construction",
      "develop",
      "development",
      "building permit",
      "planning",
      "project",
    ],
    sources: [appx("C", "Workflow 2"), art(16), art(33), art(37), appx("E")],
  },
  {
    slug: "importing-or-exporting",
    title: "Importing or exporting goods",
    summary: "Customs coordination, declarations, clearance and incentive programmes.",
    intro:
      "If your business moves goods in or out of the zone, the Customs Coordination Department coordinates the documents, declarations and clearance.",
    steps: [
      {
        title: "Have a registered, licensed business",
        detail: "Your company should be registered and licensed for its activity in the zone.",
        serviceSlugs: ["register-a-company", "business-licence"],
      },
      {
        title: "Arrange import and export coordination",
        detail: "Submit your import and export documents for checking and coordination.",
        serviceSlugs: ["import-export"],
      },
      {
        title: "Customs declarations and clearance",
        detail: "Your customs declarations are coordinated and your goods cleared.",
        serviceSlugs: ["customs-clearance"],
      },
      {
        title: "Duty-free and incentive programmes",
        detail: "If you take part in an approved programme, ABSEZ helps with the customs side.",
        serviceSlugs: ["duty-free-incentive-programmes"],
      },
    ],
    keywords: ["import", "export", "goods", "shipping", "customs", "trade"],
    sources: [art(14), appx("D", "Category G")],
  },
  {
    slug: "buying-or-leasing-property",
    title: "Buying or leasing property",
    summary: "Title transfers, lease registration and land registration.",
    intro:
      "If you are buying, selling or leasing land or property in the zone, the Land Registration and Real Property Administration Department records the transaction.",
    steps: [
      {
        title: "Transfer the title",
        detail: "When you buy or sell, the title transfer is reviewed and recorded.",
        serviceSlugs: ["transfer-a-title"],
      },
      {
        title: "Register a lease",
        detail: "If you are leasing, register the lease.",
        serviceSlugs: ["register-a-lease"],
      },
      {
        title: "Register land",
        detail: "Land that is not yet registered can be registered, with title verification.",
        serviceSlugs: ["land-registration"],
      },
    ],
    keywords: ["buy", "sell", "property", "house", "land", "lease", "rent", "real estate"],
    sources: [appx("C", "Workflow 5"), appx("B", "1"), appx("D", "Category I")],
  },
  {
    slug: "registering-a-vehicle",
    title: "Registering a vehicle",
    summary: "Vehicle registration, licence plates, inspections and transport permits.",
    intro:
      "Vehicles used in the zone are registered by the Vehicle Registration and Transport Administration Department.",
    steps: [
      {
        title: "Register the vehicle",
        detail: "Register the vehicle and get licence plates.",
        serviceSlugs: ["vehicle-registration"],
      },
      {
        title: "Inspection",
        detail: "Arrange a vehicle inspection if one is needed.",
        serviceSlugs: ["vehicle-inspection"],
      },
      {
        title: "Commercial transport",
        detail:
          "If the vehicle will be used for commercial transport, apply for a transport permit.",
        serviceSlugs: ["transport-permit"],
      },
    ],
    keywords: ["car", "vehicle", "register", "licence plate", "number plate", "transport"],
    sources: [appx("B", "6"), appx("D", "Category K")],
  },
  {
    slug: "investing-in-a-strategic-project",
    title: "Investing in a strategic project",
    summary: "From first enquiry to a designated Strategic Project with a dedicated case manager.",
    intro:
      "Major projects of significant economic, infrastructure, employment, tourism or national importance may be designated as Strategic Projects by the ABSEZ Management Committee, and receive enhanced coordination.",
    steps: [
      {
        title: "Make an investor enquiry",
        detail:
          "Investor Relations responds to investor enquiries and arranges a project engagement meeting.",
        serviceSlugs: ["investor-enquiry"],
      },
      {
        title: "Apply for your investment project",
        detail:
          "Submit your project application. It is classified and routed to the departments involved.",
        serviceSlugs: ["investment-project"],
      },
      {
        title: "Strategic project designation",
        detail:
          "The Management Committee may designate the project as a Strategic Project. Designation does not exempt a project from legal requirements.",
        serviceSlugs: ["strategic-project"],
      },
      {
        title: "Project evidence and readiness",
        detail:
          "Your project's documents are kept in a standard evidence file, with a readiness status.",
        serviceSlugs: ["project-evidence-file"],
      },
      {
        title: "Development approval and inspections",
        detail:
          "Development approvals, reviews and inspections are coordinated, with joint inspections where possible.",
        serviceSlugs: ["development-approval", "inspections"],
      },
    ],
    keywords: ["strategic", "major project", "invest", "investment", "case manager", "priority"],
    sources: [art(42), art(43), appx("K"), appx("L"), appx("C", "Workflow 1")],
  },
  {
    slug: "running-a-licensed-business",
    title: "Keeping your licence in good order",
    summary: "Conditions, compliance reports, inspections, corrective actions and renewals.",
    intro:
      "Once you are licensed or approved, you may have conditions to follow. ABSEZ monitors them and reminds you when renewals are due.",
    steps: [
      {
        title: "Follow your conditions",
        detail:
          "Conditions can include periodic reporting, compliance obligations, inspections, operating restrictions, development milestones and keeping records.",
        serviceSlugs: ["licence-conditions"],
      },
      {
        title: "Inspections",
        detail:
          "Inspections may be required by law, by your licence conditions or for operational reasons.",
        serviceSlugs: ["inspections"],
      },
      {
        title: "Put things right if asked",
        detail:
          "A corrective action notice sets out what is wrong, what you need to do and the deadline.",
        serviceSlugs: ["licence-conditions"],
      },
      {
        title: "Renew on time",
        detail: "ABSEZ keeps track of renewal and expiry dates and can send reminders.",
        serviceSlugs: ["renew-a-licence", "change-a-licence"],
      },
    ],
    keywords: ["renew", "renewal", "compliance", "conditions", "inspection", "corrective action"],
    sources: [art(37), art(38), art(39), art(40)],
  },
];
