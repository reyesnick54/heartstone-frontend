// Help: how to apply, what happens next, case statuses (Article 47), service standards
// (Article 46, Appendix F), reconsideration (Article 41), escalation (Article 48, Appendix H)
// and how information is handled (Articles 24, 44, 52, 57). FAQ answers come from these.
import type { Article, CaseStatus, FaqEntry, ServiceStandard, WebsiteContent } from "../schema";
import { appx, art, glossary } from "./sources";

export const CASE_STATUSES: readonly CaseStatus[] = [
  { code: "SUBMITTED", label: "Submitted", meaning: "Your application has been received." },
  { code: "UNDER_REVIEW", label: "Under review", meaning: "ABSEZ is reviewing your application." },
  {
    code: "ADDITIONAL_INFORMATION_REQUIRED",
    label: "Additional information required",
    meaning:
      "Something more is needed from you. You will be told what, why and the deadline. Processing may pause until it arrives.",
  },
  {
    code: "UNDER_REVIEW_BY_GOVERNMENT_AUTHORITY",
    label: "Under review by a government authority",
    meaning: "Part of your case is with another authority that must review it.",
  },
  {
    code: "AWAITING_INSPECTION",
    label: "Awaiting inspection",
    meaning: "An inspection is needed before the case can go further.",
  },
  {
    code: "UNDER_COMPLIANCE_REVIEW",
    label: "Under compliance review",
    meaning: "Compliance with the rules or conditions that apply is being reviewed.",
  },
  { code: "APPROVED", label: "Approved", meaning: "Your application has been approved." },
  {
    code: "CONDITIONALLY_APPROVED",
    label: "Conditionally approved",
    meaning: "Approved, with conditions you must follow.",
  },
  { code: "REJECTED", label: "Rejected", meaning: "Your application has been refused." },
  { code: "CLOSED_COMPLETED", label: "Closed – completed", meaning: "The case is finished." },
  {
    code: "CLOSED_WITHDRAWN",
    label: "Closed – withdrawn",
    meaning: "The application was withdrawn and the case is closed.",
  },
  {
    code: "CLOSED_REJECTED",
    label: "Closed – rejected",
    meaning: "The application was refused and the case is closed.",
  },
];

export const SERVICE_STANDARDS: readonly ServiceStandard[] = [
  {
    id: "acknowledgement",
    item: "Acknowledgement that your application has arrived",
    target: "Within 24 hours",
    responsible: "One-Stop Service Administration Authority",
    group: "administrative",
    sources: [appx("F", "Part II")],
  },
  {
    id: "classification",
    item: "Classification of your application",
    target: "Within 24 hours",
    responsible: "One-Stop Service Administration Authority",
    group: "administrative",
    sources: [appx("F", "Part II")],
  },
  {
    id: "initial-response",
    item: "Initial administrative response (for example acknowledgement, case reference, deficiency notice, routing confirmation, request for information or status update)",
    target: "Within 72 hours of receipt",
    responsible: "One-Stop Service Administration Authority",
    group: "administrative",
    sources: [art(46)],
  },
  {
    id: "deficiency-notice",
    item: "Deficiency notice, if something is missing",
    target: "Within 24 hours after review",
    responsible: "The department reviewing your application",
    group: "administrative",
    sources: [appx("F", "Part II")],
  },
  {
    id: "referral",
    item: "Referral to the responsible department",
    target: "Within 24 hours",
    responsible: "One-Stop Service Administration Authority",
    group: "administrative",
    sources: [appx("F", "Part II")],
  },
  {
    id: "applicant-inquiry",
    item: "Response to your questions as an applicant",
    target: "Within 24 hours",
    responsible: "Investor Relations Department",
    group: "administrative",
    sources: [appx("F", "Part II")],
  },
  {
    id: "status-updates",
    item: "Status update after a significant event in your case",
    target: "Within 5 business days",
    responsible: "Case manager",
    group: "administrative",
    sources: [appx("F", "Part II")],
  },
  {
    id: "investor-inquiry",
    item: "Response to investor enquiries",
    target: "Within 24 hours",
    responsible: "Investor Relations Department",
    group: "investor",
    sources: [appx("F", "Part III")],
  },
  {
    id: "project-meeting",
    item: "Project engagement meeting",
    target: "Within 5 business days",
    responsible: "Investor Relations Department",
    group: "investor",
    sources: [appx("F", "Part III")],
  },
  {
    id: "strategic-assignment",
    item: "Strategic project assignment",
    target: "Within 5 business days",
    responsible: "Management Committee",
    group: "investor",
    sources: [appx("F", "Part III")],
  },
  {
    id: "case-manager",
    item: "Assignment of a case manager",
    target: "Within 5 business days",
    responsible: "Management Committee",
    group: "investor",
    sources: [appx("F", "Part III")],
  },
  {
    id: "project-file",
    item: "Creation of the project file",
    target: "Within 5 business days",
    responsible: "Development and Infrastructure Department",
    group: "development",
    sources: [appx("F", "Part IV")],
  },
  {
    id: "evidence-file",
    item: "Creation of the evidence file",
    target: "Within 5 business days",
    responsible: "Project Readiness and Evidence Governance Department",
    group: "development",
    sources: [appx("F", "Part IV")],
  },
  {
    id: "inspection-coordination",
    item: "Inspection coordination",
    target: "Within 10 business days",
    responsible: "Compliance and Inspection Department",
    group: "development",
    sources: [appx("F", "Part IV")],
  },
];

