// Checks a tenant's website content for the mistakes a typed schema cannot catch: missing
// sources, references to services or departments that do not exist, duplicate slugs, links to
// pages that do not exist, and statements the website must never make from content alone
// (fees, phone numbers). Run by the tests for every tenant content module.
import type { Article, Block, ContentLink, WebsiteContent } from "./schema";

/** Text that looks like a fee or a phone number: these come from a backend or tenant config. */
const FORBIDDEN = [
  { pattern: /(?:\$|EC\$|XCD|US\$|USD)\s?\d/i, what: "a money amount" },
  { pattern: /\+\d[\d\s-]{6,}|\(\d{3}\)\s?\d{3}|\b\d{3}[-.\s]\d{4}\b/, what: "a phone number" },
];

function duplicates(values: readonly string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) dupes.add(value);
    seen.add(value);
  }
  return [...dupes];
}

function blockText(block: Block): string[] {
  switch (block.kind) {
    case "p":
      return [block.text];
    case "list":
      return [...block.items];
    case "steps":
      return block.items.flatMap((s) => [s.title, s.detail ?? ""]);
    case "table":
      return [block.caption, ...block.columns, ...block.rows.flat()];
    case "note":
      return [block.title ?? "", block.text];
    case "links":
      return block.items.map((l) => l.label);
  }
}

function articleLinks(article: Article): ContentLink[] {
  return [
    ...(article.related ?? []),
    ...article.sections.flatMap((s) =>
      s.blocks.flatMap((b) => (b.kind === "links" ? [...b.items] : [])),
    ),
  ];
}

/** Every piece of free text in the content, for the forbidden-text checks. */
export function allText(content: WebsiteContent): string[] {
  const articles = [content.about, ...content.business.articles, ...content.help.articles];
  return [
    ...content.organisation.whatItIs,
    content.home.heroLead,
    content.home.businessTeaser.text,
    ...content.home.onePath.flatMap((s) => [s.title, s.detail, s.target ?? ""]),
    ...articles.flatMap((a) => [
      a.title,
      a.summary,
      ...a.sections.flatMap((s) => [s.heading, ...s.blocks.flatMap(blockText)]),
    ]),
    ...content.departments.flatMap((d) => [d.summary, ...d.responsibilities, d.authorityNote]),
    ...content.categories.map((c) => c.summary),
    ...content.services.flatMap((s) => [
      s.name,
      s.summary,
      ...s.whoFor,
      ...s.whatYouCanDo,
      ...(s.documents.items ?? []),
      s.documents.note,
      ...(s.steps?.items ?? []).flatMap((step) => [step.title, step.detail ?? ""]),
      s.decision,
    ]),
    ...content.decisions.reconsideration,
    ...content.decisions.types.map((t) => t.meaning),
    ...content.lifeEvents.flatMap((e) => [e.summary, e.intro, ...e.steps.map((s) => s.detail)]),
    ...content.business.sectors.flatMap((s) => [s.summary, s.caveat ?? ""]),
    ...content.help.faq.flatMap((f) => [f.question, ...f.answer]),
    ...content.glossary.entries.map((g) => g.meaning),
    ...content.glossary.distinctions.map((d) => d.explanation),
  ];
}

/**
 * Returns a list of problems (empty when the content is valid). `hasPage`, when given, says
 * whether an internal link (a path) has a page.
 */
