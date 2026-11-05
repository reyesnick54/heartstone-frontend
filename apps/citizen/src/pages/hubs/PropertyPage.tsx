// Property & land (design: Property.html). /experience/citizen/property (+ /interests, /actions).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { StatusBadge } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { humanizeStatus } from "../../lib/format";
import { useQuery } from "../../lib/query";

export function PropertyPage() {
  const client = useApi();
  const home = useQuery("property", (signal) =>
    unwrap(client.GET("/experience/citizen/property", { signal })),
  );
  const interests = useQuery("property-interests", (signal) =>
    unwrap(client.GET("/experience/citizen/property/interests", { signal })),
  );
  const actions = useQuery("property-actions", (signal) =>
    unwrap(client.GET("/experience/citizen/property/actions", { signal })),
  );
  return (
    <Page
      title="Property & land"
      description="Land and property registered to you, and your registry applications."
    >
      <HubSection
        title="Registered interests"
        query={interests}
        empty="No registered interests are recorded for you."
        render={(items) =>
          items.map((i) => ({
            id: i.interestId,
            title: `Parcel ${i.parcelReference}`,
            meta: `${humanizeStatus(i.interestKind)} · ${i.titleSummary}`,
            status: <StatusBadge status={i.registryStatus} />,
          }))
        }
      />
      <HubSection
        title="Parcels"
        query={home}
        empty="No parcels are linked to you."
        render={(h) =>
          h.parcels.map((p) => ({
            id: p.parcelId,
            title: `Parcel ${p.parcelReference}`,
            meta: p.relationshipSummary,
            status: <StatusBadge status={p.registryStatus} />,
          }))
        }
      />
      <HubSection
        title="Pending matters"
        query={actions}
        empty=""
        render={(a) => (
          <>
            <p>
              Pending applications: {a.pendingApplications} · Active charges or encumbrances:{" "}
              {a.activeEncumbrances}
            </p>
            {a.suggestedActions.length > 0 && (
              <ul className="bullets">
                {a.suggestedActions.map((s) => (
                  <li key={s}>{humanizeStatus(s)}</li>
                ))}
              </ul>
            )}
          </>
        )}
      />
      <HubServices examples={["Register a land transfer", "Search the land register"]} />
      {home.status === "success" && (
        <Disclaimer>
          {home.data.disclaimer} The land register held by the registry is the official record.
        </Disclaimer>
      )}
    </Page>
  );
}