const HOW_TO_APPLY: Article = {
  slug: "how-to-apply",
  title: "How to apply",
  summary: "Apply once through the One-Stop Service, even when several departments are involved.",
  keywords: ["apply", "application", "how to apply", "submit", "start"],
  sources: [art(26), art(27), art(28), glossary("Application and Administrative Terms")],
  sections: [
    {
      id: "find",
      heading: "1. Find the service",
      blocks: [
        {
          kind: "p",
          text: "Search for what you need, or browse services by area. You do not need to know which department handles it: the One-Stop Service routes your application for you.",
        },
        { kind: "links", items: [{ label: "Browse all services", href: "/services" }] },
      ],
    },
    {
      id: "prepare",
      heading: "2. Get your information ready",
      blocks: [
        {
          kind: "p",
          text: "Each service page explains who it is for and, where the requirements are published, what documents to prepare. ABSEZ confirms exactly what your case needs during the completeness review.",
        },
      ],
    },
    {
      id: "submit",
      heading: "3. Submit your application",
      blocks: [
        {
          kind: "p",
          text: "Applications are submitted through the intake channels ABSEZ designates. Where a service can be applied for online, its page says so. Otherwise, contact ABSEZ to start.",
        },
        {
          kind: "p",
          text: "When your application arrives it is given a case reference number, a file is opened and the date is recorded.",
        },
      ],
    },
    {
      id: "completeness",
      heading: "4. Completeness review",
      blocks: [
        { kind: "p", text: "ABSEZ checks whether:" },
        {
          kind: "list",
          items: [
            "the application forms are complete",
            "all required documents have been sent",
            "any applicable fees have been paid",
            "there is enough information",
            "any conditions the law sets before an application can go ahead are met",
          ],
        },
        {
          kind: "p",
          text: "If something is missing, you get a deficiency notice saying what is missing, what to do, the deadline and who to contact. An incomplete application may be rejected, but you can resubmit it once the problem is fixed.",
        },
        {
          kind: "note",
          title: "Complete is not the same as approved",
          text: "Passing the completeness review means your application has all the required pieces. It does not mean it has been approved.",
        },
      ],
    },
  ],
  related: [
    { label: "What happens after you apply", href: "/help/after-you-apply" },
    { label: "Service standards", href: "/help/service-standards" },
  ],
};

