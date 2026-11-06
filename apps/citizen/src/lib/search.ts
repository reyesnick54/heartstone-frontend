// Client-side search over the website's content. No dependency: a small scorer over a few
// hundred documents.
//
// Ranking: a query word found in the title counts most, then keywords, then the summary, then
// the body. Words match exactly, by prefix ("regist" → "registration"), or with one typo in
// longer words ("permt" → "permit"). Synonyms ("licence"/"license", "visa"/"immigration") match
// at a slightly lower weight. Results that contain every query word, or the whole query as a
// phrase in the title, rank higher.

export type SearchType =
  "service" | "life-event" | "business" | "help" | "glossary" | "department" | "topic" | "about";

export interface SearchDoc {
  id: string;
  type: SearchType;
  title: string;
  href: string;
  summary: string;
  keywords: readonly string[];
  body: string;
}

export interface SearchResult {
  doc: SearchDoc;
  score: number;
}

/** General English synonym groups. Tenants add their own vocabulary (content.searchSynonyms). */
export const GENERAL_SYNONYMS: readonly (readonly string[])[] = [
  ["licence", "license", "licensing", "licenced"],
  ["permit", "permission", "authorisation", "approval"],
  ["visa", "immigration", "immigrate", "entry", "residency", "residence", "resident"],
  ["company", "business", "incorporate", "incorporation", "corporate", "firm", "enterprise"],
  ["build", "building", "construction", "construct", "develop", "development", "planning"],
  ["work", "job", "employment", "employ", "labour", "worker", "staff"],
  ["employer", "employ", "hire", "hiring", "recruit"],
  ["car", "vehicle", "automobile", "truck"],
  ["import", "export", "customs", "trade", "shipping", "goods"],
  ["land", "property", "title", "estate", "plot", "parcel"],
  ["house", "home", "property"],
  ["buy", "purchase", "transfer", "sell"],
  ["rent", "lease", "leasehold", "tenancy"],
  ["renew", "renewal", "extend", "expiry", "expire"],
  ["register", "registration", "registry", "enrol"],
  ["appeal", "reconsideration", "reconsider", "review", "complaint", "complain", "disagree"],
  ["fee", "cost", "price", "charge", "pay", "payment"],
  ["family", "dependant", "dependent", "spouse", "child", "children", "partner"],
  ["status", "track", "progress", "update"],
  ["invest", "investor", "investment"],
  ["move", "relocate", "relocation", "settle"],
  ["inspection", "inspect", "inspector", "visit"],
  ["crypto", "cryptocurrency", "blockchain", "token", "digital"],
  ["marine", "ocean", "maritime", "sea"],
  ["citizen", "citizenship", "nationality"],
  ["safety", "security", "emergency"],
  ["help", "support", "contact", "question"],
];

const STOPWORDS = new Set(
  "a an and are as at be by can do does for from get go how i if in into is it me my need of on or our should so the their them there this to up want we what when where which who will with you your".split(
    " ",
  ),
);

/** British spellings, so that "license" and "licence" index the same. */
const SPELLING: Readonly<Record<string, string>> = {
  license: "licence",
  licenses: "licence",
  licensed: "licence",
  licensing: "licence",
  licences: "licence",
  labor: "labour",
  organization: "organisation",
  authorization: "authorisation",
  tokenization: "tokenisation",
  enroll: "enrol",
};

/** Light stemming: plural and common verb endings. Applied the same way to text and queries. */
export function stem(word: string): string {
  const spelled = SPELLING[word] ?? word;
  if (spelled.length > 4 && spelled.endsWith("ies")) return `${spelled.slice(0, -3)}y`;
  if (spelled.length > 4 && /(ches|shes|sses|xes)$/.test(spelled)) return spelled.slice(0, -2);
  if (spelled.length > 3 && spelled.endsWith("s") && !/(ss|us|is)$/.test(spelled)) {
    return spelled.slice(0, -1);
  }
  return spelled;
}

/** Lower-case words without accents or punctuation. */
export function words(text: string): string[] {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean);
}

function terms(text: string): string[] {
  return words(text).map(stem);
}

/** True when `a` and `b` differ by at most one typo (insert, delete, change or swap). */
function withinOneEdit(a: string, b: string): boolean {
  if (a === b) return true;
  const la = a.length;
  const lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < la && j < lb) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (la === lb && a[i] === b[j + 1] && a[i + 1] === b[j]) {
      // Two neighbouring letters swapped ("harbuor") counts as one typo.
      i += 2;
      j += 2;
    } else if (la > lb) i++;
    else if (lb > la) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (la - i) + (lb - j) <= 1;
}

const FIELDS = [
  { name: "title", weight: 10 },
  { name: "keywords", weight: 6 },
  { name: "summary", weight: 3 },
  { name: "body", weight: 1 },
] as const;

type FieldName = (typeof FIELDS)[number]["name"];

interface IndexedDoc {
  doc: SearchDoc;
  fields: Record<FieldName, readonly string[]>;
  titlePhrase: string;
  keywordPhrases: readonly string[];
}

