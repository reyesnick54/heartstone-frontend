import { ABSEZ_CONTENT } from "../content/absez";
import { contentIndex } from "../content/search-docs";
import { createIndex, search, stem, type SearchDoc } from "./search";

const doc = (id: string, fields: Partial<SearchDoc>): SearchDoc => ({
  id,
  type: "service",
  title: id,
  href: `/x/${id}`,
  summary: "",
  keywords: [],
  body: "",
  ...fields,
});

const ids = (results: { doc: SearchDoc }[]) => results.map((r) => r.doc.id);

describe("search ranking", () => {
  const index = createIndex([
    doc("in-body", { title: "Alpha", body: "Mentions harbour somewhere in the body." }),
    doc("in-summary", { title: "Bravo", summary: "About the harbour." }),
    doc("in-keywords", { title: "Charlie", keywords: ["harbour"] }),
    doc("in-title", { title: "Harbour services" }),
    doc("unrelated", { title: "Delta", body: "Nothing to see." }),
  ]);

  it("ranks title over keywords over summary over body", () => {
    expect(ids(search(index, "harbour"))).toEqual([
      "in-title",
      "in-keywords",
      "in-summary",
      "in-body",
    ]);
  });

  it("returns nothing for an empty query or no match", () => {
    expect(search(index, "   ")).toEqual([]);
    expect(search(index, "zebra")).toEqual([]);
  });

  it("matches word prefixes and a single typo", () => {
    expect(ids(search(index, "harb"))[0]).toBe("in-title");
    expect(ids(search(index, "harbuor"))[0]).toBe("in-title");
  });

  it("ignores case, punctuation and stop words", () => {
    expect(ids(search(index, "What are the HARBOUR services?"))[0]).toBe("in-title");
  });

  it("prefers results that match every word, and the whole phrase in the title", () => {
    const i = createIndex([
      doc("one-word", { title: "Permit for boats" }),
      doc("both-words", { title: "Work permit" }),
      doc("both-spread", { title: "Permit", summary: "For work in the zone" }),
    ]);
    expect(ids(search(i, "work permit"))).toEqual(["both-words", "both-spread", "one-word"]);
  });
});

describe("search synonyms and spelling", () => {
  it("treats licence and license as the same word", () => {
    expect(stem("license")).toBe(stem("licence"));
    expect(stem("licences")).toBe(stem("licence"));
    const i = createIndex([doc("licence", { title: "Apply for a licence" })]);
    expect(ids(search(i, "license"))).toEqual(["licence"]);
    expect(ids(search(i, "licensing"))).toEqual(["licence"]);
  });

  it("finds immigration and residency when searching for a visa", () => {
    const i = createIndex([
      doc("immigration", { title: "Immigration applications" }),
      doc("residency", { title: "Apply for residency" }),
      doc("boats", { title: "Boats" }),
    ]);
    expect(ids(search(i, "visa")).sort()).toEqual(["immigration", "residency"]);
  });

  it("ranks a direct match above a synonym match", () => {
    const i = createIndex([
      doc("synonym", { title: "Register a company" }),
      doc("direct", { title: "Start a business" }),
    ]);
    expect(ids(search(i, "business"))).toEqual(["direct", "synonym"]);
  });

  it("uses tenant synonym groups, including multi-word phrases", () => {
    const i = createIndex(
      [doc("absez", { title: "About ABSEZ" })],
      [["absez", "special economic zone"]],
    );
    expect(ids(search(i, "special economic zone"))).toEqual(["absez"]);
  });
});

describe("search over the ABSEZ website", () => {
  const index = contentIndex(ABSEZ_CONTENT);
  const top = (q: string) => search(index, q)[0]?.doc.href;

  it.each([
    ["work permit", "/services/work-permit"],
    ["register a company", "/services/register-a-company"],
    ["incorporate", "/services/register-a-company"],
    ["visa", "/services/immigration-application"],
    ["building permit", "/services/development-approval"],
    ["construction", "/services/development-approval"],
    ["business license", "/services/business-licence"],
    ["case manager", "/business/case-managers"],
    ["what does under review mean", "/help/case-statuses"],
    ["appeal", "/help/reconsideration"],
    ["readiness level", "/business/project-readiness"],
    ["strategic project", "/services/strategic-project"],
    ["buy property", "/life-events/buying-or-leasing-property"],
    ["customs clearance", "/services/customs-clearance"],
    ["permt", "/services/work-permit"],
  ])("%s → %s", (q, href) => {
    expect(
      search(index, q)
        .slice(0, 3)
        .map((r) => r.doc.href),
    ).toContain(href);
  });

  it("finds glossary terms and FAQ answers", () => {
    expect(top("deficiency notice")).toBeDefined();
    expect(search(index, "deficiency notice").map((r) => r.doc.href)).toContain(
      "/glossary#deficiency-notice",
    );
    expect(search(index, "how much does it cost").map((r) => r.doc.href)).toContain(
      "/help/questions#fees",
    );
  });

  it("returns every kind of result for a broad word", () => {
    const types = new Set(search(index, "investor").map((r) => r.doc.type));
    for (const t of ["service", "business", "department"]) expect(types).toContain(t);
  });
});
