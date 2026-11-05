// Renewals (design: Renewals.html). GET /experience/citizen/renewals.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, EmptyState, ItemList, StatusBadge } from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { Schemas } from "../lib/api-types";
import { formatDate } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";
import { credentialTone } from "../lib/records";

type Renewal = Schemas["CitizenRenewalQueueItemDto"];

function days(r: Renewal): string | undefined {
  if (r.daysUntilExpiry === undefined) return undefined;
  if (r.daysUntilExpiry < 0) return "Expired";
  return r.daysUntilExpiry === 1 ? "1 day left" : `${r.daysUntilExpiry} days left`;
}

function List({ items, label }: { items: Renewal[]; label: string }) {
  return (
    <ItemList
      label={label}
      items={items.map((r) => ({
        id: r.instrumentId,
        title: r.instrumentType ?? "Credential",
        href: paths.credential(r.instrumentId),
        eyebrow: days(r),
        meta: [
          r.instrumentNumber,
          r.issuer.name,
          r.effectiveUntil && `Expires ${formatDate(r.effectiveUntil)}`,
        ]
          .filter(Boolean)
          .join(" · "),
        description: r.renewalEligible ? r.nextStep : (r.renewalReason ?? r.nextStep),
        status: <StatusBadge status={r.status} tone={credentialTone(r.status)} />,
      }))}
    />
  );
}

export function RenewalsPage() {
  const client = useApi();
  const renewals = useQuery("renewals", (signal) =>
    unwrap(client.GET("/experience/citizen/renewals", { signal })),
  );
  return (
    <Page
      title="Renewals"
      description="When your licences, permits and registrations expire, and when you can renew them."
    >
      <QueryView
        query={renewals}
        loadingLabel="Loading your renewals"
        errorTitle="We could not load your renewals"
      >
        {(items) => {
          if (items.length === 0)
            return (
              <EmptyState
                title="Nothing to renew"
                description="Credentials with an expiry date appear here."
              />
            );
          const ready = items.filter((r) => r.renewalEligible);
          const later = items.filter((r) => !r.renewalEligible);
          return (
            <>
              {ready.length > 0 && (
                <Card title="Ready to renew" titleLevel={2}>
                  <List items={ready} label="Ready to renew" />
                </Card>
              )}
              {later.length > 0 && (
                <Card title="Coming up" titleLevel={2}>
                  <List items={later} label="Coming up" />
                </Card>
              )}
              <Disclaimer>{items[0]?.disclaimer}</Disclaimer>
            </>
          );
        }}
      </QueryView>
      <Disclaimer>
        A renewal is a new application: the office decides it, and your current credential stays
        valid until it expires.
      </Disclaimer>
    </Page>
  );
}
