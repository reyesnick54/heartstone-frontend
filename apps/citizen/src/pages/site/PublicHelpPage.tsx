// Public help (design: website/pages/PublicHelp.html): the help hub, help articles, common
// questions and the glossary, from the tenant's website content. Signed-in help stays at
// /dashboard/help.
import { useEffect } from "react";
import { Card, ItemList, Link, Notice, Stack } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArticleBody, LinkList, SourcesNote } from "../../components/ContentBlocks";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SiteSearchForm } from "../../components/SiteSearch";
import { SitePage } from "../../components/SiteShell";
import type { FaqEntry } from "../../content/schema";
import { site } from "../../lib/paths";
import { useLocation } from "../../router/router";
import { TENANT, WEBSITE_CONTENT } from "../../tenant";

const C = WEBSITE_CONTENT;
const HELP_TRAIL = { label: "Help", href: site.help };

/** Platform help: account, safety and the website itself. True of every tenant. */
const ACCOUNT_LINKS = [
  { label: "Get a digital ID", href: site.digitalId },
  { label: "Help with signing in", href: site.signInHelp },
  { label: "How to tell this site is official", href: site.howToTell },
  { label: "Check a document is genuine", href: site.verify },
  { label: "Report a scam", href: site.scam },
];

function TalkToSomeone() {
  return (
    <Card title="Talk to someone" titleLevel={2}>
      <Stack gap="2">
        <p>
          Service advisers can help you find the right service and complete forms. Phone: <Phone />.
          Hours: {TENANT.supportHours}.
        </p>
        <p>
          <Link href={site.contact}>All contact options</Link>
        </p>
      </Stack>
    </Card>
  );
}

function Faq({ items, openId }: { items: readonly FaqEntry[]; openId?: string }) {
  return (
    <div className="site-faq">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="site-faq-item" open={item.id === openId}>
          <summary>{item.question}</summary>
          <div className="site-faq-answer">
            {item.answer.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {item.links && <LinkList items={item.links} />}
          </div>
        </details>
      ))}
    </div>
  );
}

export function PublicHelpPage() {
  return (
    <SitePage>
      <Breadcrumbs trail={[HELP_TRAIL]} />
      <Page
        title="Help"
        description="How to apply, what happens next, what your case status means, and how to reach a person."
      >
        <SiteSearchForm
          label="Search help and services"
          className="site-inline-search"
          landmarkLabel="Search help"
        />
        <section aria-labelledby="help-guides-heading">
          <h2 id="help-guides-heading" className="section-heading">
            Applying and your case
          </h2>
          <ItemList
            label="Help guides"
            variant="grid"
            items={[
              ...C.help.articles.map((a) => ({
                id: a.slug,
                title: a.title,
                href: site.helpArticle(a.slug),
                description: a.summary,
              })),
              {
                id: "glossary",
                title: "Glossary",
                href: site.glossary,
                description: C.glossary.intro,
              },
            ]}
          />
        </section>
        <section aria-labelledby="faq-heading">
          <div className="site-section-head">
            <h2 id="faq-heading" className="section-heading">
              Common questions
            </h2>
            <Link href={site.questions}>All questions</Link>
          </div>
          <Faq items={C.help.faq.slice(0, 8)} />
        </section>
        <Card title="Your account and staying safe" titleLevel={2}>
          <LinkList items={ACCOUNT_LINKS} />
        </Card>
        <TalkToSomeone />
      </Page>
    </SitePage>
  );
}

export function HelpArticlePage({ slug }: { slug: string }) {
  const article = C.help.articles.find((a) => a.slug === slug);
  if (!article) {
    return (
      <SitePage>
        <Page title="Help page not found">
          <Notice tone="info">
            There is no help page at this address. <Link href={site.help}>Go to Help</Link>
          </Notice>
        </Page>
      </SitePage>
    );
  }
  return (
    <SitePage>
      <Breadcrumbs trail={[HELP_TRAIL, { label: article.title, href: site.helpArticle(slug) }]} />
      <Page title={article.title} description={article.summary}>
        <ArticleBody article={article} />
        <TalkToSomeone />
      </Page>
    </SitePage>
  );
}

/** The `#id` in the address, without the "#". */
function useHashId(): string | undefined {
  useLocation();
  if (typeof window === "undefined") return undefined;
  const hash = window.location.hash.slice(1);
  try {
    return hash ? decodeURIComponent(hash) : undefined;
  } catch {
    return undefined;
  }
}

/**
 * After the page has rendered (and the router has moved focus to the h1), moves focus to the
 * item named in the address, so a link from search lands on the answer.
 */
function useFocusHashTarget(id: string | undefined, selector: string) {
  useEffect(() => {
    if (!id) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);
      const focusable = target?.querySelector<HTMLElement>(selector) ?? target;
      if (!focusable) return;
      if (!focusable.hasAttribute("tabindex") && focusable.tagName !== "SUMMARY") {
        focusable.setAttribute("tabindex", "-1");
      }
      focusable.focus();
      focusable.scrollIntoView?.({ block: "start" });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [id, selector]);
}

export function QuestionsPage() {
  const openId = useHashId();
  useFocusHashTarget(openId, "summary");
  const sources = C.help.faq.flatMap((f) => f.sources);
  return (
    <SitePage>
      <Breadcrumbs trail={[HELP_TRAIL, { label: "Common questions", href: site.questions }]} />
      <Page title="Common questions" description="Answers to the questions people ask most.">
        <Faq items={C.help.faq} {...(openId ? { openId } : {})} />
        <TalkToSomeone />
        <SourcesNote sources={sources} />
      </Page>
    </SitePage>
  );
}

export function GlossaryPage() {
  const target = useHashId();
  useFocusHashTarget(target, "dt");
  const entries = [...C.glossary.entries].sort((a, b) => a.term.localeCompare(b.term));
  const sources = [
    ...C.glossary.entries.flatMap((g) => g.sources),
    ...C.glossary.distinctions.flatMap((d) => d.sources),
  ];
  return (
    <SitePage>
      <Breadcrumbs trail={[HELP_TRAIL, { label: "Glossary", href: site.glossary }]} />
      <Page title="Glossary" description={C.glossary.intro}>
        <Card title="Important differences" titleLevel={2}>
          <dl className="site-definitions">
            {C.glossary.distinctions.map((d) => (
              <div key={d.id} id={d.id}>
                <dt>{d.statement}</dt>
                <dd>{d.explanation}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card title="Terms" titleLevel={2}>
          <dl className="site-definitions">
            {entries.map((g) => (
              <div
                key={g.id}
                id={g.id}
                className={g.id === target ? "site-definition-target" : undefined}
              >
                <dt>{g.term}</dt>
                <dd>{g.meaning}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <SourcesNote sources={sources} />
      </Page>
    </SitePage>
  );
}