const AFTER_YOU_APPLY: Article = {
  slug: "after-you-apply",
  title: "What happens after you apply",
  summary:
    "How your application is classified, routed, reviewed and decided, and how you are kept informed.",
  keywords: ["after applying", "what happens next", "process", "review", "routing", "decision"],
  sources: [
    art(27),
    art(29),
    art(30),
    art(31),
    art(32),
    art(33),
    art(34),
    art(35),
    art(37),
    art(46),
    art(47),
  ],
  sections: [
    {
      id: "first-response",
      heading: "Your first response",
      blocks: [
        {
          kind: "p",
          text: "You should get an acknowledgement within 24 hours, and an initial administrative response within 72 hours. It may be an acknowledgement and case reference number, a deficiency notice, confirmation of where your case has been sent, a request for more information, or a status update.",
        },
      ],
    },
    {
      id: "classification",
      heading: "Classification and routing",
      blocks: [
        {
          kind: "p",
          text: "Your case is classified, for example as a licensing matter, a development application or an immigration matter. The classification decides which workflow, reviews, document standards and service levels apply.",
        },
        {
          kind: "p",
          text: "Your case is then sent to the departments or authorities that need to deal with it: ABSEZ departments, other participating authorities, technical reviewers, inspectors or legal review.",
        },
      ],
    },
    {
      id: "review",
      heading: "Review",
      blocks: [
        {
          kind: "p",
          text: "Matters that need professional assessment get a technical review, such as engineering, environmental, construction, compliance or financial review. Where several authorities must review a matter, ABSEZ coordinates them and asks them to review at the same time where possible.",
        },
        {
          kind: "p",
          text: "If more information is needed, you get a written request saying what is needed, why, and the deadline. Processing may pause until you reply.",
        },
        {
          kind: "p",
          text: "Inspections may be needed: site, building, compliance, operational, safety or environmental. Where several authorities need to inspect, ABSEZ may arrange one joint inspection to save you repeat visits.",
        },
      ],
    },
    {
      id: "decision",
      heading: "The decision",
      blocks: [
        {
          kind: "p",
          text: "When the reviews are done, the relevant ABSEZ department or the Management Committee decides, and you are told formally. A decision notice gives the reference number, the date, the type of decision, any conditions, next steps and who to contact.",
        },
        {
          kind: "list",
          items: [
            "Approval",
            "Conditional approval",
            "Approval subject to corrective action within a set period",
            "Referral to another authority",
            "Deferred decision",
            "Rejection",
            "Administrative closure",
          ],
        },
      ],
    },
    {
      id: "after-decision",
      heading: "After the decision",
      blocks: [
        {
          kind: "p",
          text: "An approval may have conditions, such as reporting, compliance obligations, inspections, operating restrictions, development milestones or keeping records. The Compliance and Inspection Department monitors them. ABSEZ also keeps track of renewal and expiry dates.",
        },
      ],
    },
  ],
  related: [
    { label: "What each case status means", href: "/help/case-statuses" },
    { label: "Asking for a decision to be reconsidered", href: "/help/reconsideration" },
  ],
};

const STATUSES_ARTICLE: Article = {
  slug: "case-statuses",
  title: "What your case status means",
  summary: "The statuses you may see while your application is processed, and what each one means.",
  keywords: ["status", "case status", "track", "progress", "where is my application"],
  sources: [art(47)],
  sections: [
    {
      id: "statuses",
      heading: "Case statuses",
      blocks: [
        {
          kind: "p",
          text: "You will receive progress updates on your application. Its status will be one of these:",
        },
        {
          kind: "table",
          caption: "Case statuses",
          columns: ["Status", "What it means"],
          rows: CASE_STATUSES.map((s) => [s.label, s.meaning]),
        },
      ],
    },
  ],
  related: [{ label: "What happens after you apply", href: "/help/after-you-apply" }],
};

const STANDARDS_ARTICLE: Article = {
  slug: "service-standards",
  title: "Service standards",
  summary: "The target times ABSEZ has set for each administrative step.",
  keywords: ["service standards", "how long", "72 hours", "24 hours", "response time", "timeline"],
  sources: [art(45), art(46), appx("F")],
  sections: [
    {
      id: "administrative",
      heading: "For every application",
      blocks: [
        {
          kind: "table",
          caption: "Administrative response standards",
          columns: ["Service", "Target", "Responsible"],
          rows: SERVICE_STANDARDS.filter((s) => s.group === "administrative").map((s) => [
            s.item,
            s.target,
            s.responsible,
          ]),
        },
      ],
    },
    {
      id: "investors",
      heading: "For investors",
      blocks: [
        {
          kind: "table",
          caption: "Investor relations standards",
          columns: ["Service", "Target", "Responsible"],
          rows: SERVICE_STANDARDS.filter((s) => s.group === "investor").map((s) => [
            s.item,
            s.target,
            s.responsible,
          ]),
        },
      ],
    },
    {
      id: "development",
      heading: "For development projects",
      blocks: [
        {
          kind: "table",
          caption: "Development project standards",
          columns: ["Service", "Target", "Responsible"],
          rows: SERVICE_STANDARDS.filter((s) => s.group === "development").map((s) => [
            s.item,
            s.target,
            s.responsible,
          ]),
        },
        {
          kind: "note",
          title: "Targets, not decision deadlines",
          text: "These targets are for administrative steps. They are not times for a decision, which depends on the case. The Management Committee sets the standards and may review and change them.",
        },
      ],
    },
  ],
};