export function validateContent(
  content: WebsiteContent,
  hasPage?: (href: string) => boolean,
): string[] {
  const problems: string[] = [];
  const departments = new Set(content.departments.map((d) => d.slug));
  const categories = new Set(content.categories.map((c) => c.code));
  const services = new Set(content.services.map((s) => s.slug));
  const standards = new Set(content.help.serviceStandards.map((s) => s.id));
  const events = new Set(content.lifeEvents.map((e) => e.slug));

  const unique = (what: string, values: readonly string[]) => {
    for (const d of duplicates(values)) problems.push(`Duplicate ${what}: ${d}`);
  };
  unique(
    "department slug",
    content.departments.map((d) => d.slug),
  );
  unique(
    "category code",
    content.categories.map((c) => c.code),
  );
  unique(
    "service slug",
    content.services.map((s) => s.slug),
  );
  unique(
    "life event slug",
    content.lifeEvents.map((e) => e.slug),
  );
  unique(
    "business article slug",
    content.business.articles.map((a) => a.slug),
  );
  unique(
    "help article slug",
    content.help.articles.map((a) => a.slug),
  );
  unique(
    "FAQ id",
    content.help.faq.map((f) => f.id),
  );
  unique(
    "glossary id",
    content.glossary.entries.map((g) => g.id),
  );
  unique(
    "service standard id",
    content.help.serviceStandards.map((s) => s.id),
  );

  const needsSources = (what: string, sources: readonly string[]) => {
    if (sources.length === 0 || sources.some((s) => !s.trim()))
      problems.push(`${what} has no sources`);
  };
  const checkLink = (what: string, link: ContentLink) => {
    if (!link.href.startsWith("/")) problems.push(`${what} links outside the site: ${link.href}`);
    else if (hasPage && !hasPage(link.href))
      problems.push(`${what} links to a missing page: ${link.href}`);
  };

  needsSources("Organisation", content.organisation.sources);
  for (const step of content.home.onePath) needsSources(`Home step "${step.title}"`, step.sources);
  for (const slug of content.home.popularServiceSlugs) {
    if (!services.has(slug)) problems.push(`Home lists unknown service ${slug}`);
  }
  for (const slug of content.home.featuredLifeEventSlugs) {
    if (!events.has(slug)) problems.push(`Home lists unknown life event ${slug}`);
  }

  for (const d of content.departments) {
    needsSources(`Department ${d.slug}`, d.sources);
    if (!d.summary.trim()) problems.push(`Department ${d.slug} has no summary`);
    if (d.responsibilities.length === 0)
      problems.push(`Department ${d.slug} has no responsibilities`);
  }

  for (const c of content.categories) {
    needsSources(`Category ${c.code}`, c.sources);
    if (!content.services.some((s) => s.categoryCode === c.code)) {
      problems.push(`Category ${c.code} has no services`);
    }
  }

  for (const s of content.services) {
    const what = `Service ${s.slug}`;
    needsSources(what, s.sources);
    if (!s.summary.trim()) problems.push(`${what} has no summary`);
    if (!s.decision.trim()) problems.push(`${what} does not say who decides`);
    if (!s.documents.note.trim()) problems.push(`${what} has no documents note`);
    if (s.whoFor.length === 0) problems.push(`${what} does not say who it is for`);
    if (s.whatYouCanDo.length === 0) problems.push(`${what} does not say what you can do`);
    if (s.audiences.length === 0) problems.push(`${what} has no audience`);
    if (!departments.has(s.departmentSlug))
      problems.push(`${what} has unknown department ${s.departmentSlug}`);
    if (!categories.has(s.categoryCode))
      problems.push(`${what} has unknown category ${s.categoryCode}`);
    for (const r of s.relatedServices) {
      if (!services.has(r)) problems.push(`${what} relates to unknown service ${r}`);
      if (r === s.slug) problems.push(`${what} relates to itself`);
    }
    for (const id of s.standardIds ?? []) {
      if (!standards.has(id)) problems.push(`${what} has unknown service standard ${id}`);
    }
  }

  for (const e of content.lifeEvents) {
    needsSources(`Life event ${e.slug}`, e.sources);
    if (e.steps.length === 0) problems.push(`Life event ${e.slug} has no steps`);
    for (const step of e.steps) {
      if (step.serviceSlugs.length === 0)
        problems.push(`Life event ${e.slug} step "${step.title}" has no services`);
      for (const slug of step.serviceSlugs) {
        if (!services.has(slug)) problems.push(`Life event ${e.slug} uses unknown service ${slug}`);
      }
    }
  }

  for (const sector of content.business.sectors) {
    needsSources(`Sector ${sector.id}`, sector.sources);
    if (!categories.has(sector.categoryCode)) {
      problems.push(`Sector ${sector.id} has unknown category ${sector.categoryCode}`);
    }
  }

  const articles = [
    ["About", content.about] as const,
    ...content.business.articles.map((a) => ["Business article", a] as const),
    ...content.help.articles.map((a) => ["Help article", a] as const),
  ];
  for (const [kind, a] of articles) {
    const what = `${kind} ${a.slug}`;
    needsSources(what, a.sources);
    if (!a.summary.trim()) problems.push(`${what} has no summary`);
    unique(
      `section id in ${what}`,
      a.sections.map((s) => s.id),
    );
    for (const link of articleLinks(a)) checkLink(what, link);
    for (const s of a.sections) {
      for (const b of s.blocks) {
        if (b.kind === "table" && b.rows.some((r) => r.length !== b.columns.length)) {
          problems.push(`${what} table "${b.caption}" has rows of the wrong length`);
        }
      }
    }
  }

  for (const f of content.help.faq) {
    needsSources(`FAQ ${f.id}`, f.sources);
    if (f.answer.length === 0) problems.push(`FAQ ${f.id} has no answer`);
    for (const link of f.links ?? []) checkLink(`FAQ ${f.id}`, link);
  }
  for (const g of content.glossary.entries) needsSources(`Glossary ${g.id}`, g.sources);
  for (const d of content.glossary.distinctions) needsSources(`Distinction ${d.id}`, d.sources);
  for (const s of content.help.serviceStandards)
    needsSources(`Service standard ${s.id}`, s.sources);
  needsSources("Decisions", content.decisions.sources);

  for (const text of allText(content)) {
    for (const rule of FORBIDDEN) {
      if (rule.pattern.test(text)) problems.push(`Content states ${rule.what}: "${text}"`);
    }
  }
  return problems;
}
