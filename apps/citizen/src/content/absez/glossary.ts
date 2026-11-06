// Plain-English glossary, from ABSEZ Volume 1 (Part B: terms; "Important distinctions") and the
// Annexes' definitions. Only terms an applicant is likely to meet are included; internal
// technology terms (agents, TEVV, digital twin…) are left out.
import type { Distinction, GlossaryEntry, WebsiteContent } from "../schema";
import { appx, art, glossary } from "./sources";

const G = (section: string) => [glossary(section)];

const ENTRIES: readonly GlossaryEntry[] = [
  {
    id: "absez",
    term: "ABSEZ",
    meaning:
      "The Antigua and Barbuda Special Economic Zone, and the organisation that administers it.",
    sources: G("Part A"),
  },
  {
    id: "acceptance",
    term: "Acceptance",
    meaning:
      "When the authorised organisation formally confirms that something meets the requirements for the stage being reviewed.",
    sources: G("Decision and Approval Terms"),
  },
  {
    id: "administrative-completeness",
    term: "Administrative completeness",
    meaning: "Your application has all the required pieces. It does not mean it has been approved.",
    keywords: ["completeness review", "complete"],
    sources: [glossary("Application and Administrative Terms"), art(28)],
  },
  {
    id: "advisory-committee",
    term: "Advisory Committee",
    meaning:
      "The national bodies that supervise and inspect the One-Stop Service and give it guidance, without interfering in day-to-day decisions.",
    sources: [art(21)],
  },
  {
    id: "applicant",
    term: "Applicant",
    meaning:
      "The person or company asking ABSEZ for a service, approval, licence, permit, registration or other action.",
    sources: G("Application and Administrative Terms"),
  },
  {
    id: "approval",
    term: "Approval",
    meaning: "Official permission to go ahead, subject to any conditions.",
    sources: G("Decision and Approval Terms"),
  },
  {
    id: "audit-trail",
    term: "Audit trail",
    meaning: "A history showing who did what, and when.",
    sources: G("Evidence and Records Terms"),
  },
  {
    id: "authentication",
    term: "Authentication",
    meaning: "Checking that someone or something is genuine.",
    sources: G("Technology and AI Terms"),
  },
  {
    id: "authority",
    term: "Authority",
    meaning:
      "Who is actually allowed to do something: the lawful or formally approved power to take an action or make a decision. Technology and system access cannot create authority.",
    sources: G("Governance and Authority Terms"),
  },
  {
    id: "authorisation",
    term: "Authorisation",
    meaning: "Once it is confirmed who you are, deciding what you are allowed to do.",
    keywords: ["authorization"],
    sources: G("Technology and AI Terms"),
  },
  {
    id: "beneficial-ownership",
    term: "Beneficial ownership",
    meaning:
      "Who really owns or controls a company, even when other companies, trusts or nominees sit in between.",
    sources: G("Professional and Regulatory Terms"),
  },
  {
    id: "case-manager",
    term: "Case manager",
    meaning:
      "A person appointed by the Management Committee to coordinate an important project or complex case and keep the applicant informed.",
    sources: [art(43), appx("L")],
  },
  {
    id: "case-reference",
    term: "Case reference number",
    meaning:
      "The number your application is given when it arrives. Quote it when you contact ABSEZ.",
    sources: [art(26), art(46)],
  },
  {
    id: "competent-authority",
    term: "Competent authority",
    meaning:
      "The organisation that legally has the final say on a particular matter. Some immigration, professional licensing, environmental or financial matters may involve a competent authority outside ABSEZ.",
    sources: G("Governance and Authority Terms"),
  },
  {
    id: "compliance",
    term: "Compliance",
    meaning: "Following the rules that apply.",
    sources: G("Professional and Regulatory Terms"),
  },
  {
    id: "concurrence",
    term: "Concurrence",
    meaning: "When another authorised organisation must agree before the next step can happen.",
    sources: G("Governance and Authority Terms"),
  },
  {
    id: "conditional-approval",
    term: "Conditional approval",
    meaning:
      "An approval with conditions attached, such as reporting, inspections, operating restrictions or development milestones.",
    sources: [art(35), art(37)],
  },
  {
    id: "continuing-obligation",
    term: "Continuing obligation",
    meaning:
      "Rules you still have to follow after approval, such as reporting, insurance, financial filings, environmental monitoring or renewals.",
    sources: G("Application and Administrative Terms"),
  },
  {
    id: "corrective-action",
    term: "Corrective action",
    meaning:
      "What must be done to fix a problem. A corrective action notice says what is wrong, what to do and by when.",
    sources: [glossary("Testing, Safety, and Operational Terms"), art(39)],
  },
  {
    id: "deficiency-notice",
    term: "Deficiency notice",
    meaning:
      "A notice telling you what is missing from your application, what to do, the deadline and who to contact.",
    sources: [art(28), appx("N", "Section 3")],
  },
  {
    id: "delegation",
    term: "Delegation",
    meaning:
      "Authority that has been officially handed to someone else within set limits. Cooperation or system access is not delegation.",
    keywords: ["delegated authority", "delegated function"],
    sources: G("Governance and Authority Terms"),
  },
  {
    id: "due-diligence",
    term: "Due diligence",
    meaning: "Doing the necessary homework before saying yes to something important.",
    sources: G("Professional and Regulatory Terms"),
  },
  {
    id: "escalation",
    term: "Escalation",
    meaning: "Sending a problem upwards to someone with more responsibility or authority.",
    sources: [glossary("Decision and Approval Terms"), art(48)],
  },
  {
    id: "evidence",
    term: "Evidence",
    meaning: "The proof behind what someone is saying or deciding.",
    sources: G("Evidence and Records Terms"),
  },
  {
    id: "jurisdiction",
    term: "Jurisdiction",
    meaning: "Where, over whom and over what subject someone has legal authority.",
    sources: G("Governance and Authority Terms"),
  },
  {
    id: "management-committee",
    term: "Management Committee",
    meaning:
      "The ABSEZ body that runs the One-Stop Service and makes the zone's final administrative decisions within the authority allocated or delegated to it.",
    sources: [art(7)],
  },
  {
    id: "official-record",
    term: "Official record",
    meaning: "The authoritative record of what happened, kept by the responsible institution.",
    sources: G("Evidence and Records Terms"),
  },
  {
    id: "one-stop-service",
    term: "One-Stop Service",
    meaning:
      "One coordinated pathway for applicants, instead of going separately to many offices. It does not give one organisation every government power.",
    sources: G("Application and Administrative Terms"),
  },
  {
    id: "administration-authority",
    term: "One-Stop Service Administration Authority",
    meaning:
      "The ABSEZ body that runs the One-Stop Service day to day: receiving, routing and tracking applications.",
    sources: [art(8), glossary("Application and Administrative Terms")],
  },
  {
    id: "project-evidence-file",
    term: "Project evidence file",
    meaning:
      "A standard file of a project's documents, kept for transparency and due diligence. It is not investment advice or a guarantee.",
    sources: [art(55), appx("E")],
  },
  {
    id: "readiness-status",
    term: "Project readiness status",
    meaning:
      "An administrative label showing how far a project's documents and approvals have got, from concept stage to operational. It is not a regulatory approval.",
    sources: [appx("E", "Part IX")],
  },
  {
    id: "recommendation",
    term: "Recommendation",
    meaning: "A suggestion, not an approval.",
    sources: G("Decision and Approval Terms"),
  },
  {
    id: "reconsideration",
    term: "Reconsideration",
    meaning: "Asking the responsible authority to look at its decision again.",
    sources: [glossary("Application and Administrative Terms"), art(41)],
  },
  {
    id: "redress",
    term: "Redress",
    meaning: "The formal way to say: something is wrong here, please review and correct it.",
    sources: G("Application and Administrative Terms"),
  },
  {
    id: "referral",
    term: "Referral",
    meaning: "Passing part of a case to the organisation responsible for dealing with it.",
    sources: G("Decision and Approval Terms"),
  },
  {
    id: "revocation",
    term: "Revocation",
    meaning: "Officially taking back a permission that was granted before.",
    sources: G("Professional and Regulatory Terms"),
  },
  {
    id: "strategic-project",
    term: "Strategic Project",
    meaning:
      "A major project designated by the Management Committee because of its significance, which gets enhanced coordination. It is not exempt from legal requirements.",
    sources: [glossary("Institutional and Project Terms"), art(42), appx("K")],
  },
  {
    id: "substantive-review",
    term: "Substantive review",
    meaning:
      "Looking at whether an application deserves approval, rather than only checking that the forms were sent.",
    sources: G("Application and Administrative Terms"),
  },
  {
    id: "suspension",
    term: "Suspension",
    meaning: "Putting something, such as a licence, temporarily on hold.",
    sources: G("Professional and Regulatory Terms"),
  },
];

