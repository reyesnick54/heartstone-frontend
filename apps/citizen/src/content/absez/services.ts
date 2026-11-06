// ABSEZ services, one per kind of application in Appendix D (with the departments of Articles
// 10–20 and Appendix B). Steps come from the standard workflows in Appendix C where one exists;
// other services show the general One-Stop process (decisions.generalSteps).
//
// Not stated anywhere here, because the documents do not set them: fees, processing times
// beyond the documented service standards, eligibility rules, or document lists outside the
// project evidence standards. Pages say "ABSEZ will confirm the requirements for your case".
import type { ServiceContent, Step } from "../schema";
import { appx, art } from "./sources";

/** The completeness-review note used where the documents do not list documents. */
const CONFIRMED =
  "ABSEZ will confirm exactly what is needed for your case during the completeness review. If anything is missing, you will get a deficiency notice saying what to provide.";

/** Appendix E, Parts IV–V: what a project evidence file may contain. */
const PROJECT_DOCUMENTS = [
  "Project details: name, sponsor, location, description and category",
  "Ownership documents: title documents, lease agreements, concession agreements, corporate ownership records and, where applicable, beneficial ownership information",
  "Any approvals, permits and licences the project already has",
  "Development records such as master plans, site plans, engineering reports, architectural drawings, construction schedules, infrastructure plans, environmental documents and utility information",
];

const PROJECT_DOCUMENTS_NOTE =
  "These are the kinds of documents a project file may hold, where they apply to your project. Larger projects may need more. ABSEZ will confirm what your project needs during the completeness review.";

/** Appendix C, Workflow 1. */
const INVESTOR_ONBOARDING: readonly Step[] = [
  { title: "Investor enquiry", detail: "You contact ABSEZ about your plans." },
  {
    title: "Intake by the Investor Relations Department",
    detail: "Your enquiry is recorded and an investor file is opened.",
  },
  { title: "Initial consultation", detail: "You discuss your plans with Investor Relations." },
  { title: "Application", detail: "You submit your application." },
  { title: "Completeness review", detail: "ABSEZ checks that everything needed is there." },
  {
    title: "Project classification",
    detail: "ABSEZ classifies the project, which decides how it is processed.",
  },
  {
    title: "Case manager assigned",
    detail: "Where appropriate, ABSEZ assigns a case manager to coordinate your project.",
  },
  {
    title: "Referral to the departments involved",
    detail: "Your application is circulated to the ABSEZ departments that need to review it.",
  },
  { title: "Progress tracking", detail: "ABSEZ tracks progress and keeps you informed." },
  {
    title: "Decision: approval, registration or licensing",
    detail: "Made by the ABSEZ Management Committee or the relevant department.",
  },
  {
    title: "Ongoing relationship",
    detail: "Investor Relations stays in touch as your project goes ahead.",
  },
];

/** Appendix C, Workflow 2. */
const DEVELOPMENT_APPROVAL: readonly Step[] = [
  { title: "Submit your project application" },
  { title: "Received by the Development and Infrastructure Department" },
  { title: "Completeness review", detail: "ABSEZ checks that everything needed is there." },
  { title: "Project file created" },
  {
    title: "Evidence governance review",
    detail: "The project's documents are organised into a standard evidence file.",
  },
  {
    title: "Technical review",
    detail: "For example engineering, environmental or construction review, where needed.",
  },
  { title: "Coordination between ABSEZ departments" },
  { title: "Inspections arranged by ABSEZ, where needed" },
  {
    title: "Decision",
    detail:
      "Made by the ABSEZ Management Committee or the Development and Infrastructure Department.",
  },
  {
    title: "Compliance monitoring",
    detail: "ABSEZ checks that approval conditions are followed as the project goes ahead.",
  },
];

/** Appendix C, Workflow 3. */
const IMMIGRATION: readonly Step[] = [
  { title: "Application received by ABSEZ" },
  { title: "Document review" },
  { title: "Case tracking", detail: "ABSEZ tracks your case and keeps you informed." },
  {
    title: "Immigration coordination",
    detail: "ABSEZ coordinates your application with the authorities involved.",
  },
  {
    title: "Decision",
    detail:
      "Within its delegated authority, ABSEZ approves. Matters beyond that authority are approved by the competent authority.",
  },
  { title: "You are told the result" },
  { title: "Your file is archived" },
];

/** Appendix C, Workflow 4. */
const WORK_PERMIT: readonly Step[] = [
  { title: "Work permit application received by ABSEZ" },
  { title: "Intake by the Labour Coordination Department" },
  { title: "Document review" },
  { title: "Employer eligibility check", detail: "ABSEZ checks the employer is eligible." },
  {
    title: "Coordination with the labour authorities",
    detail: "Coordinated through the Advisory Committee framework.",
  },
  { title: "Decision", detail: "Approved by ABSEZ within its delegated authority." },
  { title: "You are told the result" },
  { title: "Records kept by ABSEZ" },
];

/** Appendix C, Workflow 5. */
const LAND: readonly Step[] = [
  { title: "Application received by ABSEZ" },
  { title: "Document review" },
  { title: "Title verification", detail: "The title to the land is checked." },
  { title: "Land registry review", detail: "Reviewed by ABSEZ within its delegated authority." },
  { title: "Registration or issuance", detail: "Registered and issued by ABSEZ." },
  { title: "Entry in the records" },
  { title: "Records kept up to date" },
];

/** Appendix C, Workflow 6. */
const CITIZENSHIP_RESIDENCY: readonly Step[] = [
  { title: "Application received by ABSEZ" },
  { title: "Document review" },
  { title: "Eligibility check" },
  { title: "Processing by the Citizenship and Residency Services Department" },
  {
    title: "Referral or joint processing, where necessary",
    detail: "With oversight and guidance through the Advisory Committee framework.",
  },
  {
    title: "Decision and issuance",
    detail: "Approved and issued by ABSEZ within its delegated authority.",
  },
  { title: "Status monitoring" },
  { title: "Records kept up to date" },
];

