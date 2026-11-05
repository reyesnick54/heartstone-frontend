// Appointments (design: Appointments.html). GET /experience/citizen/appointments.
import { useState } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { EmptyState, ItemList, StatusBadge, Tabs } from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { Schemas } from "../lib/api-types";
import { formatWindow, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

type Appointment = Schemas["CitizenAppointmentSummaryDto"];
const FINISHED = new Set(["CANCELLED", "COMPLETED", "NO_SHOW"]);

function isPast(a: Appointment, now: number): boolean {
  if (FINISHED.has(a.status)) return true;
  const end = a.scheduledEndsAt ?? a.scheduledStartsAt;
  return end ? new Date(end).getTime() < now : false;
}

function List({ items, label }: { items: Appointment[]; label: string }) {
  if (items.length === 0) return <p>None here.</p>;
  return (
    <ItemList
      label={label}
      items={items.map((a) => ({
        id: a.id,
        title: a.reasonName ?? "Appointment",
        href: paths.appointment(a.id),
        meta: [
          formatWindow(a.scheduledStartsAt, a.scheduledEndsAt),
          a.isVirtual ? "Online" : undefined,
          a.attribution?.departmentName ?? a.attribution?.institutionName,
        ]
          .filter(Boolean)
          .join(" · "),
        description: `Reference ${a.appointmentReference}`,
        status: <StatusBadge status={a.status} label={humanizeStatus(a.status)} />,
      }))}
    />
  );
}

export function AppointmentsPage() {
  const client = useApi();
  // "Now" for splitting upcoming and past, fixed when the page opens.
  const [now] = useState(() => Date.now());
  const appts = useQuery("appointments", (signal) =>
    unwrap(
      client.GET("/experience/citizen/appointments", {
        params: { query: { pageSize: 50 } },
        signal,
      }),
    ),
  );
  return (
    <Page
      title="Appointments"
      description="Offices arrange appointments as part of your applications. You can confirm a time, ask for another time or cancel."
    >
      <QueryView
        query={appts}
        loadingLabel="Loading your appointments"
        errorTitle="We could not load your appointments"
      >
        {(data) => {
          if (data.items.length === 0) {
            return (
              <EmptyState
                title="You have no appointments"
                description="When an office arranges an appointment with you, it appears here."
              />
            );
          }
          const upcoming = data.items.filter((a) => !isPast(a, now));
          const past = data.items.filter((a) => isPast(a, now));
          return (
            <Tabs
              label="Appointments"
              tabs={[
                {
                  id: "upcoming",
                  label: "Upcoming",
                  count: upcoming.length,
                  content: <List items={upcoming} label="Upcoming appointments" />,
                },
                {
                  id: "past",
                  label: "Past",
                  count: past.length,
                  content: <List items={past} label="Past appointments" />,
                },
              ]}
            />
          );
        }}
      </QueryView>
      <Disclaimer>
        Booking or attending an appointment does not mean your application is approved.
      </Disclaimer>
    </Page>
  );
}
