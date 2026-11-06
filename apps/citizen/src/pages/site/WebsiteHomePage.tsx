// Public website home (design: website/pages/WebsiteHome.html). Everything on it comes from the
// tenant's website content, so it renders in full with no backend: what the organisation is, the
// one-stop path, popular services, life events and the business teaser. The search box searches
// the website (/search).
import { loginUrl, registerUrl } from "@heartstone/api-client";
import { Link } from "@heartstone/ui";
import { useDocumentTitle } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { SiteSearchForm } from "../../components/SiteSearch";
import { paths, site } from "../../lib/paths";
import type { Audience } from "../../content/schema";
import { WEBSITE_CONTENT, workstationUrl } from "../../tenant";
import { LifeEventItems } from "./LifeEventsPages";
import { CategoryTiles, ServiceItems, findService } from "./ServicesSitePages";

const C = WEBSITE_CONTENT;

function AccountPanel() {
  const workstation = workstationUrl();
  return (
    <section className="site-account-panel" aria-labelledby="account-panel-heading">
      <h2 id="account-panel-heading" className="site-h3">
        Your government account
      </h2>
      <p>
        See your applications, documents, payments and messages, for yourself or a business you
        represent.
      </p>
      <a href={loginUrl({ returnTo: paths.home })} className="site-button site-button-block">
        Sign in with your digital ID
      </a>
      <a
        href={registerUrl({ returnTo: paths.home })}
        className="site-button site-button-secondary site-button-block"
      >
        Get a digital ID
      </a>
      <ul className="site-plain-list">
        <li>
          <Link href={site.verify}>Check a government document is genuine</Link>
        </li>
        <li>
          <Link href={workstation ?? site.officials}>
            Government official? Sign in to your workstation
          </Link>
        </li>
      </ul>
    </section>
  );
}

/** The names of the service areas that have services for `audience`, for a door's summary. */
function areasFor(audience: Audience): string {
  const codes = new Set(
    C.services.filter((s) => s.audiences.includes(audience)).map((s) => s.categoryCode),
  );
  return C.categories
    .filter((c) => codes.has(c.code))
    .slice(0, 5)
    .map((c) => c.name)
    .join(" · ");
}

const DOORS = [
  {
    href: site.individuals,
    title: "Individuals and families",
    text: areasFor("individuals"),
    more: "Services for you",
  },
  {
    href: site.business,
    title: "Businesses and investors",
    text: areasFor("business"),
    more: "Business and investors",
  },
  {
    href: site.help,
    title: "Help with applying",
    text: "How to apply, what happens next and what your case status means.",
    more: "Get help",
  },
];

export function WebsiteHomePage() {
  useDocumentTitle(C.home.heroTitle.replace(/\.$/, ""));
  const popular = C.home.popularServiceSlugs.map(findService).filter((s) => s !== undefined);
  const events = C.home.featuredLifeEventSlugs
    .map((slug) => C.lifeEvents.find((e) => e.slug === slug))
    .filter((e) => e !== undefined);

  return (
    <>
      <section className="site-hero">
        <div className="site-wrap site-hero-inner">
          <div className="site-hero-main">
            <h1 className="site-h1">{C.home.heroTitle}</h1>
            <p className="site-hero-lead">{C.home.heroLead}</p>
            <SiteSearchForm
              label="What do you need to do?"
              hint={C.home.searchHint}
              className="site-hero-search"
              landmarkLabel="Find a service"
            />
            <nav aria-label="Common searches">
              <ul className="site-chips">
                {C.home.quickSearches.map((s) => (
                  <li key={s.q}>
                    <a href={site.search(s.q)} className="site-chip">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <AccountPanel />
        </div>
      </section>

      <div className="site-wrap">
        <section className="site-section" aria-labelledby="what-heading">
          <h2 id="what-heading" className="site-h2">
            What {C.organisation.shortName} is
          </h2>
          <div className="site-prose">
            {C.organisation.whatItIs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href={site.about}>About {C.organisation.shortName}</Link>
        </section>

        <section className="site-section" aria-labelledby="path-heading">
          <h2 id="path-heading" className="site-h2">
            One application, one path
          </h2>
          <ol
            className="site-path"
            aria-label="How your application moves through the One-Stop Service"
          >
            {C.home.onePath.map((step, i) => (
              <li key={step.title} className="site-path-step">
                <span className="site-path-number" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="site-h3">{step.title}</h3>
                {step.target && <p className="site-path-target">{step.target}</p>}
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
          <Link href={site.help}>Help with applying</Link>
        </section>

        <section className="site-section" aria-labelledby="doors-heading">
          <h2 id="doors-heading" className="site-h2">
            Who are you here as?
          </h2>
          <ul className="site-doors">
            {DOORS.map((door) => (
              <li key={door.href}>
                <a href={door.href} className="site-door">
                  <span className="site-door-title">{door.title}</span>
                  <span className="site-door-points">{door.text}</span>
                  <span className="site-door-more">{door.more} →</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-section" aria-labelledby="popular-heading">
          <div className="site-section-head">
            <h2 id="popular-heading" className="site-h2">
              Popular services
            </h2>
            <Link href={site.services}>All services</Link>
          </div>
          <ServiceItems services={popular} label="Popular services" />
        </section>

        <section className="site-section" aria-labelledby="life-heading">
          <div className="site-section-head">
            <h2 id="life-heading" className="site-h2">
              Something happening in your life?
            </h2>
            <Link href={site.lifeEvents}>All life events</Link>
          </div>
          <LifeEventItems events={events} label="Life events" />
        </section>

        <section className="site-section" aria-labelledby="business-heading">
          <div className="site-teaser">
            <h2 id="business-heading" className="site-h2">
              {C.home.businessTeaser.title}
            </h2>
            <p className="site-lead">{C.home.businessTeaser.text}</p>
            <ul className="site-plain-list">
              <li>
                <Link href={site.business}>Business and investors</Link>
              </li>
              {C.business.articles.slice(0, 3).map((a) => (
                <li key={a.slug}>
                  <Link href={site.businessArticle(a.slug)}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="site-section" aria-labelledby="areas-heading">
          <div className="site-section-head">
            <h2 id="areas-heading" className="site-h2">
              Browse by area
            </h2>
            <Link href={site.topics}>All service areas</Link>
          </div>
          <CategoryTiles categories={C.categories} />
        </section>

        <section className="site-section" aria-labelledby="help-heading">
          <h2 id="help-heading" className="site-h2">
            Need help?
          </h2>
          <ul className="site-cards">
            <li className="site-card">
              <h3 className="site-h3">Talk to someone</h3>
              <p>Service advisers can help you find a service or complete a form.</p>
              <Phone />
            </li>
            <li className="site-card">
              <h3 className="site-h3">Common questions</h3>
              <p>How long things take, what happens if something is missing, and more.</p>
              <Link href={site.questions}>Read the answers</Link>
            </li>
            <li className="site-card">
              <h3 className="site-h3">Beware of scams</h3>
              <p>
                Government will never ask for your password, sign-in code or card details by phone,
                text or email.
              </p>
              <Link href={site.scam}>Report a scam</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
