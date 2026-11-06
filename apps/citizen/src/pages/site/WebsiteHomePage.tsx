// Public website home (design: website/pages/WebsiteHome.html). Popular services and topics come
// from the backend's public catalogue (GET /public/services, GET /public/service-families); when
// it is empty the page says so rather than showing example services.
import { useState } from "react";
import { loginUrl, registerUrl, unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Button, EmptyState, ItemList, Link, Loading, TextField } from "@heartstone/ui";
import { useDocumentTitle } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { paths, site } from "../../lib/paths";
import { useQuery } from "../../lib/query";
import { useNavigate } from "../../router/router";
import { TENANT, workstationUrl, type QuickLink } from "../../tenant";
import { ServiceList } from "../ServicesPage";

/** How many published services the home page lists (the catalogue's first page, not a ranking). */
const POPULAR_LIMIT = 8;

function quickLinkHref(link: QuickLink): string {
  return "href" in link ? link.href : site.servicesSearch(link.search);
}

function HeroSearch() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  return (
    <form
      role="search"
      aria-label="Find a service"
      className="site-hero-search"
      onSubmit={(event) => {
        event.preventDefault();
        const q = text.trim();
        navigate(q ? site.servicesSearch(q) : site.services);
      }}
    >
      <TextField
        label="What do you need to do?"
        hint="For example: renew my driving licence"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

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

const DOORS = [
  {
    href: site.individuals,
    title: "Individuals and residents",
    points: [
      "IDs, certificates and civil records",
      "Work, residency and immigration",
      "Vehicles, property, tax and health",
    ],
    more: "Services for you",
  },
  {
    href: site.business,
    title: "Businesses and investors",
    points: [
      "Register and run a company",
      "Licences, permits and inspections",
      "Hiring, customs, land and investment",
    ],
    more: "Services for business",
  },
  {
    href: site.officials,
    title: "Government officials",
    points: [
      "Your work queue and cases",
      "Reviews, inspections and decisions",
      "Authorised staff only",
    ],
    more: "Sign in to your workstation",
  },
];

function PopularServices() {
  const client = useApi();
  const services = useQuery("public-services:popular", (signal) =>
    unwrap(client.GET("/public/services", { params: { query: { limit: POPULAR_LIMIT } }, signal })),
  );
  if (services.status === "loading") return <Loading label="Loading services" />;
  if (services.status === "error") {
    return (
      <p className="muted">
        We could not load services just now. <Link href={site.services}>Find a service</Link>
      </p>
    );
  }
  if (services.data.items.length === 0) {
    return (
      <EmptyState
        title="No services are published yet"
        titleLevel={3}
        description="Services appear here when a government office publishes them online."
      />
    );
  }
  return <ServiceList items={services.data.items} label="Services" area="public" />;
}

function Topics() {
  const client = useApi();
  const families = useQuery("service-families", (signal) =>
    unwrap(client.GET("/public/service-families", { signal })),
  );
  if (families.status === "loading") return <Loading label="Loading topics" />;
  if (families.status === "error") {
    return <p className="muted">We could not load topics just now.</p>;
  }
  if (families.data.length === 0) {
    return (
      <EmptyState
        title="No topics yet"
        titleLevel={3}
        description="Topics appear here when services are published."
      />
    );
  }
  return (
    <ItemList
      label="Topics"
      variant="grid"
      items={families.data.map((f) => ({
        id: f.id,
        title: f.name,
        href: site.topic(f.code),
        ...(f.description ? { description: f.description } : {}),
      }))}
    />
  );
}

export function WebsiteHomePage() {
  useDocumentTitle("Government services, in one place");
  return (
    <>
      <section className="site-hero">
        <div className="site-wrap site-hero-inner">
          <div className="site-hero-main">
            <h1 className="site-h1">Government services, in one place.</h1>
            <p className="site-hero-lead">
              Tell us what you need. You don&rsquo;t need to know which department handles it.
            </p>
            <HeroSearch />
            <nav aria-label="Common searches">
              <ul className="site-chips">
                {TENANT.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={quickLinkHref(link)} className="site-chip">
                      {link.label}
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
        <section className="site-section" aria-labelledby="doors-heading">
          <h2 id="doors-heading" className="site-h2">
            Who are you here as?
          </h2>
          <ul className="site-doors">
            {DOORS.map((door) => (
              <li key={door.href}>
                <a href={door.href} className="site-door">
                  <span className="site-door-title">{door.title}</span>
                  <span className="site-door-points">
                    {door.points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </span>
                  <span className="site-door-more">{door.more} →</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-section" aria-labelledby="popular-heading">
          <div className="site-section-head">
            <h2 id="popular-heading" className="site-h2">
              Services
            </h2>
            <Link href={site.services}>All services</Link>
          </div>
          <PopularServices />
        </section>

        <section className="site-section" aria-labelledby="life-heading">
          <h2 id="life-heading" className="site-h2">
            Something happening in your life?
          </h2>
          <p className="site-lead">
            Step-by-step guides that bring together everything you need to do, across every office,
            are being prepared. <Link href={site.lifeEvents}>About life event guides</Link>
          </p>
        </section>

        <section className="site-section" aria-labelledby="topics-heading">
          <div className="site-section-head">
            <h2 id="topics-heading" className="site-h2">
              Browse by topic
            </h2>
            <Link href={site.topics}>All topics</Link>
          </div>
          <Topics />
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
              <h3 className="site-h3">Visit an office</h3>
              <p>Find a government service centre, with opening hours and what to bring.</p>
              <Link href={site.offices}>Find an office</Link>
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