export interface SearchIndex {
  docs: readonly IndexedDoc[];
  synonyms: ReadonlyMap<string, readonly string[]>;
  /** Multi-word synonyms (e.g. "special economic zone"), matched as phrases in the query. */
  phraseSynonyms: readonly { phrase: string; terms: readonly string[] }[];
}

export function createIndex(
  docs: readonly SearchDoc[],
  synonymGroups: readonly (readonly string[])[] = GENERAL_SYNONYMS,
): SearchIndex {
  const synonyms = new Map<string, string[]>();
  const phraseSynonyms: { phrase: string; terms: string[] }[] = [];
  for (const group of synonymGroups) {
    const single = [
      ...new Set(group.filter((g) => words(g).length === 1).map((g) => stem(words(g)[0] ?? ""))),
    ];
    for (const term of single) {
      const others = single.filter((t) => t !== term);
      synonyms.set(term, [...new Set([...(synonyms.get(term) ?? []), ...others])]);
    }
    for (const phrase of group.filter((g) => words(g).length > 1)) {
      phraseSynonyms.push({ phrase: words(phrase).join(" "), terms: single });
    }
  }
  return {
    docs: docs.map((doc) => ({
      doc,
      fields: {
        title: terms(doc.title),
        keywords: doc.keywords.flatMap(terms),
        summary: terms(doc.summary),
        body: terms(doc.body),
      },
      titlePhrase: words(doc.title).join(" "),
      keywordPhrases: doc.keywords.map((k) => words(k).join(" ")),
    })),
    synonyms,
    phraseSynonyms,
  };
}

/** How well `term` matches one field: 1 exact, 0.75 prefix, 0.5 one typo, 0 none. */
function matchQuality(term: string, field: readonly string[]): number {
  let best = 0;
  for (const word of field) {
    if (word === term) return 1;
    if (term.length >= 3 && word.startsWith(term)) best = Math.max(best, 0.75);
    else if (term.length >= 5 && best < 0.5 && withinOneEdit(word, term)) best = 0.5;
  }
  return best;
}

/** The best field's score, plus a little for each other field that also matches. */
function termScore(term: string, doc: IndexedDoc): number {
  let best = 0;
  let total = 0;
  for (const field of FIELDS) {
    const score = matchQuality(term, doc.fields[field.name]) * field.weight;
    best = Math.max(best, score);
    total += score;
  }
  return best + 0.25 * (total - best);
}

/** The query's search terms (stop words removed), each with its synonyms. */
export function queryTerms(
  index: SearchIndex,
  query: string,
): { term: string; alternatives: string[] }[] {
  const all = words(query);
  const meaningful = all.filter((w) => !STOPWORDS.has(w));
  const base = (meaningful.length > 0 ? meaningful : all).map(stem);
  const result = [...new Set(base)].map((term) => ({
    term,
    alternatives: [...(index.synonyms.get(term) ?? [])],
  }));
  const phrase = all.join(" ");
  for (const p of index.phraseSynonyms) {
    if (phrase.includes(p.phrase) && p.terms[0]) {
      result.push({ term: p.terms[0], alternatives: p.terms.slice(1) });
    }
  }
  return result;
}

/** A synonym in the title scores below the query's own word in the keywords. */
const SYNONYM_FACTOR = 0.5;

/**
 * When scores are close, services come first: they are what most visitors are looking for.
 * Pages about the organisation come last.
 */
const TYPE_WEIGHT: Readonly<Record<SearchType, number>> = {
  service: 1,
  "life-event": 0.97,
  business: 0.95,
  help: 0.95,
  topic: 0.9,
  glossary: 0.85,
  department: 0.85,
  about: 0.85,
};

/** Results for `query`, best first. An empty query returns nothing. */
export function search(index: SearchIndex, query: string, limit = 60): SearchResult[] {
  const qTerms = queryTerms(index, query);
  if (qTerms.length === 0) return [];
  const phrase = words(query).join(" ");
  const results: SearchResult[] = [];
  for (const doc of index.docs) {
    let score = 0;
    let matched = 0;
    for (const { term, alternatives } of qTerms) {
      let s = termScore(term, doc);
      for (const alt of alternatives) s = Math.max(s, termScore(alt, doc) * SYNONYM_FACTOR);
      if (s > 0) matched++;
      score += s;
    }
    if (matched === 0) continue;
    const coverage = matched / qTerms.length;
    score *= 0.4 + 0.6 * coverage;
    if (qTerms.length > 1 && coverage === 1) score *= 1.25;
    if (phrase.length > 3 && words(query).length > 1) {
      if (doc.titlePhrase.includes(phrase)) score += 20;
      else if (doc.keywordPhrases.some((k) => k.includes(phrase))) score += 10;
    }
    results.push({ doc: doc.doc, score: score * TYPE_WEIGHT[doc.doc.type] });
  }
  results.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));
  // Drop weak tail matches when there are strong ones (e.g. a single body-text hit).
  const top = results[0]?.score ?? 0;
  return results.filter((r) => r.score >= top * 0.08).slice(0, limit);
}
