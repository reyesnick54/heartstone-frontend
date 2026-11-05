// In-app URLs, and the mapping from backend deep links (`DeepLinkDto.route`) to them.
const enc = encodeURIComponent;

export const paths = {
  home: "/",
  services: "/services",
  service: (slug: string) => `/services/${enc(slug)}`,
  eligibility: (slug: string) => `/services/${enc(slug)}/eligibility`,
  apply: (slug: string, applicationId?: string) =>
    `/services/${enc(slug)}/apply${applicationId ? `?application=${enc(applicationId)}` : ""}`,
  review: (slug: string, applicationId: string) =>
    `/services/${enc(slug)}/review?application=${enc(applicationId)}`,
  submitted: (applicationId: string) => `/applications/${enc(applicationId)}/submitted`,
  applications: "/applications",
  application: (id: string) => `/applications/${enc(id)}`,
  caseStatus: (caseId: string) => `/cases/${enc(caseId)}`,
  appointments: "/appointments",
  appointment: (id: string) => `/appointments/${enc(id)}`,
  documents: "/documents",
  document: (id: string) => `/documents/${enc(id)}`,
  credentials: "/credentials",
  credential: (id: string) => `/credentials/${enc(id)}`,
  payments: "/payments",
  invoice: (id: string) => `/payments/${enc(id)}`,
  receipt: (invoiceId: string, receiptId: string) =>
    `/payments/${enc(invoiceId)}/receipts/${enc(receiptId)}`,
  messages: "/messages",
  message: (id: string) => `/messages/${enc(id)}`,
  renewals: "/renewals",
  appeals: "/appeals",
  requestReview: "/appeals/request",
  work: "/work",
  immigration: "/immigration",
  tax: "/tax",
  property: "/property",
  vehicles: "/vehicles",
  health: "/health",
  benefits: "/benefits",
  education: "/education",
  civilRecords: "/civil-records",
  publicSafety: "/public-safety",
  representation: "/representation",
  profile: "/profile",
  settings: "/settings",
  help: "/help",
  menu: "/menu",
  verify: "/verify",
} as const;

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