const RECONSIDERATION: Article = {
  slug: "reconsideration",
  title: "If you disagree with a decision",
  summary:
    "How to ask for a decision to be reconsidered, and how problems with your case are escalated.",
  keywords: ["appeal", "reconsideration", "review", "disagree", "complaint", "escalate", "redress"],
  sources: [art(41), art(48), appx("H", "Part VI"), glossary("Reconsideration")],
  sections: [
    {
      id: "reconsideration",
      heading: "Asking for reconsideration",
      blocks: [
        {
          kind: "p",
          text: "Where the law allows, you can ask for a decision to be reconsidered (looked at again), reviewed or appealed.",
        },
        {
          kind: "p",
          text: "The procedure, and any deadline, is set by the applicable laws and regulations, your licence conditions, and the procedures of the authority that decided. Your decision notice tells you the next steps and who to contact.",
        },
        {
          kind: "p",
          text: "The One-Stop Service can help you with an appeal, but it cannot change the legal rights you have.",
        },
      ],
    },
    {
      id: "escalation",
      heading: "If your case is stuck",
      blocks: [
        {
          kind: "p",
          text: "ABSEZ has an escalation process for delays, unresolved issues between departments, major projects, matters of public interest, compliance risks and unclear legal questions. Matters can be escalated to senior officials, department heads, the Management Committee, or to the Advisory Committee for recommendations.",
        },
        { kind: "links", items: [{ label: "Contact ABSEZ", href: "/contact" }] },
      ],
    },
  ],
};

const YOUR_INFORMATION: Article = {
  slug: "your-information",
  title: "How your information is handled",
  summary: "Records, confidentiality and who can see your information.",
  keywords: ["privacy", "confidential", "records", "data", "information", "access"],
  sources: [art(24), art(44), art(52), art(53), art(57)],
  sections: [
    {
      id: "records",
      heading: "Your case file",
      blocks: [
        {
          kind: "p",
          text: "Each case has a master administrative file, the official record of your case. It can include your application and supporting documents, review comments, inspection reports, approvals, compliance records, correspondence and the final decision.",
        },
      ],
    },
    {
      id: "access",
      heading: "Who can see it",
      blocks: [
        {
          kind: "p",
          text: "Access to records depends on people's roles and responsibilities, on a need-to-know basis. As an applicant you can see information about your own case. Important actions, such as submissions, changes, approvals and who accessed a record, are kept in an audit trail.",
        },
      ],
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      blocks: [
        {
          kind: "p",
          text: "Information is handled in line with the law and confidentiality requirements. Confidential information is disclosed only where the law requires it, where it is lawfully authorised, or with the right approval. Authorities share information only as needed and in line with privacy, data protection and security requirements.",
        },
        { kind: "links", items: [{ label: "Privacy notice for this website", href: "/privacy" }] },
      ],
    },
  ],
};

