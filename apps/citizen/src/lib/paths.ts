// In-app URLs, and the mapping from backend deep links (`DeepLinkDto.route`) to them.
const enc = encodeURIComponent;

/** Prefix of the signed-in area. Everything under it needs a session. */
export const DASHBOARD = "/dashboard";
const d = (path = "") => `${DASHBOARD}${path}`;

/** Signed-in pages (the dashboard). */
export const paths = {
  home: d(),
  services: d("/services"),
  service: (slug: string) => d(`/services/${enc(slug)}`),
  eligibility: (slug: string) => d(`/services/${enc(slug)}/eligibility`),
  apply: (slug: string, applicationId?: string) =>
    d(`/services/${enc(slug)}/apply${applicationId ? `?application=${enc(applicationId)}` : ""}`),
  review: (slug: string, applicationId: string) =>
    d(`/services/${enc(slug)}/review?application=${enc(applicationId)}`),
  submitted: (applicationId: string) => d(`/applications/${enc(applicationId)}/submitted`),
  applications: d("/applications"),
  application: (id: string) => d(`/applications/${enc(id)}`),
  caseStatus: (caseId: string) => d(`/cases/${enc(caseId)}`),
  appointments: d("/appointments"),
  appointment: (id: string) => d(`/appointments/${enc(id)}`),
  documents: d("/documents"),
  document: (id: string) => d(`/documents/${enc(id)}`),
  credentials: d("/credentials"),
  credential: (id: string) => d(`/credentials/${enc(id)}`),
  payments: d("/payments"),
  invoice: (id: string) => d(`/payments/${enc(id)}`),
  receipt: (invoiceId: string, receiptId: string) =>
    d(`/payments/${enc(invoiceId)}/receipts/${enc(receiptId)}`),
  messages: d("/messages"),
  message: (id: string) => d(`/messages/${enc(id)}`),
  renewals: d("/renewals"),
  appeals: d("/appeals"),
  requestReview: d("/appeals/request"),
  work: d("/work"),
  immigration: d("/immigration"),
  tax: d("/tax"),
  property: d("/property"),
  vehicles: d("/vehicles"),
  health: d("/health"),
  benefits: d("/benefits"),
  education: d("/education"),
  civilRecords: d("/civil-records"),
  publicSafety: d("/public-safety"),
  representation: d("/representation"),
  profile: d("/profile"),
  settings: d("/settings"),
  help: d("/help"),
  menu: d("/menu"),
  /** Public pages, also linked from the dashboard. */
  verify: "/verify",
  howToTell: "/how-to-tell",
} as const;

/** Public website pages: reachable signed in or out. */
export const site = {
  home: "/",
  services: "/services",
  service: (slug: string) => `/services/${enc(slug)}`,
  /** Website search results. */
  search: (q?: string) => (q ? `/search?q=${enc(q)}` : "/search"),
  topics: "/topics",
  topic: (code: string) => `/topics/${enc(code)}`,
  individuals: "/individuals",
  business: "/business",
  businessArticle: (slug: string) => `/business/${enc(slug)}`,
  lifeEvents: "/life-events",
  lifeEvent: (slug: string) => `/life-events/${enc(slug)}`,
  departments: "/departments",
  department: (slug: string) => `/departments/${enc(slug)}`,
  helpArticle: (slug: string) => `/help/${enc(slug)}`,
  questions: "/help/questions",
  question: (id: string) => `/help/questions#${enc(id)}`,
  glossary: "/glossary",
  glossaryTerm: (id: string) => `/glossary#${enc(id)}`,
  officials: "/officials",
  digitalId: "/digital-id",
  signIn: "/sign-in",
  signInHelp: "/sign-in-help",
  signedOut: "/signed-out",
  help: "/help",
  contact: "/contact",
  offices: "/offices",
  status: "/status",
  scam: "/report-a-scam",
  about: "/about",
  accessibility: "/accessibility",
  privacy: "/privacy",
  terms: "/terms",
  verify: "/verify",
  howToTell: "/how-to-tell",
} as const;

/** True for paths in the signed-in area. */
export function isDashboardPath(pathname: string): boolean {
  return pathname === DASHBOARD || pathname.startsWith(`${DASHBOARD}/`);
}

/**
 * Turns a backend deep link into an in-app path. Unknown routes return undefined, so the item is
 * shown without a link rather than with a guessed one.
 */
export function deepLinkPath(link: {
  route: string;
  params: Record<string, unknown>;
}): string | undefined {
  const param = (name: string) => {
    const value = link.params[name];
    return typeof value === "string" && value ? value : undefined;
  };
  switch (link.route) {
    case "citizen.home":
      return paths.home;
    case "citizen.services":
      return paths.services;
    case "citizen.applications":
      return paths.applications;
    case "citizen.documents":
      return paths.documents;
    case "citizen.payments":
      return paths.payments;
    case "citizen.messages":
      return paths.messages;
    case "citizen.appointments":
      return paths.appointments;
    case "citizen.application.detail": {
      const id = param("applicationId");
      return id ? paths.application(id) : undefined;
    }
    case "citizen.case.status": {
      const id = param("caseId");
      return id ? paths.caseStatus(id) : undefined;
    }
    case "citizen.case.messages": {
      // Case communications are listed on the case's status page.
      const id = param("caseId");
      return id ? paths.caseStatus(id) : undefined;
    }
    case "citizen.payment.invoice": {
      const id = param("invoiceId");
      return id ? paths.invoice(id) : undefined;
    }
    case "citizen.instrument.detail": {
      const id = param("instrumentId");
      return id ? paths.credential(id) : undefined;
    }
    default:
      return undefined;
  }
}
