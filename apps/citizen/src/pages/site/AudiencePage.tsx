// Services for individuals / for businesses and investors (designs: website/pages/Individuals.html,
// Business.html). The service lists are the public catalogue filtered by applicant category
// (GET /public/services?applicantCategory=…), so nothing is listed that the backend has not
// published.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Button, Card, EmptyState, Link, Stack, TextField } from "@heartstone/ui";
import { Page } from "../../components/Page";
import { Phone } from "../../components/Phone";
import { QueryView } from "../../components/QueryView";
import { SitePage } from "../../components/SiteShell";
import { site } from "../../lib/paths";
import { useQuery } from "../../lib/query";
import { useNavigate } from "../../router/router";
import { ServiceList } from "../ServicesPage";
import { SignInCard } from "./SignInCard";

type Audience = "individuals" | "business";

const COPY = {
  individuals: {
    title: "Services for individuals and residents",
    description:
      "Certificates, IDs, work, residency, vehicles, property, tax and health, whether you live here or are moving here.",
    searchLabel: "Search services for individuals",
    searchHint: "For example: replace my ID card",
    category: "INDIVIDUAL",
    listLabel: "Services for individuals",
    accountTitle: "Already applied for something?",
    accountText: "Sign in to see your applications, documents, payments and messages in one place.",
  },
  business: {
    title: "Services for businesses and investors",
    description:
      "Start, run and grow a business. One account covers every department you deal with.",
    searchLabel: "Search business services",
    searchHint: "For example: get a trade licence",
    category: "BUSINESS",
    listLabel: "Services for businesses",
    accountTitle: "Your business account",
    accountText:
      "Sign in to see licences, filings, applications and messages for every business you represent.",
  },
} as const;

export function AudiencePage({ audience }: { audience: Audience }) {
  const copy = COPY[audience];
  const client = useApi();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const services = useQuery(`public-services:category:${copy.category}`, (signal) =>
    unwrap(
      client.GET("/public/services", {
        params: { query: { applicantCategory: copy.category, limit: 50 } },
        signal,
      }),
    ),
  );

  return (
    <SitePage>
      <Page title={copy.title} description={copy.description}>
        <form
          role="search"
          aria-label={copy.searchLabel}
          className="describe-need"
          onSubmit={(event) => {
            event.preventDefault();
            const q = text.trim();
            navigate(q ? site.servicesSearch(q) : site.services);
          }}
        >
          <TextField
            label={copy.searchLabel}
            hint={copy.searchHint}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <Button type="submit">Search</Button>
          </div>
        </form>

        <section aria-labelledby="audience-services-heading">
          <h2 id="audience-services-heading" className="section-heading">
            Services
          </h2>
          <QueryView
            query={services}
            loadingLabel="Loading services"
            errorTitle="We could not load services"
          >
            {(data) =>
              data.items.length === 0 ? (
                <EmptyState
                  title="No services are published here yet"
                  titleLevel={3}
                  description="Services appear here when a government office publishes them online."
                  action={<Link href={site.topics}>Browse by topic</Link>}
                />
              ) : (
                <ServiceList items={data.items} label={copy.listLabel} area="public" />
              )
            }
          </QueryView>
        </section>

        {audience === "business" && (
          <Card title="Acting for a business" titleLevel={2}>
            <Stack gap="3">
              <p>
                You can apply and file for a business only if the business has given you authority
                to represent it, and that authority is recorded. Being a director or employee is not
                enough on its own.
              </p>
              <p>
                Once recorded, you can choose the business you are acting for after signing in. Each
                authority shows what it covers and when it ends.
              </p>
            </Stack>
          </Card>
        )}

        <SignInCard title={copy.accountTitle}>{copy.accountText}</SignInCard>

        <Card title="Need help?" titleLevel={2}>
          <p>
            Service advisers can help by phone or in person: <Phone />.{" "}
            <Link href={site.offices}>Find an office</Link>
          </p>
        </Card>
      </Page>
    </SitePage>
  );
}
