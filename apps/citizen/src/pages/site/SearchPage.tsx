// Website search results at /search?q=…: the tenant's website content, searched in the browser
// (lib/search.ts) and grouped by kind of page.
import { useMemo } from "react";
import { Card, ItemList, Link } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Page } from "../../components/Page";
import { SiteSearchForm } from "../../components/SiteSearch";
import { SitePage } from "../../components/SiteShell";
import { contentIndex } from "../../content/search-docs";
import { site } from "../../lib/paths";
import { search, type SearchResult, type SearchType } from "../../lib/search";
import { useSearchParams } from "../../router/router";
import { WEBSITE_CONTENT } from "../../tenant";

const GROUPS: readonly { type: SearchType; heading: string }[] = [
  { type: "service", heading: "Services" },
  { type: "life-event", heading: "Life events" },
  { type: "business", heading: "Business and investors" },
  { type: "help", heading: "Help" },
  { type: "topic", heading: "Service areas" },
  { type: "department", heading: "Departments" },
  { type: "glossary", heading: "Glossary" },
  { type: "about", heading: `About ${WEBSITE_CONTENT.organisation.shortName}` },
];

function count(n: number, one: string, many: string) {
  return `${n} ${n === 1 ? one : many}`;
}

export function SearchPage() {
  const params = useSearchParams();
  const q = (params.get("q") ?? "").trim();
  const results = useMemo(() => (q ? search(contentIndex(WEBSITE_CONTENT), q) : []), [q]);
  const grouped = GROUPS.map((g) => ({
    ...g,
    items: results.filter((r) => r.doc.type === g.type),
  })).filter((g) => g.items.length > 0);

  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "Search", href: site.search() }]} />
      <Page title={q ? `Search results for “${q}”` : "Search"}>
        {/* key: a new query (from the header) resets the field to it. */}
        <SiteSearchForm
          key={q}
          label="Search this website"
          hint={WEBSITE_CONTENT.home.searchHint}
          initial={q}
          className="site-inline-search"
          landmarkLabel="Search again"
        />
        {q && (
          <p className="site-results-count" role="status">
            {results.length === 0 ? "No results" : count(results.length, "result", "results")}
          </p>
        )}
        {q && results.length > 0 && (
          <nav aria-label="Result types" className="site-result-types">
            <ul>
              {grouped.map((g) => (
                <li key={g.type}>
                  <a href={`#results-${g.type}`}>
                    {g.heading} ({g.items.length})
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {grouped.map((g) => (
          <section
            key={g.type}
            id={`results-${g.type}`}
            aria-labelledby={`results-${g.type}-heading`}
          >
            <h2 id={`results-${g.type}-heading`} className="section-heading">
              {g.heading}
            </h2>
            <ResultList label={g.heading} items={g.items} />
          </section>
        ))}
        {q && results.length === 0 && (
          <Card title="Nothing matched your search" titleLevel={2}>
            <ul className="bullets">
              <li>Check the spelling, or try fewer or different words</li>
              <li>
                Browse <Link href={site.services}>all services</Link> or{" "}
                <Link href={site.lifeEvents}>life events</Link>
              </li>
              <li>
                <Link href={site.contact}>Contact {WEBSITE_CONTENT.organisation.shortName}</Link>{" "}
                and describe what you need
              </li>
            </ul>
          </Card>
        )}
        {!q && (
          <Card title="Popular searches" titleLevel={2}>
            <ul className="site-plain-list">
              {WEBSITE_CONTENT.home.quickSearches.map((s) => (
                <li key={s.q}>
                  <Link href={site.search(s.q)}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </Page>
    </SitePage>
  );
}

function ResultList({ label, items }: { label: string; items: readonly SearchResult[] }) {
  return (
    <ItemList
      label={label}
      items={items.map(({ doc }) => ({
        id: doc.id,
        title: doc.title,
        href: doc.href,
        description: doc.summary,
      }))}
    />
  );
}
