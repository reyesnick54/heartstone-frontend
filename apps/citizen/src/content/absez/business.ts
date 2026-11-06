// Business and investor pages: investor onboarding (Appendix C Workflow 1, Appendix F Part III),
// strategic projects (Article 42, Appendix K, Appendix H Part VII), case managers (Article 43,
// Appendix L), project readiness (Article 18, Appendix E) and sectors (Appendix D, Article 55).
import type { Article, Sector, WebsiteContent } from "../schema";
import { appx, art } from "./sources";

const SECTORS: readonly Sector[] = [
  {
    id: "tourism",
    name: "Tourism, hotels, resorts and marinas",
    summary: "Hotel, resort and marina projects are handled as investment projects.",
    categoryCode: "investment",
    sources: [appx("D", "Category C"), appx("E", "Part II")],
  },
  {
    id: "development",
    name: "Development, construction and infrastructure",
    summary: "Land development, construction, infrastructure and mixed-use developments.",
    categoryCode: "development",
    sources: [appx("D", "Category D")],
  },
  {
    id: "blue-economy",
    name: "Blue economy",
    summary: "Marine industry, ocean economy and maritime development projects.",
    categoryCode: "blue-economy",
    sources: [appx("D", "Category N")],
  },
  {
    id: "carbon",
    name: "Carbon management and trading",
    summary:
      "Carbon credit registration, carbon banking, carbon exchanges and sustainable development.",
    categoryCode: "carbon",
    sources: [appx("D", "Category O")],
  },
  {
    id: "digital-assets",
    name: "Digital assets and blockchain",
    summary: "Digital asset registration, blockchain, tokenisation and FinTech projects.",
    categoryCode: "digital-assets",
    caveat:
      "Regulatory powers not delegated to ABSEZ stay with the statutory financial regulators of Antigua and Barbuda.",
    sources: [appx("D", "Category P"), appx("B", "11")],
  },
  {
    id: "financial-services",
    name: "Financial services",
    summary: "Regulated financial services in the zone, coordinated by ABSEZ.",
    categoryCode: "financial-services",
    caveat:
      "ABSEZ acts within its delegated authority in the zone. All other financial regulatory powers stay with the statutory financial regulators.",
    sources: [art(20), appx("B", "5")],
  },
  {
    id: "cannabis",
    name: "Cannabis",
    summary: "Licensing and registration for cannabis cultivation, manufacturing and research.",
    categoryCode: "cannabis",
    caveat: "Only activities that are lawful can be licensed.",
    sources: [appx("D", "Category M"), appx("B", "8")],
  },
];

const INVESTOR_ONBOARDING: Article = {
  slug: "investor-onboarding",
  title: "Investor onboarding",
  summary:
    "How ABSEZ takes an investor from first enquiry to a decision, and stays in touch after.",
  keywords: ["investor", "onboarding", "invest", "enquiry", "consultation", "investor services"],
  sources: [appx("C", "Workflow 1"), art(10), appx("F", "Part III"), appx("M", "Section 2")],
  sections: [
    {
      id: "steps",
      heading: "The steps",
      blocks: [
        {
          kind: "steps",
          label: "Investor onboarding",
          items: [
            { title: "Investor enquiry" },
            { title: "Intake by the Investor Relations Department" },
            { title: "Initial consultation" },
            { title: "Application" },
            { title: "Completeness review by ABSEZ" },
            { title: "Project classification by ABSEZ" },
            { title: "A case manager is assigned, where appropriate" },
            { title: "Referral to the ABSEZ departments involved" },
            { title: "Progress tracking by ABSEZ" },
            {
              title: "Approval, registration or licensing",
              detail:
                "The decision is made by the ABSEZ Management Committee or the relevant department.",
            },
            { title: "Ongoing investor relationship management" },
          ],
        },
      ],
    },
    {
      id: "standards",
      heading: "What you can expect",
      blocks: [
        {
          kind: "table",
          caption: "Investor service standards",
          columns: ["Service", "Target"],
          rows: [
            ["Response to investor enquiries", "Within 24 hours"],
            ["Project engagement meeting", "Within 5 business days"],
            ["Assignment of a case manager, where one is assigned", "Within 5 business days"],
            ["Strategic project assignment, where designated", "Within 5 business days"],
          ],
        },
        {
          kind: "note",
          text: "These are target times set by the Management Committee. They may be reviewed and changed.",
        },
      ],
    },
  ],
  related: [
    { label: "Make an investor enquiry", href: "/services/investor-enquiry" },
    { label: "Register as an investor", href: "/services/investor-registration" },
  ],
};

