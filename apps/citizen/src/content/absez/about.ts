// About ABSEZ and the One-Stop Service (Implementation Protocol Part I, Articles 1–9 and 21–25,
// 62–63; Appendix P). Plain-English summary; the Protocol's own text is authoritative.
//
// Not stated: whether the Protocol has entered into force (Article 67 says it does so on formal
// execution, and the copies supplied have blank signature blocks), or which roadmap phase is
// current.
import type { Article, WebsiteContent } from "../schema";
import { appx, art, glossary } from "./sources";

export const ORGANISATION: WebsiteContent["organisation"] = {
  shortName: "ABSEZ",
  fullName: "Antigua and Barbuda Special Economic Zone",
  whatItIs: [
    "The Antigua and Barbuda Special Economic Zone (ABSEZ) is a special economic zone set up under the Special Economic Zone Act, 2015.",
    "ABSEZ runs a One-Stop Service: one coordinated place to apply for the registrations, licences, permits and other approvals needed to invest, work, build and do business in the zone, instead of going separately to many offices.",
    "One stop does not mean one organisation holds every power. ABSEZ acts within the authority delegated to it. Matters outside that authority are referred to the competent authority.",
  ],
  sources: [art(1), art(2), art(6), glossary("One-Stop Service System")],
};

export const ABOUT: Article = {
  slug: "about",
  title: "About ABSEZ and the One-Stop Service",
  summary:
    "What the Antigua and Barbuda Special Economic Zone is, how its One-Stop Service works, and who is responsible for what.",
  keywords: ["about", "absez", "special economic zone", "one-stop service", "who we are"],
  sources: [
    art(1),
    art(2),
    art(3),
    art(4),
    art(5),
    art(6),
    art(7),
    art(8),
    art(9),
    art(21),
    appx("P"),
  ],
  sections: [
    {
      id: "what-absez-is",
      heading: "What ABSEZ is",
      blocks: [
        {
          kind: "p",
          text: "The Antigua and Barbuda Special Economic Zone (ABSEZ) is a special economic zone governed by the Special Economic Zone Act, 2015 and the instruments made under it.",
        },
        {
          kind: "p",
          text: "Its One-Stop Service System is the main place where applications for the zone are received, processed, coordinated, tracked and decided. It is an application centre, a case processing centre, a coordination centre and a digital service platform in one.",
        },
      ],
    },
    {
      id: "legal-basis",
      heading: "Legal basis",
      blocks: [
        {
          kind: "p",
          text: "The One-Stop Service is set out in the ABSEZ One-Stop Service System Implementation Protocol, made under section 22 of the Special Economic Zone Act, 2015. The Protocol is based on:",
        },
        {
          kind: "list",
          items: [
            "The Special Economic Zone Act, 2015",
            "The Special Economic Zone (Amendment) Act, 2026",
            "The Special Economic Zone (Operator Permit) Order, 2025, No. 11",
            "The Antigua and Barbuda Special Economic Zone (Yida International Investment Holdings Antigua Limited) Licence Order, 2025, No. 10",
            "The Special Economic Zone Guidelines, 2025",
            "The memorandum of the Prime Minister and Minister responsible for Special Economic Zones of 10 June 2026, approving the phased introduction of the One-Stop Service",
            "Directives, approvals and other instruments lawfully issued under these",
          ],
        },
      ],
    },
    {
      id: "purpose",
      heading: "Purpose and objectives",
      blocks: [
        { kind: "p", text: "The One-Stop Service is meant to:" },
        {
          kind: "list",
          items: [
            "Make administration more efficient and reduce duplication",
            "Improve services for investors",
            "Help government agencies work together",
            "Modernise administration with digital systems",
            "Make procedures more transparent and accountable",
            "Make it easier to invest, set up a business, develop and build",
            "Raise service standards and make Antigua and Barbuda more competitive for international investment",
          ],
        },
      ],
    },
    {
      id: "principles",
      heading: "Principles",
      blocks: [
        {
          kind: "p",
          text: "The One-Stop Service is guided by legality, transparency, accountability, efficiency, investment facilitation, regulatory integrity, inter-agency cooperation, administrative modernisation, proportionality and service excellence.",
        },
      ],
    },
    {
      id: "management-committee",
      heading: "The Management Committee",
      blocks: [
        {
          kind: "p",
          text: "The ABSEZ Management Committee runs the One-Stop Service. It is the administrative and decision-making authority of the zone for the functions allocated or delegated to it, and its decisions are the final administrative decisions of the zone.",
        },
        {
          kind: "p",
          text: "It sets up and supervises the departments, sets operating procedures and service standards, keeps the records systems, coordinates with other authorities, monitors performance and reports on it.",
        },
      ],
    },
    {
      id: "administration-authority",
      heading: "The One-Stop Service Administration Authority",
      blocks: [
        {
          kind: "p",
          text: "The Administration Authority coordinates the One-Stop Service day to day. It receives applications, gives them case reference numbers, routes them to the right departments, manages cases and records, keeps applicants informed, tracks performance and liaises with government agencies.",
        },
      ],
    },
    {
      id: "departments",
      heading: "Departments",
      blocks: [
        {
          kind: "p",
          text: "The Management Committee may set up departments for each area of work, including investor relations, corporate registration, business licensing, immigration, labour, customs, development and infrastructure, land, compliance and inspection, project readiness, digital administration, financial services, citizenship and residency, vehicles and transport, public safety, cannabis, the blue economy, carbon management, digital assets and blockchain, and legal affairs. It may also set up others when needed.",
        },
        {
          kind: "links",
          items: [{ label: "See every department and what it does", href: "/departments" }],
        },
      ],
    },
    {
      id: "advisory-committee",
      heading: "The Advisory Committee",
      blocks: [
        {
          kind: "p",
          text: "An Advisory Committee of national bodies supervises and inspects the One-Stop Service and gives guidance. Its members include:",
        },
        {
          kind: "list",
          items: [
            "Customs and Excise Division",
            "Inland Revenue Department",
            "Department of Immigration",
            "Royal Police Force of Antigua and Barbuda",
            "Financial Services Regulatory Commission (FSRC)",
            "Office of National Drug and Money Laundering Control Policy (ONDCP)",
            "Development Control Authority (DCA)",
            "Labour Department",
            "Citizenship by Investment Unit (CIU)",
            "Land Registry, or its successor for land and cadastral administration",
          ],
        },
        {
          kind: "p",
          text: "The Advisory Committee reports its findings in writing to the Management Committee, which must put deficiencies right. It does not interfere directly in ABSEZ's day-to-day administration or approval decisions. Each member body may name liaison officers to coordinate with the One-Stop Service.",
        },
      ],
    },
    {
      id: "limits",
      heading: "What the One-Stop Service does not do",
      blocks: [
        {
          kind: "p",
          text: "The Protocol does not transfer sovereignty, legislative or judicial power, or any statutory authority that the law gives to a competent authority. It does not amend any law. Powers that have not been delegated to ABSEZ stay with the competent authorities, and criminal enforcement stays with the national authorities.",
        },
      ],
    },
    {
      id: "roadmap",
      heading: "Implementation roadmap",
      blocks: [
        { kind: "p", text: "The One-Stop Service is being introduced in phases:" },
        {
          kind: "table",
          caption: "Implementation phases",
          columns: ["Phase", "Timing", "What it covers"],
          rows: [
            [
              "1. Organisation and launch",
              "0 to 90 days",
              "Set up the Administration Authority and departments, appoint heads of department, name liaison officers, adopt document standards and operating procedures",
            ],
            [
              "2. Service launch",
              "90 to 180 days",
              "Launch investor services, registration, licensing, project intake, evidence governance and status tracking",
            ],
            [
              "3. Integration",
              "180 to 365 days",
              "Expand coordination with other agencies, unify workflows, expand inspection coordination, strengthen reporting and digital administration",
            ],
            [
              "4. Maturity",
              "Ongoing",
              "Continuous improvement, more automation, stronger digital governance and modernisation",
            ],
          ],
        },
      ],
    },
  ],
};
