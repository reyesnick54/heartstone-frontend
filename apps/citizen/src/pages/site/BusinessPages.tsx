// Business and investors (design: website/pages/Business.html), and the investor guidance pages
// at /business/:slug. Content comes from the tenant's website content.
import { Card, ItemList, Link, Notice, Stack } from "@heartstone/ui";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ArticleBody } from "../../components/ContentBlocks";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SiteSearchForm } from "../../components/SiteSearch";
import { SitePage } from "../../components/SiteShell";
import { site } from "../../lib/paths";
import { WEBSITE_CONTENT } from "../../tenant";
import { LifeEventItems } from "./LifeEventsPages";
import { ServiceItems } from "./ServicesSitePages";
import { SignInCard } from "./SignInCard";

const C = WEBSITE_CONTENT;
const CATEGORY_NAME = new Map(C.categories.map((c) => [c.code, c.name]));

export function BusinessPage() {
  const forInvestors = C.services.filter((s) => s.audiences.includes("investors"));
  const forBusiness = C.services.filter(
    (s) => s.audiences.includes("business") && !s.audiences.includes("investors"),
  );
  const events = C.lifeEvents.filter((e) =>
    e.steps.some((step) =>
      step.serviceSlugs.some((slug) =>
        C.services.find((s) => s.slug === slug)?.audiences.some((a) => a !== "individuals"),
      ),
    ),
  );
  return (
    <SitePage>
      <Breadcrumbs trail={[{ label: "Business & investors", href: site.business }]} />
      <Page title="Business and investors" description={C.business.intro}>
        <SiteSearchForm
          label="Search business and investor services"
          hint={C.home.searchHint}
          className="site-inline-search"
          landmarkLabel="Search business services"
        />

        <section aria-labelledby="investor-guides-heading">
          <h2 id="investor-guides-heading" className="section-heading">
            Investing in the zone
          </h2>
          <ItemList
            label="Investor guides"
            variant="grid"
            items={C.business.articles.map((a) => ({
              id: a.slug,
              title: a.title,
              href: site.businessArticle(a.slug),
              description: a.summary,
            }))}
          />
        </section>

        <section aria-labelledby="sectors-heading">
          <h2 id="sectors-heading" className="section-heading">
            Sectors
          </h2>
          <ItemList
            label="Sectors"
            items={C.business.sectors.map((s) => ({
              id: s.id,
              title: s.name,
              href: site.topic(s.categoryCode),
              description: s.caveat ? `${s.summary} ${s.caveat}` : s.summary,
              meta: CATEGORY_NAME.get(s.categoryCode),
            }))}
          />
        </section>

        <section aria-labelledby="investor-services-heading">
          <h2 id="investor-services-heading" className="section-heading">
            Services for investors
          </h2>
          <ServiceItems services={forInvestors} label="Services for investors" />
        </section>

        <section aria-labelledby="business-services-heading">
          <h2 id="business-services-heading" className="section-heading">
            Running a business
          </h2>
          <ServiceItems services={forBusiness} label="Services for businesses" />
        </section>

        <section aria-labelledby="business-events-heading">
          <h2 id="business-events-heading" className="section-heading">
            Step-by-step guides
          </h2>
          <LifeEventItems events={events} label="Guides for businesses" />
        </section>

        <Card title="Acting for a business" titleLevel={2}>
          <Stack gap="3">
            <p>
              You can apply and file for a business online only if the business has given you
              authority to represent it, and that authority is recorded. Being a director or
              employee is not enough on its own.
            </p>
            <p>
              Once recorded, you can choose the business you are acting for after signing in. Each
              authority shows what it covers and when it ends.
            </p>
          </Stack>
        </Card>

        <SignInCard title="Your business account">
          Sign in to see licences, filings, applications and messages for every business you
          represent.
        </SignInCard>

        <Card title="Need help?" titleLevel={2}>
          <p>
            Service advisers can help by phone: <Phone />.{" "}
            <Link href={site.contact}>Contact {C.organisation.shortName}</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}

export function BusinessArticlePage({ slug }: { slug: string }) {
  const article = C.business.articles.find((a) => a.slug === slug);
  if (!article) {
    return (
      <SitePage>
        <Page title="Page not found">
          <Notice tone="info">
            There is nothing at this address.{" "}
            <Link href={site.business}>Business and investors</Link>
          </Notice>
        </Page>
      </SitePage>
    );
  }
  return (
    <SitePage>
      <Breadcrumbs
        trail={[
          { label: "Business & investors", href: site.business },
          { label: article.title, href: site.businessArticle(article.slug) },
        ]}
      />
      <Page title={article.title} description={article.summary}>
        <ArticleBody article={article} />
      </Page>
    </SitePage>
  );
}
