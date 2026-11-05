// Health (design: Health.html). /experience/citizen/healthcare (+ /appointments) and public
// clinical-trial discovery. HeartStone is not the medical record and makes no medical decisions.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Notice, StatusBadge } from "@heartstone/ui";
import { Disclaimer } from "../../components/Disclaimer";
import { HubSection, HubServices } from "../../components/Hub";
import { NotAvailable } from "../../components/NotAvailable";
import { Page } from "../../components/Page";
import { formatDateTime, humanizeStatus } from "../../lib/format";
import { useQuery } from "../../lib/query";

export function HealthPage() {
  const client = useApi();
  const home = useQuery("healthcare", (signal) =>
    unwrap(client.GET("/experience/citizen/healthcare", { signal })),
  );
  const appts = useQuery("healthcare-appts", (signal) =>
    unwrap(client.GET("/experience/citizen/healthcare/appointments", { signal })),
  );
  const trials = useQuery("trials", (signal) =>
    unwrap(
      client.GET("/public/clinical-trials/discover", {
        params: { query: { recruitmentStatus: "RECRUITING" } },
        signal,
      }),
    ),
  );
  return (
    <Page
      title="Health"
      description="Health programmes, referrals and appointments. Your medical records stay with your doctors and clinics."
    >
      <Notice tone="info" title="Your health information is private">
        Every time someone looks at it, the access is recorded.
      </Notice>
      <HubSection
        title="Programmes you are enrolled in"
        query={home}
        empty="You are not enrolled in any health programme."
        render={(h) =>
          h.enrolledPrograms.map((e) => ({
            id: e.enrollmentNumber,
            title: e.programName,
            meta: `Enrolment ${e.enrollmentNumber}`,
            status: (
              <StatusBadge
                status={e.status}
                label={e.publicStatusLabel ?? humanizeStatus(e.status)}
              />
            ),
          }))
        }
      />
      <HubSection
        title="Referrals"
        query={home}
        empty="You have no referrals."
        render={(h) =>
          h.referrals.map((r) => ({
            id: r.referralNumber,
            title: `Referral ${r.referralNumber}`,
            ...(r.notGuaranteedEnrollment
              ? { description: "A referral does not guarantee a place on a programme." }
              : {}),
            status: <StatusBadge status={r.status} />,
          }))
        }
      />
      <HubSection
        title="Health appointments"
        query={appts}
        empty="You have no health appointments."
        render={(a) =>
          a.items.map((i) => ({
            id: i.appointmentReference,
            title: i.patientSafeLabel ?? "Health appointment",
            meta: formatDateTime(i.scheduledStartsAt, "Time to be set"),
            status: <StatusBadge status={i.status} />,
          }))
        }
      />
      <HubSection
        title="Research studies you could join"
        query={trials}
        empty="No studies are recruiting at the moment."
        render={(t) =>
          t.trials.map((tr) => ({
            id: tr.trialNumber,
            title: tr.title ?? `Study ${tr.trialNumber}`,
            meta: [tr.sponsor.displayName, tr.locationSummary].filter(Boolean).join(" · "),
            description: tr.broadEligibilitySummary ?? tr.publicSummary ?? undefined,
            status: <StatusBadge status={tr.recruitmentStatus} />,
          }))
        }
      />
      {trials.status === "success" && (
        <Disclaimer>
          {trials.data.disclaimer} This is information only, not a medical recommendation. Joining a
          study is not guaranteed.
        </Disclaimer>
      )}
      <NotAvailable title="Who can see your health information">
        <span>
          Seeing and managing which professionals can access your health information is not
          available online yet.
        </span>
      </NotAvailable>
      <HubServices
        examples={["Join a health programme", "Find a registered healthcare provider"]}
      />
      <Disclaimer>
        {home.status === "success" ? `${home.data.disclaimer} ` : ""}HeartStone does not hold your
        medical records or make medical decisions. Medical decisions are made by your healthcare
        professionals.
      </Disclaimer>
    </Page>
  );
}