export const FAQ: readonly FaqEntry[] = [
  {
    id: "what-is-one-stop",
    question: "What is the One-Stop Service?",
    answer: [
      "It is one coordinated place to apply for the services of the Antigua and Barbuda Special Economic Zone. Instead of going to many offices separately, you apply once and ABSEZ routes your case to the departments and authorities involved.",
      "It does not mean one organisation holds every power: ABSEZ acts within its delegated authority, and other matters are referred to the competent authority.",
    ],
    keywords: ["one stop", "what is", "absez"],
    sources: [art(6), glossary("One-Stop Service System")],
    links: [{ label: "About ABSEZ", href: "/about" }],
  },
  {
    id: "which-department",
    question: "Do I need to know which department deals with my application?",
    answer: [
      "No. ABSEZ classifies your application and sends it to the right departments, reviewers or authorities for you.",
    ],
    keywords: ["department", "who handles", "where to apply"],
    sources: [art(27), art(29)],
  },
  {
    id: "how-long-response",
    question: "How soon will I hear back after I apply?",
    answer: [
      "You should get an acknowledgement within 24 hours and an initial administrative response within 72 hours. This may be a case reference number, a deficiency notice, confirmation of where your case has gone, a request for information or a status update.",
    ],
    keywords: ["how long", "response", "hear back", "72 hours", "24 hours", "acknowledgement"],
    sources: [art(46), appx("F", "Part II")],
    links: [{ label: "Service standards", href: "/help/service-standards" }],
  },
  {
    id: "how-long-decision",
    question: "How long will it take to get a decision?",
    answer: [
      "It depends on your case. ABSEZ sets target times for administrative steps, such as acknowledging and routing your application, but not a fixed time for decisions. You will receive progress updates, and status updates after significant events.",
    ],
    keywords: ["how long", "decision", "processing time", "wait"],
    sources: [art(45), art(47), appx("F")],
  },
  {
    id: "missing-documents",
    question: "What happens if my application is missing something?",
    answer: [
      "You get a deficiency notice that says what is missing, what you need to do, the deadline and who to contact. An incomplete application may be rejected, but you can resubmit it once you have fixed the problem.",
    ],
    keywords: ["missing", "incomplete", "deficiency", "documents", "rejected"],
    sources: [art(26), art(28), appx("N", "Section 3")],
  },
  {
    id: "complete-means-approved",
    question: "If my application is complete, does that mean it is approved?",
    answer: [
      "No. Completeness means your application has all the required pieces. Whether it is approved is decided after review. Sending a document also does not mean it has been verified.",
    ],
    keywords: ["complete", "approved", "documents accepted"],
    sources: [glossary("Important Distinctions"), art(28), art(35)],
  },
  {
    id: "payment-approval",
    question: "Does paying a fee mean my application is approved?",
    answer: [
      "No. The completeness review checks whether any applicable fees have been paid, but payment is not a decision. Your application is decided by the responsible department or the Management Committee.",
    ],
    keywords: ["fee", "payment", "pay", "approved"],
    sources: [art(28), art(35)],
  },
  {
    id: "fees",
    question: "How much does it cost?",
    answer: [
      "Fees depend on the service and your case. This website does not list them yet. ABSEZ will confirm any fees that apply to your case.",
    ],
    keywords: ["fee", "cost", "price", "how much", "charge"],
    sources: [art(28)],
    links: [{ label: "Contact ABSEZ", href: "/contact" }],
  },
  {
    id: "more-information",
    question: "What if ABSEZ asks me for more information?",
    answer: [
      "The request will be in writing and say what is needed, why, and the deadline. Processing may pause until you send it, so reply as soon as you can.",
    ],
    keywords: ["more information", "request", "rfi", "additional information"],
    sources: [art(31)],
  },
  {
    id: "who-decides",
    question: "Who makes the decision on my application?",
    answer: [
      "Decisions are made by the relevant ABSEZ department or the ABSEZ Management Committee, within the authority delegated to ABSEZ. Where a matter is outside that authority, it is referred to the competent authority, which decides it.",
    ],
    keywords: ["who decides", "decision", "authority", "approve"],
    sources: [art(35), art(36), appx("A")],
  },
  {
    id: "track",
    question: "How do I find out where my application is?",
    answer: [
      "You receive progress updates. Your case will have a status such as Submitted, Under review, Additional information required, Awaiting inspection or Approved. If you have a case manager, they give you status updates after significant events.",
    ],
    keywords: ["track", "status", "progress", "where is"],
    sources: [art(47), appx("F", "Part II")],
    links: [{ label: "What each status means", href: "/help/case-statuses" }],
  },
  {
    id: "disagree",
    question: "What can I do if I disagree with a decision?",
    answer: [
      "Where the law allows, you can ask for the decision to be reconsidered, reviewed or appealed. The procedure is set by the applicable laws, regulations, licence conditions and the procedures of the authority that decided. The One-Stop Service can help, but cannot change your legal rights.",
    ],
    keywords: ["appeal", "disagree", "reconsider", "review", "complaint"],
    sources: [art(41)],
    links: [{ label: "If you disagree with a decision", href: "/help/reconsideration" }],
  },
  {
    id: "delays",
    question: "What if my case is delayed?",
    answer: [
      "ABSEZ has an escalation process for processing delays and unresolved issues. Matters can be escalated to senior officials, department heads or the Management Committee.",
    ],
    keywords: ["delay", "slow", "stuck", "escalate"],
    sources: [art(48)],
  },
  {
    id: "case-manager",
    question: "Can I get a case manager?",
    answer: [
      "Case managers may be appointed for Strategic Projects, large development projects, important investors, matters involving several agencies and complex applications. They are appointed by the Management Committee.",
    ],
    keywords: ["case manager", "point of contact"],
    sources: [art(43), appx("L")],
    links: [{ label: "Case managers", href: "/business/case-managers" }],
  },
  {
    id: "strategic",
    question: "What is a Strategic Project?",
    answer: [
      "A project the Management Committee designates because of its significance, for example its investment size, jobs, infrastructure, tourism impact, technology or national importance. It can bring a dedicated case manager and priority handling, but does not exempt the project from legal requirements.",
    ],
    keywords: ["strategic project", "major project"],
    sources: [art(42), appx("K")],
    links: [{ label: "Strategic projects", href: "/business/strategic-projects" }],
  },
  {
    id: "readiness-approval",
    question: "Is a project readiness assessment an approval?",
    answer: [
      "No. A readiness status or assessment is administrative and based on how complete the documents are. It is not a regulatory approval, investment advice, a guarantee or a valuation.",
    ],
    keywords: ["readiness", "assessment", "approval", "guarantee"],
    sources: [art(18), appx("E", "Part I"), appx("E", "Part IX")],
  },
  {
    id: "inspections",
    question: "Will I have to deal with several separate inspections?",
    answer: [
      "Where several authorities need to inspect, ABSEZ may arrange a joint inspection to reduce repeat visits and disruption. Each competent authority can still carry out its own inspections where the law allows.",
    ],
    keywords: ["inspection", "joint inspection", "visits"],
    sources: [art(34)],
  },
  {
    id: "renewals",
    question: "Will I be reminded when my licence needs renewing?",
    answer: [
      "ABSEZ keeps track of the renewal status of permits, licences, registrations and approvals. Renewal procedures may include automated reminders, compliance reviews, updated documents, fee checks and status reviews.",
    ],
    keywords: ["renew", "renewal", "reminder", "expiry"],
    sources: [art(40)],
  },
  {
    id: "confidential",
    question: "Is my information kept confidential?",
    answer: [
      "Information obtained through the One-Stop Service must be handled in line with the law and confidentiality requirements. Access is based on roles and need to know, and confidential information is disclosed only where the law requires it, it is lawfully authorised, or the right approval has been given.",
    ],
    keywords: ["confidential", "privacy", "data", "information"],
    sources: [art(52), art(57)],
    links: [{ label: "How your information is handled", href: "/help/your-information" }],
  },
  {
    id: "government-bypass",
    question:
      "Can another government department contact me directly with a decision on my ABSEZ case?",
    answer: [
      "The ABSEZ liaison procedures say government departments do not bypass ABSEZ to issue decisions or directives directly to applicants on One-Stop Service matters. If you are unsure whether a message is genuine, contact ABSEZ.",
    ],
    keywords: ["government", "contact", "scam", "genuine", "message"],
    sources: [appx("H", "Part VI")],
    links: [{ label: "How to tell this site is official", href: "/how-to-tell" }],
  },
];

export const HELP: WebsiteContent["help"] = {
  articles: [
    HOW_TO_APPLY,
    AFTER_YOU_APPLY,
    STATUSES_ARTICLE,
    STANDARDS_ARTICLE,
    RECONSIDERATION,
    YOUR_INFORMATION,
  ],
  faq: FAQ,
  caseStatuses: CASE_STATUSES,
  serviceStandards: SERVICE_STANDARDS,
};