const DISTINCTIONS: readonly Distinction[] = [
  {
    id: "completeness-approval",
    statement: "Complete is not the same as approved",
    explanation:
      "Sending all the required documents does not mean your application has been approved.",
    sources: G("Important Distinctions"),
  },
  {
    id: "information-evidence",
    statement: "Information is not the same as evidence",
    explanation: "Having information does not mean it has been verified.",
    sources: G("Important Distinctions"),
  },
  {
    id: "recommendation-decision",
    statement: "A recommendation is not a decision",
    explanation: "Advice is not the same as an official decision.",
    sources: G("Important Distinctions"),
  },
  {
    id: "supervision-decision",
    statement: "Supervising is not the same as deciding",
    explanation: "A body can supervise or inspect a process without making each decision.",
    sources: G("Important Distinctions"),
  },
  {
    id: "liaison-veto",
    statement: "Working with government is not a government veto",
    explanation:
      "Coordination with another government body does not, by itself, give that body control over an ABSEZ function.",
    sources: G("Important Distinctions"),
  },
  {
    id: "ai-decision",
    statement: "Computer analysis is not an official decision",
    explanation: "Technology can help an authorised person, but it does not make the decision.",
    sources: G("Important Distinctions"),
  },
  {
    id: "access-authority",
    statement: "Access is not authority",
    explanation:
      "Being able to see information or use a system does not give someone authority over the decision.",
    sources: G("Important Distinctions"),
  },
  {
    id: "one-stop-authority",
    statement: "One stop is not one unlimited authority",
    explanation:
      "The One-Stop Service gives you one coordinated path, while every department and government institution keeps its own legal authority.",
    sources: G("Important Distinctions"),
  },
];

export const GLOSSARY: WebsiteContent["glossary"] = {
  intro:
    "Plain-English meanings of words you may see when you use the One-Stop Service, and some important differences to keep in mind.",
  entries: ENTRIES,
  distinctions: DISTINCTIONS,
};
