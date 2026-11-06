// ABSEZ departments (Implementation Protocol, Article 9, with Articles 10–20 and Appendix B).
// Responsibilities are paraphrased from the documents. Authority notes use the documents' own
// framing: ABSEZ acts within the authority delegated to it; anything outside that stays with
// the competent authority.
import type { Department } from "../schema";
import { appx, art } from "./sources";

const WITHIN = "It acts within the authority delegated to ABSEZ.";

export const DEPARTMENTS: readonly Department[] = [
  {
    slug: "investor-relations",
    name: "Investor Relations Department",
    summary: "Your first point of contact as an investor, from the first enquiry onwards.",
    responsibilities: [
      "Welcoming and onboarding investors",
      "Answering investor questions and helping with projects",
      "Keeping investors informed and managing investor cases",
      "Monitoring projects and staying in touch with investors as they progress",
    ],
    authorityNote: `It leads the administrative handling of investor registration and project coordination. ${WITHIN}`,
    keywords: ["investor", "investment", "onboarding", "enquiry", "investor services"],
    sources: [art(10), appx("A"), appx("M", "Section 2")],
  },
  {
    slug: "corporate-registration",
    name: "Corporate Registration Department",
    summary: "Registers companies in the zone and keeps their records.",
    responsibilities: [
      "Processing company registration applications",
      "Reviewing corporate filings",
      "Issuing registry certificates and extracts",
      "Keeping and verifying company records",
    ],
    authorityNote: `It handles the registration functions allocated to the zone. ${WITHIN}`,
    keywords: ["company", "corporate", "registry", "incorporate", "register"],
    sources: [art(11), appx("A"), appx("M", "Section 3")],
  },
  {
    slug: "business-licensing",
    name: "Business Licensing Department",
    summary: "Issues, renews and monitors licences for activities in the zone.",
    responsibilities: [
      "Receiving and processing licence applications",
      "Issuing and renewing licences",
      "Checking that licence conditions are met",
      "Suspending or revoking licences where necessary",
      "Working with other competent authorities where the law requires it",
    ],
    authorityNote:
      "Its licensing work is limited to the functions lawfully allocated to the Special Economic Zone and does not reach beyond the zone.",
    keywords: ["licence", "license", "permit", "renewal", "business licence"],
    sources: [art(12), appx("A"), appx("M", "Section 4")],
  },
  {
    slug: "immigration-coordination",
    name: "Immigration Coordination Department",
    summary:
      "Receives immigration applications, checks they are complete and coordinates them through to a result.",
    responsibilities: [
      "Receiving immigration applications and documents",
      "Checking applications are complete",
      "Keeping applicant files and tracking progress",
      "Coordinating applications with the competent immigration authorities",
      "Telling applicants how their application is progressing",
      "Helping investors, staff, consultants, executives and their families relocate to the zone",
    ],
    authorityNote:
      "It may decide matters within the authority delegated to ABSEZ. Immigration powers that have not been delegated stay with the competent immigration authority, and those matters are referred to it.",
    keywords: ["immigration", "visa", "relocation", "entry", "family"],
    sources: [art(13), appx("C", "Workflow 3"), appx("M", "Section 5")],
  },
  {
    slug: "labour-coordination",
    name: "Labour Coordination Department",
    summary: "Handles work permits, employer registration and workforce records in the zone.",
    responsibilities: [
      "Registering employers",
      "Supporting the onboarding of employees",
      "Handling work permit applications",
      "Keeping labour, workforce and employment records",
      "Referring labour matters to the right authority",
    ],
    authorityNote:
      "Work permits are approved by ABSEZ within its delegated authority, with coordination with the labour authorities where needed.",
    keywords: ["work permit", "labour", "labor", "employer", "employment", "jobs", "staff"],
    sources: [art(15), appx("C", "Workflow 4"), appx("M", "Section 6")],
  },
  {
    slug: "customs-coordination",
    name: "Customs Coordination Department",
    summary: "Coordinates customs, imports and exports for businesses in the zone.",
    responsibilities: [
      "Receiving and checking customs documents",
      "Coordinating customs declarations",
      "Coordinating import and export documents",
      "Helping with approved duty-free and incentive programmes",
      "Handling customs clearance in the zone",
    ],
    authorityNote: `It carries out the customs functions authorised for the zone. ${WITHIN}`,
    keywords: ["customs", "import", "export", "trade", "clearance", "duty"],
    sources: [art(14), appx("A"), appx("M", "Section 7")],
  },
  {
    slug: "development-infrastructure",
    name: "Development and Infrastructure Department",
    summary: "Coordinates development, planning, building and infrastructure projects in the zone.",
    responsibilities: [
      "Receiving development project applications and keeping project files",
      "Coordinating planning and building permit applications",
      "Monitoring infrastructure projects and development progress",
      "Helping arrange inspections",
    ],
    authorityNote:
      "It exercises the planning, development, construction and project approval functions delegated to ABSEZ. Development approval decisions are made by the ABSEZ Management Committee or this department.",
    keywords: ["development", "construction", "building", "planning", "infrastructure"],
    sources: [art(16), appx("A"), appx("C", "Workflow 2"), appx("M", "Section 8")],
  },
  {
    slug: "land-registration",
    name: "Land Registration and Real Property Administration Department",
    summary: "Registers land, leases and title transfers in the zone and keeps property records.",
    responsibilities: [
      "Land registration",
      "Title records and title verification",
      "Lease registration and administration",
      "Parcel and cadastral records",
      "Support for property transactions",
    ],
    authorityNote: `${WITHIN}`,
    keywords: ["land", "property", "title", "lease", "real estate", "parcel"],
    sources: [appx("A"), appx("B", "1"), appx("C", "Workflow 5")],
  },
  {
    slug: "compliance-inspection",
    name: "Compliance and Inspection Department",
    summary:
      "Checks that licences, permits and approval conditions are being followed, and arranges inspections.",
    responsibilities: [
      "Monitoring licence, permit and approval conditions",
      "Arranging inspections and keeping inspection records",
      "Tracking corrective actions",
      "Preparing compliance reports",
      "Referring regulatory matters to the right authority",
    ],
    authorityNote:
      "It uses administrative enforcement powers within its delegated authority. Criminal enforcement stays with the national authorities.",
    keywords: ["compliance", "inspection", "conditions", "corrective action", "audit"],
    sources: [art(17), appx("B", "2"), appx("M", "Section 9")],
  },
  {
    slug: "project-readiness",
    name: "Project Readiness and Evidence Governance Department",
    summary:
      "Keeps standard evidence files for projects and reports on how complete a project's documents are.",
    responsibilities: [
      "Setting up and keeping project evidence files",
      "Checking ownership and permit documents",
      "Reviewing project readiness",
      "Supporting due diligence",
      "Setting standards for project documents",
    ],
    authorityNote:
      "Its readiness reports are based on how complete the documents are. It does not guarantee investment performance or returns, and does not endorse any investment decision.",
    keywords: ["readiness", "evidence", "due diligence", "project file"],
    sources: [art(18), art(55), art(56), appx("E")],
  },
  {
    slug: "digital-administration",
    name: "Digital Administration Department",
    summary: "Runs the One-Stop Service's digital systems, including this online platform.",
    responsibilities: [
      "Online application and workflow systems",
      "Digital records and document management",
      "User access and digital identity",
      "Audit trails and cybersecurity",
      "Electronic signatures and document verification",
    ],
    authorityNote: "It manages the technology. It does not make decisions on applications.",
    keywords: ["digital", "online", "platform", "records", "digital id"],
    sources: [art(19), appx("B", "4"), appx("I")],
  },
  {
    slug: "financial-services",
    name: "Financial Services Coordination Department",
    summary: "Coordinates financial services matters in the zone.",
    responsibilities: [
      "Helping investors with financial services matters",
      "Receiving applications and documents and tracking their progress",
      "Keeping applicants informed",
      "Within the zone, and within delegated authority: financial licences, regulatory inspections and enforcement",
    ],
    authorityNote:
      "Financial services applications are reviewed by ABSEZ within the zone or referred to the competent authorities. All other financial regulatory powers stay with the statutory financial regulators of Antigua and Barbuda.",
    keywords: ["financial services", "bank", "finance", "fintech", "financial licence"],
    sources: [art(20), appx("A"), appx("B", "5"), appx("O")],
  },
  {
    slug: "citizenship-residency",
    name: "Citizenship and Residency Services Department",
    summary:
      "Receives and processes citizenship and residency applications through the One-Stop Service.",
    responsibilities: [
      "Receiving applications and reviewing documents",
      "Residency, including investor and economic residency programmes",
      "Administrative support for citizenship applications",
      "Tracking cases and keeping applicants informed",
    ],
    authorityNote:
      "It approves and issues only within the authority delegated to ABSEZ. Where needed, applications are referred to, or processed jointly with, the competent authority.",
    keywords: ["citizenship", "residency", "residence", "permanent residency"],
    sources: [appx("A"), appx("B", "12"), appx("C", "Workflow 6")],
  },
  {
    slug: "vehicle-transport",
    name: "Vehicle Registration and Transport Administration Department",
    summary: "Registers vehicles in the zone and supports transport licensing.",
    responsibilities: [
      "Vehicle registration and licence plates",
      "Fleet and commercial transport administration",
      "Transport licensing support and permits",
      "Vehicle inspections",
    ],
    authorityNote: `It works with other competent authorities where necessary. ${WITHIN}`,
    keywords: ["vehicle", "car", "transport", "licence plate", "fleet"],
    sources: [appx("A"), appx("B", "6"), appx("D", "Category K")],
  },
  {
    slug: "public-safety",
    name: "Public Safety and Security Coordination Department",
    summary: "Coordinates public safety, security and emergency planning in the zone.",
    responsibilities: [
      "Security coordination and security approvals",
      "Emergency response planning and coordination",
      "Incident reporting",
      "Sharing public safety information",
    ],
    authorityNote: `It coordinates with other competent authorities where necessary. ${WITHIN}`,
    keywords: ["safety", "security", "emergency", "incident"],
    sources: [appx("A"), appx("B", "7"), appx("D", "Category L")],
  },
  {
    slug: "cannabis-administration",
    name: "Cannabis Administration and Licensing Department",
    summary: "Handles cannabis licensing and industry registration in the zone, where lawful.",
    responsibilities: [
      "Cannabis licences and applications",
      "Registration of cultivation, extraction, manufacturing and distribution",
      "Research programmes, including the Cannabis Research Institute",
      "Compliance coordination",
    ],
    authorityNote: `Only activities that are lawful are licensed. It coordinates with other competent authorities where necessary. ${WITHIN}`,
    keywords: ["cannabis", "cultivation", "research"],
    sources: [appx("A"), appx("B", "8"), appx("D", "Category M")],
  },
  {
    slug: "blue-economy",
    name: "Blue Economy Administration Department",
    summary: "Supports marine and ocean-economy projects and programmes in the zone.",
    responsibilities: [
      "Blue economy programmes",
      "Marine economic development projects",
      "Sustainable ocean industries and maritime innovation",
    ],
    authorityNote: WITHIN,
    keywords: ["blue economy", "marine", "ocean", "maritime"],
    sources: [appx("A"), appx("B", "9"), appx("D", "Category N")],
  },
  {
    slug: "carbon-management",
    name: "Carbon Management and Trading Department",
    summary:
      "Runs carbon credit, carbon banking and sustainable development programmes in the zone.",
    responsibilities: [
      "Carbon programmes and carbon credit administration",
      "Carbon banking and carbon exchange administration",
      "Monitoring sustainable development projects",
    ],
    authorityNote: `It coordinates with other competent authorities where necessary. ${WITHIN}`,
    keywords: ["carbon", "carbon credit", "environment", "sustainability"],
    sources: [appx("A"), appx("B", "10"), appx("D", "Category O")],
  },
  {
    slug: "digital-assets",
    name: "Digital Assets and Blockchain Administration Department",
    summary: "Handles digital asset, blockchain and FinTech projects in the zone.",
    responsibilities: [
      "Digital asset programmes and registration",
      "Blockchain and FinTech projects",
      "Asset tokenisation programmes",
      "Digital infrastructure projects and registry systems",
    ],
    authorityNote:
      "It acts within the authority delegated to ABSEZ. Other regulatory powers stay with the statutory financial regulators of Antigua and Barbuda.",
    keywords: ["digital assets", "blockchain", "crypto", "fintech", "tokenisation"],
    sources: [appx("A"), appx("B", "11"), appx("D", "Category P")],
  },
];