const ABSEZ_DECIDES =
  "Decided by ABSEZ: the relevant department or the ABSEZ Management Committee, within the authority delegated to ABSEZ.";

export const SERVICES: readonly ServiceContent[] = [
  // ---------- A. Companies ----------
  {
    slug: "register-a-company",
    name: "Register a new company",
    categoryCode: "companies",
    departmentSlug: "corporate-registration",
    summary: "Register a new company in the Antigua and Barbuda Special Economic Zone.",
    audiences: ["business", "investors"],
    whoFor: ["Anyone setting up a new company to operate in the zone"],
    whatYouCanDo: [
      "Apply to register a new company",
      "Receive a registry certificate once registration is complete",
    ],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["investor-registration", "business-licence", "register-as-an-employer"],
    keywords: [
      "company",
      "incorporate",
      "incorporation",
      "start a business",
      "new business",
      "registration",
    ],
    sources: [appx("D", "Category A"), art(11), appx("A"), appx("M", "Section 3")],
  },
  {
    slug: "change-company-details",
    name: "Change a company's registered details",
    categoryCode: "companies",
    departmentSlug: "corporate-registration",
    summary: "Record changes (corporate amendments) to a company registered in the zone.",
    audiences: ["business"],
    whoFor: ["Companies registered in the zone, and people authorised to act for them"],
    whatYouCanDo: ["Submit a corporate amendment so the company's record is updated"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["corporate-filing", "registry-certificate"],
    keywords: ["amend", "amendment", "change", "update company", "directors"],
    sources: [appx("D", "Category A"), art(11), appx("M", "Section 3")],
  },
  {
    slug: "corporate-filing",
    name: "Submit a corporate filing",
    categoryCode: "companies",
    departmentSlug: "corporate-registration",
    summary: "Register corporate filings for a company in the zone.",
    audiences: ["business"],
    whoFor: ["Companies registered in the zone, and people authorised to act for them"],
    whatYouCanDo: ["Submit filings so they are reviewed and recorded on the company's file"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["change-company-details", "registry-certificate"],
    keywords: ["filing", "annual", "returns", "submit documents"],
    sources: [appx("D", "Category A"), art(11), appx("M", "Section 3")],
  },
  {
    slug: "registry-certificate",
    name: "Get a registry certificate or extract",
    categoryCode: "companies",
    departmentSlug: "corporate-registration",
    summary: "Ask for a certificate or an extract from the company registry.",
    audiences: ["business", "investors"],
    whoFor: ["Companies registered in the zone, and others with a lawful need for the record"],
    whatYouCanDo: ["Request a registry certificate", "Request an extract from the registry"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["register-a-company", "corporate-filing"],
    keywords: ["certificate", "extract", "proof of registration", "record"],
    sources: [art(11), appx("M", "Section 3")],
  },

  // ---------- B. Licences ----------
  {
    slug: "business-licence",
    name: "Apply for a licence to operate in the zone",
    categoryCode: "licences",
    departmentSlug: "business-licensing",
    summary: "Make an initial application for a Special Economic Zone licence.",
    audiences: ["business", "investors"],
    whoFor: ["Businesses that want to carry out a licensed activity in the zone"],
    whatYouCanDo: ["Apply for a new licence", "Find out about any conditions attached to it"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Licensing is limited to the functions allocated to the zone; where the law requires another competent authority to be involved, ABSEZ coordinates with it.`,
    relatedServices: ["renew-a-licence", "change-a-licence", "licence-conditions"],
    keywords: ["licence", "license", "trade licence", "business licence", "permit", "operate"],
    sources: [appx("D", "Category B"), art(12), appx("A"), appx("M", "Section 4")],
  },
  {
    slug: "renew-a-licence",
    name: "Renew a licence or permit",
    categoryCode: "licences",
    departmentSlug: "business-licensing",
    summary: "Renew a licence, permit, registration or approval before it expires.",
    audiences: ["business"],
    whoFor: ["Holders of a licence, permit, registration or approval issued in the zone"],
    whatYouCanDo: [
      "Renew before your licence or permit expires",
      "Update your documents as part of the renewal",
    ],
    documents: {
      note: "Renewal may include a compliance review, updated documents, fee verification and a status review. ABSEZ will confirm what your renewal needs.",
    },
    decision: ABSEZ_DECIDES,
    standardIds: ["status-updates"],
    relatedServices: ["business-licence", "licence-conditions"],
    keywords: ["renew", "renewal", "expire", "expiry", "reminder"],
    sources: [art(40), appx("D", "Category B"), appx("M", "Section 4")],
  },
  {
    slug: "change-a-licence",
    name: "Change a licence",
    categoryCode: "licences",
    departmentSlug: "business-licensing",
    summary: "Ask for an amendment to a licence you already hold.",
    audiences: ["business"],
    whoFor: ["Licence holders in the zone"],
    whatYouCanDo: ["Apply to amend your licence"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["business-licence", "renew-a-licence"],
    keywords: ["amend licence", "change licence", "update licence", "vary"],
    sources: [appx("D", "Category B"), art(12)],
  },

  // ---------- C. Investment ----------
  {
    slug: "investor-enquiry",
    name: "Make an investor enquiry",
    categoryCode: "investment",
    departmentSlug: "investor-relations",
    summary:
      "Start a conversation with ABSEZ about investing in the zone. This is the first step of investor onboarding.",
    audiences: ["investors", "business"],
    whoFor: ["Anyone considering an investment or project in the zone"],
    whatYouCanDo: [
      "Ask questions about investing in the zone",
      "Arrange an initial consultation with Investor Relations",
    ],
    documents: {
      note: "You do not need to prepare an application to make an enquiry. Investor Relations will explain what you need for the next steps.",
    },
    steps: { basedOn: "Investor onboarding (Appendix C, Workflow 1)", items: INVESTOR_ONBOARDING },
    decision:
      "An enquiry is not an application, so there is no decision. Decisions on later applications are made by the ABSEZ Management Committee or the relevant department.",
    standardIds: ["investor-inquiry", "project-meeting"],
    relatedServices: ["investor-registration", "investment-project", "strategic-project"],
    keywords: ["invest", "investor", "enquiry", "inquiry", "contact", "consultation", "fdi"],
    sources: [art(10), appx("C", "Workflow 1"), appx("F", "Part III"), appx("M", "Section 2")],
  },
  {
    slug: "investor-registration",
    name: "Register as an investor",
    categoryCode: "investment",
    departmentSlug: "investor-relations",
    summary: "Register with ABSEZ as an investor in the zone.",
    audiences: ["investors"],
    whoFor: ["Individuals and companies investing in the zone"],
    whatYouCanDo: [
      "Register as an investor",
      "Get an investor file and, where appropriate, a case manager",
    ],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Investor onboarding (Appendix C, Workflow 1)", items: INVESTOR_ONBOARDING },
    decision: ABSEZ_DECIDES,
    standardIds: ["investor-inquiry", "case-manager"],
    relatedServices: ["investor-enquiry", "register-a-company", "investment-project"],
    keywords: ["investor", "register", "onboarding", "investor registration"],
    sources: [appx("A"), art(10), appx("C", "Workflow 1")],
  },
  {
    slug: "investment-project",
    name: "Apply for an investment project",
    categoryCode: "investment",
    departmentSlug: "investor-relations",
    summary: "Apply for hotel, resort, marina, industrial or commercial investment projects.",
    audiences: ["investors", "business"],
    whoFor: [
      "Investors and developers with a hotel, resort, marina, industrial or commercial project",
    ],
    whatYouCanDo: [
      "Submit an investment project application",
      "Have the project coordinated across the departments involved",
      "Get a case manager for larger projects, where appropriate",
    ],
    documents: { items: PROJECT_DOCUMENTS, note: PROJECT_DOCUMENTS_NOTE },
    steps: { basedOn: "Investor onboarding (Appendix C, Workflow 1)", items: INVESTOR_ONBOARDING },
    decision:
      "Handled by the Investor Relations Department with the Development and Infrastructure Department. Decided by ABSEZ: the ABSEZ Management Committee or the relevant department.",
    standardIds: ["project-meeting", "case-manager", "project-file", "evidence-file"],
    relatedServices: ["development-approval", "project-evidence-file", "strategic-project"],
    keywords: [
      "hotel",
      "resort",
      "marina",
      "industrial",
      "commercial",
      "tourism",
      "project",
      "investment",
    ],
    sources: [appx("D", "Category C"), art(10), art(16), appx("C", "Workflow 1"), appx("E")],
  },

  // ---------- D. Development ----------
  {
    slug: "development-approval",
    name: "Apply for development approval",
    categoryCode: "development",
    departmentSlug: "development-infrastructure",
    summary:
      "Apply for approval of land development, construction, infrastructure and mixed-use projects, including planning and building permit applications.",
    audiences: ["business", "investors"],
    whoFor: ["Developers, builders and project owners planning work in the zone"],
    whatYouCanDo: [
      "Submit a development project application",
      "Have planning and building permit applications coordinated",
      "Have inspections arranged",
    ],
    documents: { items: PROJECT_DOCUMENTS, note: PROJECT_DOCUMENTS_NOTE },
    steps: {
      basedOn: "Development project approval (Appendix C, Workflow 2)",
      items: DEVELOPMENT_APPROVAL,
    },
    decision:
      "Made by the ABSEZ Management Committee or the Development and Infrastructure Department, under the planning and development functions delegated to ABSEZ.",
    standardIds: ["project-file", "evidence-file", "inspection-coordination"],
    relatedServices: ["project-evidence-file", "inspections", "land-registration"],
    keywords: [
      "build",
      "building",
      "construction",
      "planning",
      "planning permission",
      "building permit",
      "develop",
      "infrastructure",
      "mixed-use",
    ],
    sources: [
      appx("D", "Category D"),
      art(16),
      appx("A"),
      appx("C", "Workflow 2"),
      appx("F", "Part IV"),
    ],
  },

  // ---------- E. Work ----------
  {
    slug: "work-permit",
    name: "Apply for a work permit",
    categoryCode: "work",
    departmentSlug: "labour-coordination",
    summary: "Apply for a work permit for someone who will work in the zone.",
    audiences: ["business", "individuals"],
    whoFor: ["Employers in the zone hiring staff who need a work permit, and the people they hire"],
    whatYouCanDo: [
      "Apply for a work permit",
      "Track the application until you are told the result",
    ],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Work permit processing (Appendix C, Workflow 4)", items: WORK_PERMIT },
    decision:
      "Approved by ABSEZ within its delegated authority. Where a matter goes beyond that authority, it is handled by the competent authority.",
    relatedServices: ["register-as-an-employer", "immigration-application", "relocation-support"],
    keywords: [
      "work permit",
      "employment",
      "job",
      "hire",
      "foreign worker",
      "staff",
      "labour",
      "labor",
    ],
    sources: [appx("D", "Category E"), art(15), appx("A"), appx("C", "Workflow 4")],
  },
  {
    slug: "register-as-an-employer",
    name: "Register as an employer",
    categoryCode: "work",
    departmentSlug: "labour-coordination",
    summary: "Register your business as an employer in the zone.",
    audiences: ["business"],
    whoFor: ["Businesses in the zone that employ, or plan to employ, staff"],
    whatYouCanDo: ["Register as an employer", "Keep your employer records up to date"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["work-permit", "workforce-registration"],
    keywords: ["employer", "hire", "staff", "employees", "registration"],
    sources: [art(15), appx("M", "Section 6")],
  },
  {
    slug: "workforce-registration",
    name: "Workforce registration and labour support",
    categoryCode: "work",
    departmentSlug: "labour-coordination",
    summary: "Register your workforce and get help with employee onboarding and labour matters.",
    audiences: ["business", "individuals"],
    whoFor: ["Employers in the zone and their employees"],
    whatYouCanDo: [
      "Register workforce information",
      "Get support with onboarding employees",
      "Have labour-related applications referred to the right authority",
    ],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["register-as-an-employer", "work-permit"],
    keywords: ["workforce", "employees", "onboarding", "labour support", "labor"],
    sources: [appx("D", "Category E"), art(15)],
  },

  // ---------- F. Immigration ----------
  {
    slug: "immigration-application",
    name: "Make an immigration application",
    categoryCode: "immigration",
    departmentSlug: "immigration-coordination",
    summary:
      "Apply through the One-Stop Service for immigration matters, such as visas, connected with the zone.",
    audiences: ["individuals", "business", "investors"],
    whoFor: ["Investors, employees, consultants and senior executives coming to the zone"],
    whatYouCanDo: [
      "Submit an immigration application and documents in one place",
      "Have your application checked for completeness",
      "Track progress and be told the result",
    ],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Immigration matters (Appendix C, Workflow 3)", items: IMMIGRATION },
    decision:
      "Within the authority delegated to ABSEZ, ABSEZ decides. Immigration powers that have not been delegated stay with the competent immigration authority, and those matters are coordinated with and decided by that authority.",
    relatedServices: ["relocation-support", "family-member-applications", "residency-application"],
    keywords: ["immigration", "visa", "entry", "travel", "move", "arrive"],
    sources: [appx("D", "Category F"), art(13), appx("A"), appx("C", "Workflow 3")],
  },
  {
    slug: "relocation-support",
    name: "Relocation support for investors, executives and staff",
    categoryCode: "immigration",
    departmentSlug: "immigration-coordination",
    summary:
      "Help with relocating to the zone for investors, employees, consultants, senior executives and their families.",
    audiences: ["individuals", "investors", "business"],
    whoFor: [
      "Investors, employees, consultants and senior executives moving to the zone, and their families",
    ],
    whatYouCanDo: [
      "Get coordinated help with relocating and settling in the zone",
      "Have the related immigration applications coordinated",
    ],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Immigration matters (Appendix C, Workflow 3)", items: IMMIGRATION },
    decision:
      "Relocation support is coordination, not a decision. Any immigration application involved is decided as described for immigration applications.",
    relatedServices: ["immigration-application", "family-member-applications", "work-permit"],
    keywords: ["relocate", "relocation", "move", "settle", "executive", "expat"],
    sources: [appx("D", "Category F"), art(13)],
  },
  {
    slug: "family-member-applications",
    name: "Applications for family members",
    categoryCode: "immigration",
    departmentSlug: "immigration-coordination",
    summary: "Applications for dependants of people relocating to the zone.",
    audiences: ["individuals"],
    whoFor: [
      "Family members (dependants) of investors, employees and executives relocating to the zone",
    ],
    whatYouCanDo: ["Apply for your family members alongside your own move"],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Immigration matters (Appendix C, Workflow 3)", items: IMMIGRATION },
    decision:
      "Within the authority delegated to ABSEZ, ABSEZ decides. Matters beyond that authority are decided by the competent immigration authority.",
    relatedServices: ["relocation-support", "residency-application"],
    keywords: ["family", "dependant", "dependent", "spouse", "children", "partner"],
    sources: [appx("D", "Category F"), art(13)],
  },

  // ---------- G. Customs ----------
  {
    slug: "import-export",
    name: "Import and export coordination",
    categoryCode: "customs",
    departmentSlug: "customs-coordination",
    summary: "Get import and export documents coordinated for goods moving in and out of the zone.",
    audiences: ["business"],
    whoFor: ["Businesses in the zone that import or export goods"],
    whatYouCanDo: [
      "Submit import and export documents",
      "Have them checked and coordinated",
      "Get trade facilitation support",
    ],
    documents: { note: CONFIRMED },
    decision:
      "Handled by the Customs Coordination Department, which carries out the customs functions authorised for the zone.",
    relatedServices: ["customs-clearance", "duty-free-incentive-programmes"],
    keywords: ["import", "export", "shipping", "goods", "trade", "freight", "cargo"],
    sources: [appx("D", "Category G"), art(14), appx("M", "Section 7")],
  },
  {
    slug: "customs-clearance",
    name: "Customs declarations and clearance",
    categoryCode: "customs",
    departmentSlug: "customs-coordination",
    summary: "Customs declarations and clearance for participants in the zone.",
    audiences: ["business"],
    whoFor: ["Businesses in the zone with goods that need customs clearance"],
    whatYouCanDo: [
      "Submit customs documents and declarations",
      "Track customs applications and approvals",
    ],
    documents: { note: CONFIRMED },
    decision:
      "Customs clearance functions for the zone are carried out by the Customs Coordination Department, within the authority delegated to ABSEZ. The national customs authority has a supervisory and guidance role through the Advisory Committee.",
    relatedServices: ["import-export", "duty-free-incentive-programmes"],
    keywords: ["customs", "clearance", "declaration", "duty", "port"],
    sources: [art(14), appx("A"), appx("D", "Category G")],
  },
  {
    slug: "duty-free-incentive-programmes",
    name: "Duty-free and incentive programmes",
    categoryCode: "customs",
    departmentSlug: "customs-coordination",
    summary: "Help with approved duty-free and incentive programmes.",
    audiences: ["business", "investors"],
    whoFor: ["Businesses taking part in an approved duty-free or incentive programme"],
    whatYouCanDo: ["Get help with the customs side of an approved programme"],
    documents: {
      note: "Whether a programme applies to you, and what it needs, depends on the programme. ABSEZ will confirm this for your case.",
    },
    decision:
      "The Customs Coordination Department assists with approved programmes. This page does not say who qualifies: ABSEZ will confirm this for your case.",
    relatedServices: ["import-export", "customs-clearance"],
    keywords: ["duty free", "incentive", "concession", "tax", "exemption"],
    sources: [art(14)],
  },

  // ---------- H. Strategic ----------
  {
    slug: "strategic-project",
    name: "Strategic project applications",
    categoryCode: "strategic",
    departmentSlug: "investor-relations",
    summary:
      "Major development and large-scale infrastructure projects that may be designated as Strategic Projects.",
    audiences: ["investors"],
    whoFor: ["Sponsors of major development or large-scale infrastructure projects"],
    whatYouCanDo: [
      "Apply for a major project to be handled through the strategic project process",
      "If designated, get a dedicated case manager, enhanced coordination and priority scheduling",
    ],
    documents: { items: PROJECT_DOCUMENTS, note: PROJECT_DOCUMENTS_NOTE },
    steps: { basedOn: "Investor onboarding (Appendix C, Workflow 1)", items: INVESTOR_ONBOARDING },
    decision:
      "Only the ABSEZ Management Committee can designate a Strategic Project, and decides on such projects. Designation does not exempt a project from any legal requirement.",
    standardIds: ["strategic-assignment", "case-manager", "project-file", "evidence-file"],
    relatedServices: ["investment-project", "development-approval", "project-evidence-file"],
    keywords: [
      "strategic",
      "major project",
      "large project",
      "infrastructure",
      "priority",
      "national",
    ],
    sources: [appx("D", "Category H"), art(42), appx("K"), appx("H", "Part VII")],
  },

  // ---------- I. Land ----------
  {
    slug: "land-registration",
    name: "Register land",
    categoryCode: "land",
    departmentSlug: "land-registration",
    summary: "Register land in the zone, with title verification.",
    audiences: ["individuals", "business", "investors"],
    whoFor: ["Owners of land in the zone, and people acting for them"],
    whatYouCanDo: [
      "Apply to register land",
      "Have the title verified",
      "Get the registration recorded",
    ],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Land registration (Appendix C, Workflow 5)", items: LAND },
    decision: "Reviewed, registered and issued by ABSEZ within its delegated authority.",
    relatedServices: ["register-a-lease", "transfer-a-title"],
    keywords: ["land", "register land", "title", "parcel", "property", "deed", "cadastral"],
    sources: [appx("D", "Category I"), appx("B", "1"), appx("C", "Workflow 5")],
  },
  {
    slug: "register-a-lease",
    name: "Register a lease",
    categoryCode: "land",
    departmentSlug: "land-registration",
    summary: "Register a lease of land or property in the zone.",
    audiences: ["individuals", "business", "investors"],
    whoFor: ["Landlords and tenants of land or property in the zone"],
    whatYouCanDo: ["Apply to register a lease", "Have the lease recorded"],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Land registration (Appendix C, Workflow 5)", items: LAND },
    decision: "Reviewed, registered and issued by ABSEZ within its delegated authority.",
    relatedServices: ["land-registration", "transfer-a-title"],
    keywords: ["lease", "rent", "leasehold", "tenant", "landlord"],
    sources: [appx("D", "Category I"), appx("B", "1"), appx("C", "Workflow 5")],
  },
  {
    slug: "transfer-a-title",
    name: "Transfer a title",
    categoryCode: "land",
    departmentSlug: "land-registration",
    summary: "Record a transfer of title to land or property in the zone.",
    audiences: ["individuals", "business", "investors"],
    whoFor: ["Buyers and sellers of land or property in the zone"],
    whatYouCanDo: ["Apply to record a title transfer", "Get support with the property transaction"],
    documents: { note: CONFIRMED },
    steps: { basedOn: "Land registration (Appendix C, Workflow 5)", items: LAND },
    decision: "Reviewed, registered and issued by ABSEZ within its delegated authority.",
    relatedServices: ["land-registration", "register-a-lease"],
    keywords: ["buy", "sell", "purchase", "transfer", "title", "conveyancing", "property"],
    sources: [appx("D", "Category I"), appx("B", "1"), appx("C", "Workflow 5")],
  },

  // ---------- J. Citizenship and residency ----------
  {
    slug: "residency-application",
    name: "Apply for residency",
    categoryCode: "citizenship-residency",
    departmentSlug: "citizenship-residency",
    summary:
      "Residency applications, including permanent residency, economic residency and special residency programmes.",
    audiences: ["individuals", "investors"],
    whoFor: [
      "People who want to live in Antigua and Barbuda through a residency programme handled by ABSEZ",
    ],
    whatYouCanDo: ["Apply for residency", "Track your application"],
    documents: { note: CONFIRMED },
    steps: {
      basedOn: "Citizenship and residency (Appendix C, Workflow 6)",
      items: CITIZENSHIP_RESIDENCY,
    },
    decision:
      "Approved and issued by ABSEZ within its delegated authority. Where necessary, applications are referred to, or processed jointly with, the competent authority.",
    relatedServices: [
      "investor-residency",
      "family-member-applications",
      "immigration-application",
    ],
    keywords: [
      "residency",
      "residence",
      "permanent residency",
      "live",
      "resident",
      "economic residency",
    ],
    sources: [appx("D", "Category J"), appx("B", "12"), appx("A"), appx("C", "Workflow 6")],
  },
  {
    slug: "investor-residency",
    name: "Investor residency programmes",
    categoryCode: "citizenship-residency",
    departmentSlug: "citizenship-residency",
    summary: "Residency programmes for investors.",
    audiences: ["investors"],
    whoFor: ["Investors interested in an investor residency programme"],
    whatYouCanDo: ["Apply for investor residency", "Get support with your application"],
    documents: { note: CONFIRMED },
    steps: {
      basedOn: "Citizenship and residency (Appendix C, Workflow 6)",
      items: CITIZENSHIP_RESIDENCY,
    },
    decision:
      "Approved and issued by ABSEZ within its delegated authority. Where necessary, applications are referred to, or processed jointly with, the competent authority.",
    relatedServices: ["residency-application", "investor-enquiry"],
    keywords: ["investor residency", "residency", "residence by investment"],
    sources: [appx("D", "Category J"), appx("B", "12")],
  },
  {
    slug: "citizenship-application",
    name: "Citizenship applications",
    categoryCode: "citizenship-residency",
    departmentSlug: "citizenship-residency",
    summary: "Submit a citizenship application through the One-Stop Service.",
    audiences: ["individuals", "investors"],
    whoFor: [
      "People applying for citizenship whose application is handled through the One-Stop Service",
    ],
    whatYouCanDo: ["Submit your application and documents", "Track your application"],
    documents: { note: CONFIRMED },
    steps: {
      basedOn: "Citizenship and residency (Appendix C, Workflow 6)",
      items: CITIZENSHIP_RESIDENCY,
    },
    decision:
      "ABSEZ approves and issues only within the authority delegated to it. Where another authority must decide, or where joint processing is needed, the application is referred to it or processed jointly. The Citizenship by Investment Unit is a member of the Advisory Committee.",
    relatedServices: ["residency-application", "investor-residency"],
    keywords: ["citizenship", "citizen", "nationality", "cip", "citizenship by investment"],
    sources: [appx("D", "Category J"), appx("B", "12"), appx("C", "Workflow 6"), art(21)],
  },

  // ---------- K. Vehicles ----------
  {
    slug: "vehicle-registration",
    name: "Register a vehicle",
    categoryCode: "vehicles",
    departmentSlug: "vehicle-transport",
    summary: "Register a vehicle in the zone and get licence plates.",
    audiences: ["individuals", "business"],
    whoFor: ["Vehicle owners and fleet operators in the zone"],
    whatYouCanDo: ["Register a vehicle", "Get vehicle licence plates", "Register fleet vehicles"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["vehicle-inspection", "transport-permit"],
    keywords: ["car", "vehicle", "register vehicle", "licence plate", "number plate", "fleet"],
    sources: [appx("D", "Category K"), appx("B", "6"), appx("A")],
  },
  {
    slug: "transport-permit",
    name: "Transport permits",
    categoryCode: "vehicles",
    departmentSlug: "vehicle-transport",
    summary: "Permits and licensing support for transport and commercial transport in the zone.",
    audiences: ["business"],
    whoFor: ["Transport and commercial transport operators in the zone"],
    whatYouCanDo: ["Apply for a transportation permit", "Get transport licensing support"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Where necessary, ABSEZ coordinates with other competent authorities.`,
    relatedServices: ["vehicle-registration", "vehicle-inspection"],
    keywords: ["transport", "taxi", "bus", "commercial vehicle", "haulage", "permit"],
    sources: [appx("D", "Category K"), appx("B", "6")],
  },
  {
    slug: "vehicle-inspection",
    name: "Vehicle inspections",
    categoryCode: "vehicles",
    departmentSlug: "vehicle-transport",
    summary: "Vehicle inspections in the zone.",
    audiences: ["individuals", "business"],
    whoFor: ["Owners of vehicles in the zone that need an inspection"],
    whatYouCanDo: ["Arrange a vehicle inspection"],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["vehicle-registration", "transport-permit"],
    keywords: ["inspection", "roadworthy", "vehicle check", "test"],
    sources: [appx("D", "Category K"), appx("B", "6")],
  },

  // ---------- L. Public safety ----------
  {
    slug: "security-approval",
    name: "Security approvals",
    categoryCode: "public-safety",
    departmentSlug: "public-safety",
    summary: "Security approvals for activities and premises in the zone.",
    audiences: ["business"],
    whoFor: ["Businesses and projects in the zone that need a security approval"],
    whatYouCanDo: ["Apply for a security approval", "Get help with security planning"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Where necessary, ABSEZ coordinates with other competent authorities.`,
    relatedServices: ["safety-incident-report", "emergency-preparedness"],
    keywords: ["security", "approval", "security plan", "premises"],
    sources: [appx("D", "Category L"), appx("B", "7")],
  },
  {
    slug: "safety-incident-report",
    name: "Report a safety or security incident",
    categoryCode: "public-safety",
    departmentSlug: "public-safety",
    summary: "Report a safety or security incident in the zone that is not an emergency.",
    audiences: ["individuals", "business"],
    whoFor: ["Anyone who needs to report a safety or security incident in the zone"],
    whatYouCanDo: ["Report an incident so it is recorded and coordinated"],
    documents: {
      note: "Give as much detail as you can about what happened, where and when. ABSEZ will tell you if anything else is needed.",
    },
    decision:
      "Incident reports are recorded and coordinated by the Public Safety and Security Coordination Department, with other competent authorities where necessary. Criminal matters stay with the national authorities.",
    emergencyNotice: true,
    relatedServices: ["emergency-preparedness", "security-approval"],
    keywords: ["incident", "report", "accident", "safety", "security"],
    sources: [appx("D", "Category L"), appx("B", "7"), art(17)],
  },
  {
    slug: "emergency-preparedness",
    name: "Emergency management and public safety programmes",
    categoryCode: "public-safety",
    departmentSlug: "public-safety",
    summary: "Emergency planning, preparedness and public safety programmes in the zone.",
    audiences: ["individuals", "business"],
    whoFor: ["Businesses, projects and people in the zone"],
    whatYouCanDo: [
      "Get public safety information",
      "Work with ABSEZ on emergency response planning for your premises or project",
    ],
    documents: { note: CONFIRMED },
    decision: "This is a coordination service, not an application for a decision.",
    emergencyNotice: true,
    relatedServices: ["security-approval", "safety-incident-report"],
    keywords: ["emergency", "preparedness", "disaster", "planning", "safety"],
    sources: [appx("D", "Category L"), appx("B", "7")],
  },

  // ---------- M. Cannabis ----------
  {
    slug: "cannabis-licence",
    name: "Cannabis licences",
    categoryCode: "cannabis",
    departmentSlug: "cannabis-administration",
    summary: "Apply for a licence for a lawful cannabis activity in the zone.",
    audiences: ["business"],
    whoFor: ["Businesses planning a lawful cannabis activity in the zone"],
    whatYouCanDo: ["Apply for a cannabis licence", "Register as an industry participant"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Only lawful activities can be licensed.`,
    relatedServices: ["cannabis-cultivation", "cannabis-manufacturing", "cannabis-research"],
    keywords: ["cannabis", "marijuana", "licence", "license"],
    sources: [appx("D", "Category M"), appx("B", "8"), appx("A")],
  },
  {
    slug: "cannabis-cultivation",
    name: "Cannabis cultivation registration",
    categoryCode: "cannabis",
    departmentSlug: "cannabis-administration",
    summary: "Register lawful cannabis cultivation in the zone.",
    audiences: ["business"],
    whoFor: ["Licensed or applying cannabis businesses that will cultivate in the zone"],
    whatYouCanDo: ["Register cultivation"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Only lawful activities can be registered.`,
    relatedServices: ["cannabis-licence", "cannabis-manufacturing"],
    keywords: ["cultivation", "grow", "farm", "cannabis"],
    sources: [appx("D", "Category M"), appx("B", "8")],
  },
  {
    slug: "cannabis-manufacturing",
    name: "Cannabis manufacturing and extraction approvals",
    categoryCode: "cannabis",
    departmentSlug: "cannabis-administration",
    summary:
      "Approvals for lawful cannabis manufacturing, extraction and distribution in the zone.",
    audiences: ["business"],
    whoFor: ["Cannabis businesses that will manufacture, extract or distribute in the zone"],
    whatYouCanDo: [
      "Apply for a manufacturing approval",
      "Register extraction or distribution activities",
    ],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Only lawful activities can be approved.`,
    relatedServices: ["cannabis-licence", "cannabis-cultivation"],
    keywords: ["manufacturing", "extraction", "distribution", "processing", "cannabis"],
    sources: [appx("D", "Category M"), appx("B", "8")],
  },
  {
    slug: "cannabis-research",
    name: "Cannabis research registration",
    categoryCode: "cannabis",
    departmentSlug: "cannabis-administration",
    summary:
      "Register cannabis research, including work with the Cannabis Research Institute on seed research and product development.",
    audiences: ["business"],
    whoFor: ["Researchers and businesses carrying out lawful cannabis research in the zone"],
    whatYouCanDo: ["Register a research programme"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Only lawful activities can be registered.`,
    relatedServices: ["cannabis-licence"],
    keywords: ["research", "institute", "seed", "product development", "cannabis"],
    sources: [appx("D", "Category M"), appx("B", "8")],
  },

  // ---------- N. Blue economy ----------
  {
    slug: "blue-economy-project",
    name: "Blue economy and marine projects",
    categoryCode: "blue-economy",
    departmentSlug: "blue-economy",
    summary: "Marine industry, ocean economy and maritime development projects and programmes.",
    audiences: ["business", "investors"],
    whoFor: ["Businesses and investors with marine, ocean or maritime projects in the zone"],
    whatYouCanDo: [
      "Apply for a marine industry or ocean economy project",
      "Take part in blue economy and maritime development programmes",
    ],
    documents: { note: CONFIRMED },
    decision: ABSEZ_DECIDES,
    relatedServices: ["investment-project", "project-evidence-file"],
    keywords: ["blue economy", "marine", "ocean", "maritime", "sea", "marina"],
    sources: [appx("D", "Category N"), appx("B", "9"), appx("A")],
  },

  // ---------- O. Carbon ----------
  {
    slug: "carbon-credit-registration",
    name: "Carbon credit registration",
    categoryCode: "carbon",
    departmentSlug: "carbon-management",
    summary: "Register carbon credits in the zone.",
    audiences: ["business", "investors"],
    whoFor: ["Businesses and projects that generate or hold carbon credits"],
    whatYouCanDo: ["Register carbon credits"],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Where necessary, ABSEZ coordinates with other competent authorities.`,
    relatedServices: ["carbon-programmes"],
    keywords: ["carbon", "carbon credit", "offset", "emissions", "climate"],
    sources: [appx("D", "Category O"), appx("B", "10"), appx("A")],
  },
  {
    slug: "carbon-programmes",
    name: "Carbon banking, exchanges and sustainability programmes",
    categoryCode: "carbon",
    departmentSlug: "carbon-management",
    summary: "Carbon banking programmes, carbon exchanges and sustainable development initiatives.",
    audiences: ["business", "investors"],
    whoFor: [
      "Organisations taking part in carbon or sustainable development programmes in the zone",
    ],
    whatYouCanDo: [
      "Take part in a carbon banking or carbon trading programme",
      "Register a sustainable development initiative",
    ],
    documents: { note: CONFIRMED },
    decision: `${ABSEZ_DECIDES} Where necessary, ABSEZ coordinates with other competent authorities.`,
    relatedServices: ["carbon-credit-registration"],
    keywords: ["carbon bank", "carbon exchange", "trading", "sustainable development", "green"],
    sources: [appx("D", "Category O"), appx("B", "10")],
  },

  // ---------- P. Digital assets ----------
  {
    slug: "digital-asset-registration",
    name: "Digital asset registration",
    categoryCode: "digital-assets",
    departmentSlug: "digital-assets",
    summary:
      "Register digital assets and digital asset businesses, such as exchanges, in the zone.",
    audiences: ["business", "investors"],
    whoFor: ["Businesses dealing in digital assets in the zone"],
    whatYouCanDo: [
      "Apply for digital asset registration",
      "Apply in connection with a digital currency exchange",
    ],
    documents: { note: CONFIRMED },
    decision:
      "Decided by ABSEZ within its delegated authority. Other financial regulatory powers stay with the statutory financial regulators of Antigua and Barbuda.",
    relatedServices: ["blockchain-fintech-projects", "financial-services"],
    keywords: ["digital asset", "crypto", "cryptocurrency", "virtual asset", "exchange", "token"],
    sources: [appx("D", "Category P"), appx("B", "11"), appx("A")],
  },
  {
    slug: "blockchain-fintech-projects",
    name: "Blockchain, tokenisation and FinTech projects",
    categoryCode: "digital-assets",
    departmentSlug: "digital-assets",
    summary:
      "Blockchain projects, asset tokenisation programmes, digital infrastructure and FinTech projects.",
    audiences: ["business", "investors"],
    whoFor: [
      "Technology businesses and investors with blockchain, tokenisation or FinTech projects",
    ],
    whatYouCanDo: [
      "Apply for a blockchain or FinTech project",
      "Take part in an asset tokenisation programme",
      "Coordinate a digital infrastructure project",
    ],
    documents: { note: CONFIRMED },
    decision:
      "Decided by ABSEZ within its delegated authority. Other financial regulatory powers stay with the statutory financial regulators of Antigua and Barbuda.",
    relatedServices: ["digital-asset-registration", "financial-services"],
    keywords: ["blockchain", "fintech", "tokenisation", "tokenization", "web3", "technology"],
    sources: [appx("D", "Category P"), appx("B", "11")],
  },

  // ---------- Financial services ----------
  {
    slug: "financial-services",
    name: "Financial services applications and licences",
    categoryCode: "financial-services",
    departmentSlug: "financial-services",
    summary: "Applications connected with regulated financial services in the zone.",
    audiences: ["business", "investors"],
    whoFor: ["Businesses planning to provide regulated financial services in the zone"],
    whatYouCanDo: [
      "Submit a financial services application and documents",
      "Track your application",
      "Apply for a financial licence within the zone, where this falls within ABSEZ's delegated authority",
    ],
    documents: { note: CONFIRMED },
    decision:
      "Reviewed by ABSEZ within the zone, or referred to the competent authorities. Financial licences may be issued by ABSEZ within the zone and within its delegated authority; otherwise by the competent authority. All other financial regulatory powers stay with the statutory financial regulators of Antigua and Barbuda.",
    relatedServices: ["digital-asset-registration", "register-a-company"],
    keywords: ["financial services", "bank", "banking", "finance", "financial licence", "fund"],
    sources: [art(20), art(27), appx("A"), appx("B", "5"), appx("O")],
  },

  // ---------- Compliance ----------
  {
    slug: "inspections",
    name: "Inspections and joint inspections",
    categoryCode: "compliance",
    departmentSlug: "compliance-inspection",
    summary:
      "Site, building, compliance, operational, safety and environmental inspections, coordinated so you face fewer separate visits.",
    audiences: ["business", "investors"],
    whoFor: [
      "Businesses and projects in the zone whose licence, permit or project needs an inspection",
    ],
    whatYouCanDo: [
      "Have an inspection arranged",
      "Have inspections by several authorities coordinated into a joint inspection, where possible",
    ],
    documents: {
      note: "ABSEZ will tell you what to have ready for the inspection. Inspection results are recorded in your file.",
    },
    decision:
      "Inspection results are recorded and feed into decisions and compliance monitoring. Any competent authority keeps its lawful right to carry out its own inspections.",
    standardIds: ["inspection-coordination"],
    relatedServices: ["licence-conditions", "development-approval"],
    keywords: ["inspection", "site visit", "joint inspection", "building inspection", "check"],
    sources: [art(33), art(34), art(17), appx("F", "Part IV")],
  },
  {
    slug: "licence-conditions",
    name: "Licence conditions, compliance reports and corrective actions",
    categoryCode: "compliance",
    departmentSlug: "compliance-inspection",
    summary:
      "Keep to the conditions of your approval: send compliance reports and respond to corrective action notices.",
    audiences: ["business"],
    whoFor: ["Holders of an approval, licence or permit with conditions attached"],
    whatYouCanDo: [
      "Send periodic or compliance reports required by your conditions",
      "Respond to a corrective action notice by its deadline",
    ],
    documents: {
      note: "Your approval or corrective action notice says what you must provide and by when.",
    },
    decision:
      "The Compliance and Inspection Department monitors conditions and may take administrative enforcement action within its delegated authority. Criminal enforcement stays with the national authorities.",
    relatedServices: ["inspections", "renew-a-licence"],
    keywords: [
      "compliance",
      "conditions",
      "corrective action",
      "report",
      "reporting",
      "obligations",
    ],
    sources: [art(37), art(38), art(39), art(17), appx("B", "2")],
  },
  {
    slug: "project-evidence-file",
    name: "Project evidence file and readiness assessment",
    categoryCode: "compliance",
    departmentSlug: "project-readiness",
    summary:
      "A standard evidence file for your project, and a report on how complete its documents are.",
    audiences: ["investors", "business"],
    whoFor: [
      "Development, infrastructure, tourism, industrial, energy, carbon, digital asset, blue economy and strategic projects",
    ],
    whatYouCanDo: [
      "Have a standard evidence file set up for your project",
      "Receive a Project Readiness Assessment Report based on how complete the documents are",
    ],
    documents: { items: PROJECT_DOCUMENTS, note: PROJECT_DOCUMENTS_NOTE },
    decision:
      "A readiness assessment is administrative. It is not a regulatory approval, investment advice, a guarantee or a valuation, and it does not endorse any investment decision.",
    standardIds: ["evidence-file"],
    relatedServices: ["development-approval", "investment-project", "strategic-project"],
    keywords: ["evidence", "readiness", "due diligence", "project file", "documents"],
    sources: [art(18), art(55), art(56), appx("E")],
  },
];
