// Credentials and certificates (design: Credentials.html). GET /experience/citizen/credentials.
// No gold "official" mark here: that needs the backend's verification, shown on the detail page.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, EmptyState, ItemList, Link, StatusBadge, Tabs } from "@heartstone/ui";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { routeHref } from "../components/RouteLink";
import type { Schemas } from "../lib/api-types";
import { formatDate, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";
import { credentialTone, isEnded } from "../lib/records";

type Credential = Schemas["CitizenCredentialSummaryDto"];

function List({ items, label }: { items: Credential[]; label: string }) {
  if (items.length === 0) return <p>None here.</p>;
  return (
    <ItemList
      label={label}
      items={items.map((c) => ({
        id: c.id,
        title: c.instrumentType ?? humanizeStatus(c.instrumentKind ?? "Credential"),
        href: paths.credential(c.id),
        meta: [c.instrumentNumber, c.issuer.name].filter(Boolean).join(" · "),
        description:
          c.effectiveFrom || c.effectiveUntil
            ? [
                c.effectiveFrom && `From ${formatDate(c.effectiveFrom)}`,
                c.effectiveUntil && `until ${formatDate(c.effectiveUntil)}`,
              ]
                .filter(Boolean)
                .join(" ")
            : undefined,
        status: <StatusBadge status={c.status} tone={credentialTone(c.status)} />,
      }))}
    />
  );
}

export function CredentialsPage() {
  const client = useApi();
  const creds = useQuery("credentials", (signal) =>
    unwrap(client.GET("/experience/citizen/credentials", { signal })),
  );
  const civil = routeHref(paths.civilRecords);
  const verify = routeHref(paths.verify);
  return (
    <Page
      title="Credentials & certificates"
      description="Licences, permits, registrations and certificates issued to you, or to businesses you represent."
    >
      <QueryView
        query={creds}
        loadingLabel="Loading your credentials"
        errorTitle="We could not load your credentials"
      >
        {(items) => {
          if (items.length === 0)
            return (
              <EmptyState
                title="You have no credentials yet"
                description="When an office issues you a licence, permit or certificate, it appears here."
              />
            );
          const current = items.filter((c) => !isEnded(c.status));
          const ended = items.filter((c) => isEnded(c.status));
          return (
            <Tabs
              label="Credentials"
              tabs={[
                {
                  id: "current",
                  label: "Current",
                  count: current.length,
                  content: <List items={current} label="Current credentials" />,
                },
                {
                  id: "ended",
                  label: "Expired or ended",
                  count: ended.length,
                  content: <List items={ended} label="Expired or ended credentials" />,
                },
              ]}
            />
          );
        }}
      </QueryView>
      {civil && (
        <Card title="Civil records" titleLevel={2}>
          <p>
            Birth, marriage and other civil certificates are in{" "}
            <Link href={civil}>Civil records</Link>.
          </p>
        </Card>
      )}
      {verify && (
        <Card title="Has someone shown you a government document?" titleLevel={2}>
          <p>
            Anyone can check a licence or certificate using its verification code.{" "}
            <Link href={verify}>Check a document</Link>
          </p>
        </Card>
      )}
    </Page>
  );
}
