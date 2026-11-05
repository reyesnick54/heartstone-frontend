// Citizen home (design: Main.html). GET /experience/citizen/home for counts, recent activity
// and suggestions; GET /experience/citizen/actions for "Things to do".
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import {
  Button,
  Card,
  Cluster,
  EmptyState,
  ItemList,
  Link,
  StatGrid,
  StatTile,
  Stack,
  StatusBadge,
  TextField,
} from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { routeHref } from "../components/RouteLink";
import { formatDate, labelText } from "../lib/format";
import { useMe } from "../lib/me";
import { MY_GOVERNMENT } from "../lib/nav";
import { deepLinkPath, paths } from "../lib/paths";
import { useQuery } from "../lib/query";
import { useNavigate } from "../router/router";

function greeting(name: string): string {
  const hour = new Date().getHours();
  const part = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return `${part}, ${name}`;
}

function DescribeNeed() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  return (
    <form
      role="search"
      aria-label="Find a service"
      className="describe-need"
      onSubmit={(event) => {
        event.preventDefault();
        const q = text.trim();
        navigate(q ? `${paths.services}?q=${encodeURIComponent(q)}` : paths.services);
      }}
    >
      <TextField
        label="Describe what you need"
        hint='For example: "open a shop", "renew my licence", "register a birth".'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Cluster gap="3">
        <Button type="submit">Find services</Button>
      </Cluster>
    </form>
  );
}

function ThingsToDo() {
  const client = useApi();
  const actions = useQuery("citizen-actions", (signal) =>
    unwrap(
      client.GET("/experience/citizen/actions", { params: { query: { pageSize: 10 } }, signal }),
    ),
  );
  return (
    <Card title="Things to do" titleLevel={2} id="things-to-do">
      <QueryView
        query={actions}
        loadingLabel="Loading things to do"
        errorTitle="We could not load things to do"
      >
        {(data) =>
          data.items.length === 0 ? (
            <p>Nothing needs your attention right now.</p>
          ) : (
            <ItemList
              label="Things to do"
              items={data.items.map((item, index) => {
                const href = deepLinkPath(item.deepLink);
                const office = [item.attribution.institutionName, item.attribution.serviceName]
                  .filter(Boolean)
                  .join(" · ");
                return {
                  id: `${item.actionCode}-${index}`,
                  title: labelText(item.label),
                  ...(href && routeHref(href) ? { href } : {}),
                  eyebrow: office,
                  meta: item.dueAt
                    ? `Due ${formatDate(item.dueAt)}`
                    : `Since ${formatDate(item.createdAt)}`,
                  ...(item.actionCode === "PAY_INVOICE"
                    ? { description: "Paying does not decide your application." }
                    : {}),
                };
              })}
            />
          )
        }
      </QueryView>
    </Card>
  );
}

export function HomePage() {
  const client = useApi();
  const me = useMe();
  const home = useQuery("citizen-home", (signal) =>
    unwrap(client.GET("/experience/citizen/home", { signal })),
  );
  const name =
    me.status === "success" ? (me.data.profile.givenName ?? me.data.profile.displayName) : "";

  return (
    <Page
      title={name ? greeting(name) : "Home"}
      description="Your services, applications and records in one place."
    >
      <DescribeNeed />
      <QueryView
        query={home}
        loadingLabel="Loading your summary"
        errorTitle="We could not load your summary"
      >
        {(data) => {
          const c = data.counts;
          const tile = (value: number, label: string, href: string) => (
            <StatTile value={value} label={label} {...(routeHref(href) ? { href } : {})} />
          );
          return (
            <Stack gap="6">
              <section aria-labelledby="at-a-glance">
                <h2 id="at-a-glance" className="section-heading">
                  At a glance
                </h2>
                <StatGrid label="At a glance">
                  {tile(c.actionRequired, "Actions for you", "#things-to-do")}
                  {tile(c.activeApplications, "Active applications", paths.applications)}
                  {tile(c.outstandingPayments, "Payments due", paths.payments)}
                  {tile(c.upcomingAppointments, "Upcoming appointments", paths.appointments)}
                  {tile(c.unreadMessages, "Unread messages", paths.messages)}
                  {tile(c.upcomingExpirations, "Expiring soon", paths.renewals)}
                  {tile(c.issuedCredentials, "Credentials held", paths.credentials)}
                  {tile(c.appealsRedressMatters, "Appeals open", paths.appeals)}
                </StatGrid>
              </section>
              <ThingsToDo />
              <Card title="Recent activity" titleLevel={2}>
                {data.recentItems.length === 0 ? (
                  <EmptyState
                    title="No recent activity"
                    titleLevel={3}
                    description="When you apply for a service, updates appear here."
                    action={<Link href={paths.services}>Find a service</Link>}
                  />
                ) : (
                  <ItemList
                    label="Recent activity"
                    items={data.recentItems.map((item) => {
                      const href =
                        item.itemType === "CASE"
                          ? routeHref(paths.caseStatus(item.itemId))
                          : undefined;
                      return {
                        id: `${item.itemType}-${item.itemId}`,
                        title: item.title,
                        ...(href ? { href } : {}),
                        meta: [item.attribution?.institutionName, formatDate(item.occurredAt)]
                          .filter(Boolean)
                          .join(" · "),
                      };
                    })}
                  />
                )}
              </Card>
              {data.serviceRecommendations.length > 0 && (
                <Card title="Suggested for you" titleLevel={2}>
                  <ItemList
                    label="Suggested services"
                    items={data.serviceRecommendations.map((rec) => ({
                      id: rec.serviceId,
                      title: rec.publicName,
                      href: paths.service(rec.serviceSlug),
                      description: labelText(rec.recommendationReason),
                    }))}
                  />
                </Card>
              )}
              <IdentityCard />
              <Card title="My government" titleLevel={2}>
                <p className="card-lead">Everything government holds about you, in one place.</p>
                <ItemList
                  label="My government"
                  variant="grid"
                  items={MY_GOVERNMENT.filter((e) => routeHref(e.href)).map((e) => ({
                    id: e.id,
                    title: e.label,
                    href: e.href,
                  }))}
                />
              </Card>
              <Disclaimer>{labelText(data.disclaimer)}</Disclaimer>
            </Stack>
          );
        }}
      </QueryView>
    </Page>
  );
}

function IdentityCard() {
  const me = useMe();
  if (me.status !== "success") return null;
  const { accountAssurance } = me.data;
  return (
    <Card title="Identity assurance" titleLevel={2}>
      <Stack gap="2">
        <p>
          Level: <StatusBadge status={accountAssurance.assuranceLevel} tone="info" />
        </p>
        <p className="muted">{accountAssurance.assuranceNote}</p>
      </Stack>
    </Card>
  );
}
