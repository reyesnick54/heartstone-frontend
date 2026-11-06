// Turns a tenant's website content into search documents, each with the page it opens.
import { site } from "../lib/paths";
import { createIndex, GENERAL_SYNONYMS, type SearchDoc, type SearchIndex } from "../lib/search";
import type { Article, Block, WebsiteContent } from "./schema";

function blockText(block: Block): string {
  switch (block.kind) {
    case "p":
      return block.text;
    case "list":
      return block.items.join(". ");
    case "steps":
      return block.items.map((s) => `${s.title}. ${s.detail ?? ""}`).join(" ");
    case "table":
      return block.rows.map((r) => r.join(" ")).join(". ");
    case "note":
      return `${block.title ?? ""}. ${block.text}`;
    case "links":
      return "";
  }
}

const articleBody = (a: Article) =>
  a.sections.map((s) => `${s.heading}. ${s.blocks.map(blockText).join(" ")}`).join(" ");

export function searchDocs(content: WebsiteContent): SearchDoc[] {
  const department = new Map(content.departments.map((d) => [d.slug, d.name]));
  const category = new Map(content.categories.map((c) => [c.code, c.name]));
  const docs: SearchDoc[] = [];

  for (const s of content.services) {
    docs.push({
      id: `service:${s.slug}`,
      type: "service",
      title: s.name,
      href: site.service(s.slug),
      summary: s.summary,
      keywords: s.keywords,
      body: [
        department.get(s.departmentSlug) ?? "",
        category.get(s.categoryCode) ?? "",
        ...s.whoFor,
        ...s.whatYouCanDo,
        s.decision,
      ].join(". "),
    });
  }
  for (const e of content.lifeEvents) {
    docs.push({
      id: `life-event:${e.slug}`,
      type: "life-event",
      title: e.title,
      href: site.lifeEvent(e.slug),
      summary: e.summary,
      keywords: e.keywords,
      body: [e.intro, ...e.steps.map((s) => `${s.title}. ${s.detail}`)].join(" "),
    });
  }
  for (const a of content.business.articles) {
    docs.push({
      id: `business:${a.slug}`,
      type: "business",
      title: a.title,
      href: site.businessArticle(a.slug),
      summary: a.summary,
      keywords: a.keywords,
      body: articleBody(a),
    });
  }
  for (const a of content.help.articles) {
    docs.push({
      id: `help:${a.slug}`,
      type: "help",
      title: a.title,
      href: site.helpArticle(a.slug),
      summary: a.summary,
      keywords: a.keywords,
      body: articleBody(a),
    });
  }
  for (const f of content.help.faq) {
    docs.push({
      id: `faq:${f.id}`,
      type: "help",
      title: f.question,
      href: site.question(f.id),
      summary: f.answer[0] ?? "",
      keywords: f.keywords,
      body: f.answer.slice(1).join(" "),
    });
  }
  for (const g of content.glossary.entries) {
    docs.push({
      id: `glossary:${g.id}`,
      type: "glossary",
      title: g.term,
      href: site.glossaryTerm(g.id),
      summary: g.meaning,
      keywords: g.keywords ?? [],
      body: "",
    });
  }
  for (const d of content.departments) {
    docs.push({
      id: `department:${d.slug}`,
      type: "department",
      title: d.name,
      href: site.department(d.slug),
      summary: d.summary,
      keywords: d.keywords,
      body: [...d.responsibilities, d.authorityNote].join(". "),
    });
  }
  for (const c of content.categories) {
    docs.push({
      id: `topic:${c.code}`,
      type: "topic",
      title: c.name,
      href: site.topic(c.code),
      summary: c.summary,
      keywords: c.keywords,
      body: "",
    });
  }
  docs.push({
    id: "about",
    type: "about",
    title: content.about.title,
    href: site.about,
    summary: content.about.summary,
    keywords: content.about.keywords,
    body: [...content.organisation.whatItIs, articleBody(content.about)].join(" "),
  });
  return docs;
}

const cache = new WeakMap<WebsiteContent, SearchIndex>();

/** The search index for `content`, built once. */
export function contentIndex(content: WebsiteContent): SearchIndex {
  let index = cache.get(content);
  if (!index) {
    index = createIndex(searchDocs(content), [...GENERAL_SYNONYMS, ...content.searchSynonyms]);
    cache.set(content, index);
  }
  return index;
}