const STRATEGIC_PROJECTS: Article = {
  slug: "strategic-projects",
  title: "Strategic projects",
  summary:
    "Projects of significant economic, development, infrastructure, employment, tourism or national importance can be designated as Strategic Projects.",
  keywords: [
    "strategic project",
    "major project",
    "priority",
    "designation",
    "national importance",
  ],
  sources: [art(42), appx("K"), appx("H", "Part VII"), appx("F", "Part III")],
  sections: [
    {
      id: "designation",
      heading: "How a project is designated",
      blocks: [
        {
          kind: "p",
          text: "Only the ABSEZ Management Committee can designate a Strategic Project. It may consider:",
        },
        {
          kind: "list",
          items: [
            "The size of the investment",
            "Jobs created",
            "Contribution to infrastructure",
            "Impact on tourism",
            "Innovation and technology transfer",
            "Export potential",
            "Economic and national development objectives",
          ],
        },
      ],
    },
    {
      id: "benefits",
      heading: "What designation can bring",
      blocks: [
        {
          kind: "list",
          items: [
            "A dedicated case manager assigned by ABSEZ",
            "Enhanced coordination within ABSEZ and with the Advisory Committee",
            "A consolidated review led by ABSEZ",
            "Priority scheduling and accelerated processing",
            "Coordinated, joint inspections",
            "Direct oversight and priority issue resolution by the Management Committee",
          ],
        },
        {
          kind: "note",
          title: "Designation is not an exemption",
          text: "Being designated as a Strategic Project does not exempt a project from any legal requirement. Strategic Projects may also have more frequent reporting requirements.",
        },
      ],
    },
    {
      id: "files",
      heading: "Project files",
      blocks: [
        {
          kind: "p",
          text: "Each Strategic Project keeps a main project file, an evidence file, and registers of approvals, compliance and milestones. The Management Committee may review Strategic Projects from time to time and make recommendations to help them go ahead.",
        },
      ],
    },
  ],
  related: [
    { label: "Strategic project applications", href: "/services/strategic-project" },
    { label: "Case managers", href: "/business/case-managers" },
  ],
};

const CASE_MANAGERS: Article = {
  slug: "case-managers",
  title: "Case managers",
  summary:
    "For important projects, ABSEZ can appoint a case manager to coordinate everything for you.",
  keywords: ["case manager", "project manager", "point of contact", "coordination"],
  sources: [art(43), appx("L"), appx("F", "Part III")],
  sections: [
    {
      id: "who",
      heading: "Who gets a case manager",
      blocks: [
        {
          kind: "p",
          text: "Case managers are appointed by the ABSEZ Management Committee. They may be assigned to:",
        },
        {
          kind: "list",
          items: [
            "Strategic Projects",
            "Large development projects",
            "Important investors",
            "Matters involving several agencies",
            "Complex applications",
          ],
        },
      ],
    },
    {
      id: "what",
      heading: "What a case manager does",
      blocks: [
        {
          kind: "list",
          items: [
            "Is your point of contact and keeps you informed",
            "Tracks progress and milestones",
            "Spots issues and escalates them for resolution",
            "Coordinates the departments and authorities involved, and their timelines",
          ],
        },
        {
          kind: "p",
          text: "Case managers regularly review their cases for outstanding requirements, delays, unresolved issues and matters that need escalating. The target is to give you a status update within 5 business days of a significant event.",
        },
      ],
    },
  ],
  related: [{ label: "Investor onboarding", href: "/business/investor-onboarding" }],
};

