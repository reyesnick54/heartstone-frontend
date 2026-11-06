// The shape of a tenant's public website content. A government supplies one `WebsiteContent`
// object (for ABSEZ: ./absez) through tenant.ts; the website pages render it and contain no
// facts about any particular government themselves.
//
// Every item carries `sources`: where in the tenant's own governing documents the statement
// comes from, so the tenant's legal team can review it. Pages show them as a small "Based on"
// note, not as the main content.

/** A citation into the tenant's governing documents, e.g. "Implementation Protocol, Article 13". */
export type SourceRef = string;

/** A link inside the website (a path) with its link text. */
export interface ContentLink {
  readonly label: string;
  readonly href: string;
}

export interface Step {
  readonly title: string;
  readonly detail?: string;
}

/** One piece of an article section. Plain text only: no HTML in content. */
export type Block =
  | { readonly kind: "p"; readonly text: string }
  | { readonly kind: "list"; readonly items: readonly string[] }
  | { readonly kind: "steps"; readonly label: string; readonly items: readonly Step[] }
  | {
      readonly kind: "table";
      readonly caption: string;
      readonly columns: readonly string[];
      readonly rows: readonly (readonly string[])[];
    }
  | { readonly kind: "note"; readonly title?: string; readonly text: string }
  | { readonly kind: "links"; readonly items: readonly ContentLink[] };

export interface Section {
  /** Anchor id, unique within the article. */
  readonly id: string;
  readonly heading: string;
  readonly blocks: readonly Block[];
}

/** A page of guidance: business and investor pages, help pages, About. */
export interface Article {
  readonly slug: string;
  readonly title: string;
  /** One or two sentences under the title, also used in search results and lists. */
  readonly summary: string;
  readonly sections: readonly Section[];
  readonly keywords: readonly string[];
  readonly sources: readonly SourceRef[];
  readonly related?: readonly ContentLink[];
}

export interface Department {
  readonly slug: string;
  readonly name: string;
  readonly summary: string;
  /** What the department does, in plain words. */
  readonly responsibilities: readonly string[];
  /** How far its decision-making reaches, in the documents' own careful terms. */
  readonly authorityNote: string;
  readonly keywords: readonly string[];
  readonly sources: readonly SourceRef[];
}

/** A group of services (for ABSEZ: an application category in Appendix D). */
export interface ServiceCategory {
  readonly code: string;
  /** The category's letter or number in the tenant's documents, if it has one. */
  readonly reference?: string;
  readonly name: string;
  readonly summary: string;
  readonly keywords: readonly string[];
  readonly sources: readonly SourceRef[];
}

export type Audience = "individuals" | "business" | "investors";

export interface ServiceContent {
  readonly slug: string;
  readonly name: string;
  readonly categoryCode: string;
  /** Slug of the department that handles it. */
  readonly departmentSlug: string;
  readonly summary: string;
  readonly audiences: readonly Audience[];
  readonly whoFor: readonly string[];
  readonly whatYouCanDo: readonly string[];
  /**
   * Documents to prepare. `items` only where the tenant's documents list them; `note` always
   * says how the actual requirements are confirmed.
   */
  readonly documents: { readonly items?: readonly string[]; readonly note: string };
  /** The steps for this kind of application, where the tenant's documents set them out. */
  readonly steps?: { readonly basedOn: string; readonly items: readonly Step[] };
  /** Who decides, in the documents' own careful terms. */
  readonly decision: string;
  /** Ids of service standards (help.serviceStandards) that apply in particular. */
  readonly standardIds?: readonly string[];
  readonly relatedServices: readonly string[];
  readonly keywords: readonly string[];
  readonly sources: readonly SourceRef[];
  /** Show the emergency-number notice (safety-related services). */
  readonly emergencyNotice?: boolean;
  /**
   * Slug of the matching service in the platform's public catalogue. Set it only when that
   * service is published there; the page then offers "Apply online" when the catalogue says
   * applications are open.
   */
  readonly catalogueCode?: string;
}

export interface LifeEventStep {
  readonly title: string;
  readonly detail: string;
  readonly serviceSlugs: readonly string[];
}

export interface LifeEvent {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly intro: string;
  readonly steps: readonly LifeEventStep[];
  readonly keywords: readonly string[];
  readonly sources: readonly SourceRef[];
}

export interface Sector {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  readonly categoryCode: string;
  /** A caveat that must be shown with the sector (e.g. "where lawful"). */
  readonly caveat?: string;
  readonly sources: readonly SourceRef[];
}

export interface FaqEntry {
  readonly id: string;
  readonly question: string;
  readonly answer: readonly string[];
  readonly keywords: readonly string[];
  readonly sources: readonly SourceRef[];
  readonly links?: readonly ContentLink[];
}

export interface CaseStatus {
  readonly code: string;
  readonly label: string;
  readonly meaning: string;
}

export interface ServiceStandard {
  readonly id: string;
  readonly item: string;
  readonly target: string;
  readonly responsible: string;
  readonly group: "administrative" | "investor" | "development";
  readonly sources: readonly SourceRef[];
}

export interface GlossaryEntry {
  readonly id: string;
  readonly term: string;
  readonly meaning: string;
  readonly keywords?: readonly string[];
  readonly sources: readonly SourceRef[];
}

/** "Completeness is not approval", and similar. */
export interface Distinction {
  readonly id: string;
  readonly statement: string;
  readonly explanation: string;
  readonly sources: readonly SourceRef[];
}

/** A step of the one-stop path shown on the home page and in help. */
export interface PathStep {
  readonly title: string;
  readonly detail: string;
  /** A documented target time, if there is one. */
  readonly target?: string;
  readonly sources: readonly SourceRef[];
}

export interface WebsiteContent {
  readonly organisation: {
    /** Short name used in sentences ("ABSEZ"). */
    readonly shortName: string;
    readonly fullName: string;
    readonly whatItIs: readonly string[];
    readonly sources: readonly SourceRef[];
  };
  readonly home: {
    readonly heroTitle: string;
    readonly heroLead: string;
    readonly searchHint: string;
    readonly quickSearches: readonly { readonly label: string; readonly q: string }[];
    readonly onePath: readonly PathStep[];
    readonly popularServiceSlugs: readonly string[];
    readonly featuredLifeEventSlugs: readonly string[];
    readonly businessTeaser: { readonly title: string; readonly text: string };
  };
  readonly about: Article;
  readonly departments: readonly Department[];
  readonly categories: readonly ServiceCategory[];
  readonly services: readonly ServiceContent[];
  /** Said on every service page about reconsideration (the tenant's general rule). */
  readonly decisions: {
    readonly types: readonly { readonly label: string; readonly meaning: string }[];
    readonly reconsideration: readonly string[];
    readonly generalSteps: readonly Step[];
    readonly documentsNote: string;
    readonly sources: readonly SourceRef[];
  };
  readonly lifeEvents: readonly LifeEvent[];
  readonly business: {
    readonly intro: string;
    readonly articles: readonly Article[];
    readonly sectors: readonly Sector[];
  };
  readonly help: {
    readonly articles: readonly Article[];
    readonly faq: readonly FaqEntry[];
    readonly caseStatuses: readonly CaseStatus[];
    readonly serviceStandards: readonly ServiceStandard[];
  };
  readonly glossary: {
    readonly intro: string;
    readonly entries: readonly GlossaryEntry[];
    readonly distinctions: readonly Distinction[];
  };
  /** Extra search synonym groups for this tenant's vocabulary. */
  readonly searchSynonyms: readonly (readonly string[])[];
}
