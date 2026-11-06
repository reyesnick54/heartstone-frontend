// Public safety (design: PublicSafety.html). /experience/citizen/public-safety
// (+ /emergency-events, /reports, /assistance).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Notice, StatusBadge } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection } from "../../components/Hub";
import { NotAvailable } from "../../components/NotAvailable";
import { Page } from "../../components/Page";
import { useQuery } from "../../lib/query";
import { TENANT } from "../../tenant";

export function PublicSafetyPage() {
  const client = useApi();
  const home = useQuery("public-safety", (signal) =>
    unwrap(client.GET("/experience/citizen/public-safety", { signal })),
  );
  const events = useQuery("ps-events", (signal) =>
    unwrap(client.GET("/experience/citizen/public-safety/emergency-events", { signal })),
  );
  const reports = useQuery("ps-reports", (signal) =>
    unwrap(client.GET("/experience/citizen/public-safety/reports", { signal })),
  );
  const assistance = useQuery("ps-assist", (signal) =>
    unwrap(client.GET("/experience/citizen/public-safety/assistance", { signal })),
  );
  return (
    <Page
      title="Public safety"
      description="Emergency notices, incidents you have reported, and recovery assistance."
    >
      <Notice tone="warning" title="In an emergency, call for help">
        Call {TENANT.emergencyNumber}. Do not use this website to report an emergency.
      </Notice>
      <HubSection
        title="Emergency notices"
        query={events}
        empty="There are no emergency notices."
        render={(e) =>
          e.items.map((i) => ({
            id: i.eventReference,
            title: i.title,
            description: i.publicSummary ?? undefined,
            meta: i.isOfficialDeclaration ? "Official declaration" : "Information",
            status: <StatusBadge status={i.status} />,
          }))
        }
      />
      <HubSection
        title="Incidents you reported"
        query={reports}
        empty="You have not reported any incidents."
        render={(r) =>
          r.items.map((i, index) => ({
            id: `${i.summaryLabel}-${index}`,
            title: i.summaryLabel,
            meta: i.locationDescription ?? undefined,
            status: <StatusBadge status={i.verificationStatus} label={i.verificationLabel} />,
          }))
        }
      />
      <HubSection
        title="Recovery assistance"
        query={assistance}
        empty="You have no assistance applications."
        render={(a) =>
          a.items.map((i) => ({
            id: i.applicationReference,
            title: `Application ${i.applicationReference}`,
            status: <StatusBadge status={i.status} />,
          }))
        }
      />
      <NotAvailable title="Reporting a non-emergency incident online">
        <span>
          Reporting an incident from this website is not available yet. Contact the police or the
          responsible office.
        </span>
      </NotAvailable>
      {home.status === "success" && <Disclaimer>{home.data.disclaimer}</Disclaimer>}
    </Page>
  );
}