const PROJECT_READINESS: Article = {
  slug: "project-readiness",
  title: "Project readiness and evidence files",
  summary:
    "How ABSEZ organises a project's documents into a standard evidence file and records its readiness. Readiness is not approval.",
  keywords: [
    "project readiness",
    "readiness level",
    "evidence file",
    "due diligence",
    "classification",
  ],
  sources: [art(18), art(55), art(56), appx("E")],
  sections: [
    {
      id: "what",
      heading: "What an evidence file is",
      blocks: [
        {
          kind: "p",
          text: "The Project Readiness and Evidence Governance Department keeps a standard evidence file for each project, such as development, infrastructure, tourism, industrial, energy, maritime, carbon, digital asset and strategic projects. It can issue a Project Readiness Assessment Report based on how complete the documents are.",
        },
        {
          kind: "note",
          title: "Readiness is not approval or a guarantee",
          text: "An evidence file is an administrative record. It is not investment advice, a guarantee, a valuation or an assurance that a project will succeed. ABSEZ does not guarantee investment performance or returns, and does not endorse any investment decision. Unless specifically directed, it does not independently verify financial projections.",
        },
      ],
    },
    {
      id: "levels",
      heading: "Project classification levels",
      blocks: [
        {
          kind: "table",
          caption: "Project classification levels",
          columns: ["Level", "Name", "Description"],
          rows: [
            ["Level 1", "Small projects", "Lower investment value and limited impact"],
            [
              "Level 2",
              "Medium commercial projects",
              "Moderate investment value, needing coordination between several departments",
            ],
            [
              "Level 3",
              "Major development projects",
              "Large investment value with significant economic impact",
            ],
            [
              "Level 4",
              "Strategic projects",
              "Of international or national significance, with enhanced coordination and priority processing",
            ],
          ],
        },
        { kind: "p", text: "Higher levels may need more supporting documents." },
      ],
    },
    {
      id: "statuses",
      heading: "Readiness statuses",
      blocks: [
        {
          kind: "table",
          caption: "Project readiness statuses",
          columns: ["Category", "Status", "What it means"],
          rows: [
            ["1", "Concept stage", "The project is at its early concept stage"],
            ["2", "Documentation in preparation", "Documents are being collected and prepared"],
            [
              "3",
              "Documentation substantially complete",
              "Most of the required documents are complete",
            ],
            [
              "4",
              "Ready for approval submission",
              "The project is ready to be submitted for approval",
            ],
            [
              "5",
              "Ready for implementation",
              "All necessary approvals have been obtained and work may begin",
            ],
            ["6", "Operational", "The project is operating"],
          ],
        },
        {
          kind: "note",
          text: "A readiness status is administrative. It does not count as any regulatory approval.",
        },
      ],
    },
    {
      id: "contents",
      heading: "What a file may contain",
      blocks: [
        {
          kind: "list",
          items: [
            "Project details: name, sponsor, location, description, category and level",
            "Ownership documents: titles, leases, concessions, corporate ownership and beneficial ownership information",
            "Authorisations: approvals, permits and licences",
            "Development records: master plans, site plans, engineering reports, drawings, schedules, infrastructure, environmental and utility information",
            "Commercial documents such as feasibility studies and financial models, kept for reference and due diligence only",
            "Financial documents where available, such as appraisals, valuations, insurance and financing commitments",
            "Compliance documents: inspection records, compliance and environmental reports, corrective action notices",
          ],
        },
      ],
    },
  ],
  related: [
    {
      label: "Project evidence file and readiness assessment",
      href: "/services/project-evidence-file",
    },
  ],
};

const SERVICE_STANDARDS: Article = {
  slug: "investor-service-standards",
  title: "Service standards for investors and projects",
  summary: "The target times ABSEZ has set for responding to investors and handling projects.",
  keywords: ["service standards", "how long", "response time", "targets", "timeline"],
  sources: [appx("F"), art(46)],
  sections: [
    {
      id: "investor",
      heading: "Investor relations",
      blocks: [
        {
          kind: "table",
          caption: "Investor relations standards",
          columns: ["Service", "Target", "Responsible"],
          rows: [
            ["Response to investor enquiries", "Within 24 hours", "Investor Relations Department"],
            [
              "Project engagement meeting",
              "Within 5 business days",
              "Investor Relations Department",
            ],
            ["Strategic project assignment", "Within 5 business days", "Management Committee"],
            ["Assignment of a case manager", "Within 5 business days", "Management Committee"],
          ],
        },
      ],
    },
    {
      id: "development",
      heading: "Development projects",
      blocks: [
        {
          kind: "table",
          caption: "Development project standards",
          columns: ["Service", "Target", "Responsible"],
          rows: [
            [
              "Creation of the project file",
              "Within 5 business days",
              "Development and Infrastructure Department",
            ],
            [
              "Creation of the evidence file",
              "Within 5 business days",
              "Project Readiness and Evidence Governance Department",
            ],
            [
              "Inspection coordination",
              "Within 10 business days",
              "Compliance and Inspection Department",
            ],
          ],
        },
        {
          kind: "note",
          text: "These are targets for administrative steps, not for decisions. The Management Committee may review and change them.",
        },
      ],
    },
  ],
  related: [{ label: "All service standards", href: "/help/service-standards" }],
};

export const BUSINESS: WebsiteContent["business"] = {
  intro:
    "Invest, register, license and grow a business in the Antigua and Barbuda Special Economic Zone. The One-Stop Service coordinates every department involved.",
  articles: [
    INVESTOR_ONBOARDING,
    STRATEGIC_PROJECTS,
    CASE_MANAGERS,
    PROJECT_READINESS,
    SERVICE_STANDARDS,
  ],
  sectors: SECTORS,
};
