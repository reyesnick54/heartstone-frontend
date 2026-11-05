// Vehicles & driving (design: Vehicles.html). /experience/citizen/transportation
// (+ /vehicle-applications).
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { StatusBadge, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { Page } from "../../components/Page";
import { formatDate, humanizeStatus } from "../../lib/format";
import { useQuery } from "../../lib/query";

export function VehiclesPage() {
  const client = useApi();
  const home = useQuery("transportation", (signal) =>
    unwrap(client.GET("/experience/citizen/transportation", { signal })),
  );
  const apps = useQuery("vehicle-apps", (signal) =>
    unwrap(client.GET("/experience/citizen/vehicle-applications", { signal })),
  );
  return (
    <Page
      title="Vehicles & driving"
      description="Your driving licence, vehicles, tests and transfers."
    >
      <HubSection
        title="Driving licence"
        query={home}
        empty=""
        render={(h) =>
          h.driverLicense ? (
            <SummaryList
              rows={[
                { id: "number", label: "Licence number", value: h.driverLicense.licenseNumber },
                {
                  id: "status",
                  label: "Status",
                  value: <StatusBadge status={h.driverLicense.lifecycleStatus} />,
                },
                {
                  id: "expires",
                  label: "Expires",
                  value: formatDate(h.driverLicense.expiresAt, "—"),
                },
                {
                  id: "classes",
                  label: "Classes",
                  value: h.driverLicense.classes.join(", ") || "—",
                },
                ...(h.driverLicense.endorsements.length > 0
                  ? [
                      {
                        id: "end",
                        label: "Endorsements",
                        value: h.driverLicense.endorsements.join(", "),
                      },
                    ]
                  : []),
              ]}
            />
          ) : (
            <p>You do not have a driving licence on record.</p>
          )
        }
      />
      <HubSection
        title="Vehicles"
        query={home}
        empty="No vehicles are registered to you."
        render={(h) =>
          h.vehicles.map((v) => ({
            id: v.vehicleRecordId,
            title: `Vehicle ${v.vehicleReferenceNumber}`,
            meta: [
              v.expiresAt && `Registration expires ${formatDate(v.expiresAt)}`,
              `Inspection: ${humanizeStatus(v.inspectionStatus).toLowerCase()}`,
            ]
              .filter(Boolean)
              .join(" · "),
            status: <StatusBadge status={v.registrationStatus} />,
          }))
        }
      />
      <HubSection
        title="Driving tests"
        query={home}
        empty="You have no driving tests scheduled."
        render={(h) =>
          h.scheduledTests.map((t) => ({
            id: t.testReference,
            title: `Test ${t.testReference}`,
            meta: formatDate(t.scheduledStartsAt, "Time to be set"),
            status: <StatusBadge status={t.outcome} />,
          }))
        }
      />
      <HubSection
        title="Vehicle applications"
        query={apps}
        empty="You have no vehicle applications."
        render={(items) =>
          items.map((a) => ({
            id: a.caseId,
            title: humanizeStatus(a.serviceCode),
            status: <StatusBadge status={a.caseStatus} />,
          }))
        }
      />
      <HubServices
        examples={["Renew a driving licence", "Register a vehicle", "Transfer a vehicle"]}
      />
      {home.status === "success" && <Disclaimer>{home.data.disclaimer}</Disclaimer>}
    </Page>
  );
}
