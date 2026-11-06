// Find a service (designs: Services.html, website PublicServices.html). Signed in (`account`):
// GET /experience/citizen/services and POST /experience/citizen/services/match. On the public
// website (`public`): GET /public/services and POST /public/services/match. Matching is
// rule-based, no AI. Both show only what the backend returns, with honest empty states.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  EmptyState,
  ItemList,
  Select,
  StatusBadge,
  TextField,
} from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { ServiceSummary } from "../lib/api-types";
import { formatDate } from "../lib/format";
import { paths, site } from "../lib/paths";
import { useQuery } from "../lib/query";
import { availabilityText } from "../lib/services";
import { useNavigate, useSearchParams } from "../router/router";

const PAGE_SIZE = 20;

export type ServicesArea = "public" | "account";

/** Where a service's page is, for the area the visitor is in. */
export function serviceHref(area: ServicesArea, slug: string): string {
  return area === "public" ? site.service(slug) : paths.service(slug);
}

export function ServiceList({
  items,
  label,
  area,
}: {
  items: readonly ServiceSummary[];
  label: string;
  area: ServicesArea;
}) {
  return (
    <ItemList
      label={label}
      items={items.map((s) => {
        const availability = availabilityText(s);
        return {
          id: s.serviceId,
          title: s.publicName,
          href: serviceHref(area, s.slug),
          description: s.plainLanguagePurpose,
          meta: [
            s.responsibleDepartmentDisplayName,
            s.serviceFamilyName,
            s.informationLastVerifiedAt
              ? `Information checked ${formatDate(s.informationLastVerifiedAt)}`
              : undefined,
          ]
            .filter(Boolean)
            .join(" · "),
          status: (
            <StatusBadge
              status={s.availabilityStatus}
              label={availability.label}
              tone={availability.tone}
            />
          ),
        };
      })}
    />
  );
}

export function ServicesPage({ area }: { area: ServicesArea }) {
  const client = useApi();
  const navigate = useNavigate();
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const family = params.get("family") ?? "";
  const page = Math.max(1, Number(params.get("page") ?? "1") || 1);
  const [text, setText] = useState(q);

  const families = useQuery("service-families", (signal) =>
    unwrap(client.GET("/public/service-families", { signal })),
  );
  const matches = useQuery(q ? `match:${area}:${q}` : null, (signal) =>
    area === "public"
      ? unwrap(client.POST("/public/services/match", { body: { query: q }, signal }))
      : unwrap(client.POST("/experience/citizen/services/match", { body: { query: q }, signal })),
  );
  const list = useQuery(q ? null : `services:${area}:${family}:${page}`, (signal) => {
    const query = { page, limit: PAGE_SIZE, ...(family ? { family } : {}) };
    return area === "public"
      ? unwrap(client.GET("/public/services", { params: { query }, signal }))
      : unwrap(client.GET("/experience/citizen/services", { params: { query }, signal }));
  });
  const base = area === "public" ? site.services : paths.services;

  function go(next: { q?: string; family?: string; page?: number }) {
    const search = new URLSearchParams();
    if (next.q) search.set("q", next.q);
    if (next.family) search.set("family", next.family);
    if (next.page && next.page > 1) search.set("page", String(next.page));
    const query = search.toString();
    navigate(`${base}${query ? `?${query}` : ""}`);
  }

  return (
    <Page
      title="Find a service"
      description="Tell us what you need to do. You don't need to know which office handles it."
    >
      <Card title="Search" titleLevel={2}>
        <form
          role="search"
          aria-label="Services"
          className="stack-form"
          onSubmit={(event) => {
            event.preventDefault();
            go({ q: text.trim() });
          }}
        >
          <TextField
            label="What do you need to do?"
            hint='Describe it in your own words. For example: "open a shop", "renew my licence".'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Cluster gap="3">
            <Button type="submit">Find services</Button>
            {q && (
              <Button
                variant="quiet"
                onClick={() => {
                  setText("");
                  go({});
                }}
              >
                Clear search
              </Button>
            )}
          </Cluster>
        </form>
        {!q && families.status === "success" && families.data.length > 0 && (
          <div className="filter-row">
            <Select
              label="Category"
              value={family}
              placeholder="All categories"
              options={families.data.map((f) => ({ value: f.code, label: f.name }))}
              onChange={(e) => go({ family: e.target.value })}
            />
          </div>
        )}
      </Card>

      {q ? (
        <section aria-labelledby="results-heading">
          <QueryView
            query={matches}
            loadingLabel="Finding services"
            errorTitle="We could not search services"
          >
            {(items) => (
              <>
                <h2 id="results-heading" className="section-heading" aria-live="polite">
                  {items.length === 1 ? "1 service matches" : `${items.length} services match`} “{q}
                  ”
                </h2>
                {items.length === 0 ? (
                  <EmptyState
                    title="No services match"
                    titleLevel={3}
                    description="Try describing it differently, or browse all services."
                    action={
                      <Button variant="secondary" onClick={() => go({})}>
                        Browse all services
                      </Button>
                    }
                  />
                ) : (
                  <ServiceList items={items} label="Matching services" area={area} />
                )}
              </>
            )}
          </QueryView>
        </section>
      ) : (
        <section aria-labelledby="results-heading">
          <QueryView
            query={list}
            loadingLabel="Loading services"
            errorTitle="We could not load services"
          >
            {(data) => (
              <>
                <h2 id="results-heading" className="section-heading">
                  {data.total === 1 ? "1 service" : `${data.total} services`}
                </h2>
                {data.items.length === 0 ? (
                  <EmptyState
                    title="No services published yet"
                    titleLevel={3}
                    description="Services appear here when an office publishes them."
                  />
                ) : (
                  <ServiceList items={data.items} label="Services" area={area} />
                )}
                {data.totalPages > 1 && (
                  <nav aria-label="Pages of services" className="pager">
                    <Cluster gap="3" align="center">
                      {page > 1 && (
                        <Button variant="secondary" onClick={() => go({ family, page: page - 1 })}>
                          Previous page
                        </Button>
                      )}
                      <span>
                        Page {data.page} of {data.totalPages}
                      </span>
                      {page < data.totalPages && (
                        <Button variant="secondary" onClick={() => go({ family, page: page + 1 })}>
                          Next page
                        </Button>
                      )}
                    </Cluster>
                  </nav>
                )}
              </>
            )}
          </QueryView>
        </section>
      )}
      <Disclaimer>
        Service information is guidance. Requirements are confirmed when you apply, and decisions
        are made by the responsible office.
      </Disclaimer>
    </Page>
  );
}
