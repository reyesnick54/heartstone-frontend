// The tenant's website content is valid: every service has a department, a summary and sources;
// every reference resolves; nothing states a fee or a phone number.
import { WEBSITE_CONTENT } from "../tenant";
import { ABSEZ_CONTENT } from "./absez";
import type { WebsiteContent } from "./schema";
import { validateContent } from "./validate";

describe("ABSEZ website content", () => {
  it("is the content the tenant configures", () => {
    expect(WEBSITE_CONTENT).toBe(ABSEZ_CONTENT);
  });

  it("passes validation", () => {
    expect(validateContent(ABSEZ_CONTENT)).toEqual([]);
  });

  it("gives every service a department, a summary, a category and sources", () => {
    const departments = new Set(ABSEZ_CONTENT.departments.map((d) => d.slug));
    const categories = new Set(ABSEZ_CONTENT.categories.map((c) => c.code));
    for (const service of ABSEZ_CONTENT.services) {
      expect(departments.has(service.departmentSlug), service.slug).toBe(true);
      expect(categories.has(service.categoryCode), service.slug).toBe(true);
      expect(service.summary.length, service.slug).toBeGreaterThan(10);
      expect(service.sources.length, service.slug).toBeGreaterThan(0);
    }
  });

  it("covers every lettered application category of Appendix D (A–P)", () => {
    const refs = ABSEZ_CONTENT.categories.map((c) => c.reference).filter(Boolean);
    expect(refs).toEqual("ABCDEFGHIJKLMNOP".split("").map((l) => `Category ${l}`));
  });

  it("states the documented service standards, and no others", () => {
    const targets = new Set(ABSEZ_CONTENT.help.serviceStandards.map((s) => s.target));
    expect([...targets].sort()).toEqual(
      [
        "Within 10 business days",
        "Within 24 hours",
        "Within 24 hours after review",
        "Within 5 business days",
        "Within 72 hours of receipt",
      ].sort(),
    );
  });

  it("lists the case statuses of Article 47", () => {
    expect(ABSEZ_CONTENT.help.caseStatuses.map((s) => s.label)).toEqual([
      "Submitted",
      "Under review",
      "Additional information required",
      "Under review by a government authority",
      "Awaiting inspection",
      "Under compliance review",
      "Approved",
      "Conditionally approved",
      "Rejected",
      "Closed – completed",
      "Closed – withdrawn",
      "Closed – rejected",
    ]);
  });
});

describe("validateContent", () => {
  const [first, ...rest] = ABSEZ_CONTENT.services;
  if (!first) throw new Error("ABSEZ content has no services");
  const broken: WebsiteContent = {
    ...ABSEZ_CONTENT,
    services: [
      {
        ...first,
        departmentSlug: "nope",
        summary: " ",
        sources: [],
        relatedServices: ["missing-service"],
        documents: { note: "Bring the fee of XCD 100 and call +1 268 555 0100." },
      },
      ...rest,
    ],
  };

  it("reports missing departments, summaries, sources and references", () => {
    const problems = validateContent(broken).join("\n");
    expect(problems).toMatch(/unknown department nope/);
    expect(problems).toMatch(/has no summary/);
    expect(problems).toMatch(/has no sources/);
    expect(problems).toMatch(/unknown service missing-service/);
  });

  it("refuses fees and phone numbers in content", () => {
    const problems = validateContent(broken).join("\n");
    expect(problems).toMatch(/states a money amount/);
    expect(problems).toMatch(/states a phone number/);
  });

  it("checks internal links when given the site's pages", () => {
    expect(validateContent(ABSEZ_CONTENT, () => false).join("\n")).toMatch(
      /links to a missing page: \/services\/investor-enquiry/,
    );
  });
});
