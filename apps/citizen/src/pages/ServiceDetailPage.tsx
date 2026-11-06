// A service's public information (designs: ServiceDetail.html, website PublicServiceDetail.html).
// Signed in: GET /experience/citizen/services/{slug}. Public website: GET /public/services/{slug},
// with "Sign in to apply" instead of the application links.
import { loginUrl, registerUrl, unwrap } from "@heartstone/api-client";
import { useApi, useSession } from "@heartstone/api-client/react";
import {
  Card,
  Cluster,
  Link,
  Notice,
  Stack,
  StatusBadge,
  SummaryList,
  Timeline,
} from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { formatDate, formatMoney } from "../lib/format";
import { paths, site } from "../lib/paths";
import { useQuery } from "../lib/query";
import { availabilityText } from "../lib/services";
import type { ServicesArea } from "./ServicesPage";

export function ServiceDetailPage({ slug, area }: { slug: string; area: ServicesArea }) {
  const client = useApi();
  const { state: session } = useSession();
  const signedIn = session.status === "authenticated";
  const service = useQuery(`service:${area}:${slug}`, (signal) =>
    area === "public"
      ? unwrap(client.GET("/public/services/{slug}", { params: { path: { slug } }, signal }))
      : unwrap(
          client.GET("/experience/citizen/services/{slug}", { params: { path: { slug } }, signal }),
        ),
  );
  const servicesHref = area === "public" ? site.services : paths.services;

  if (service.status !== "success") {
    return (
      <Page title="Service">
        <QueryView
          query={service}
          loadingLabel="Loading the service"
          errorTitle="We could not load this service"
          backHref={servicesHref}
          backLabel="Find a service"
        >
          {() => null}
        </QueryView>
      </Page>
    );
  }

  const s = service.data;
  const availability = availabilityText(s);
  return (
    <Page
      title={s.publicName}
      eyebrow={
        <StatusBadge
          status={s.availabilityStatus}
          label={availability.label}
          tone={availability.tone}
        />
      }
      description={s.plainLanguagePurpose}
    >
      <p className="muted">
        {[
          s.responsibleDepartmentDisplayName,
          `Service version ${s.versionLabel}`,
          s.informationLastVerifiedAt
            ? `Information checked ${formatDate(s.informationLastVerifiedAt)}`
            : undefined,
        ]
          .filter(Boolean)
          .join(" · ")}
      </p>

      {(s.activitiesCovered.length > 0 || s.activitiesExcluded.length > 0) && (
        <Card title="Who this is for" titleLevel={2}>
          <Stack gap="3">
            {s.activitiesCovered.length > 0 && (
              <ul className="bullets">
                {s.activitiesCovered.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
            {s.activitiesExcluded.length > 0 && (
              <>
                <h3 className="subheading">Not covered by this service</h3>
                <ul className="bullets">
                  {s.activitiesExcluded.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </>
            )}
            {s.geographicScope && <p>Where it applies: {s.geographicScope}</p>}
          </Stack>
        </Card>
      )}

      {s.expectedHighLevelStages.length > 0 && (
        <Card title="What happens after you apply" titleLevel={2}>
          <Timeline
            label="Expected stages"
            items={s.expectedHighLevelStages.map((stage) => ({
              id: stage.stageCode,
              title: stage.label,
              ...(stage.description ? { description: stage.description } : {}),
              ...(stage.estimatedDurationLabel ? { meta: stage.estimatedDurationLabel } : {}),
            }))}
          />
          <p className="muted">Times are estimates, not guarantees.</p>
        </Card>
      )}

      {s.fees.length > 0 && (
        <Card title="Fees" titleLevel={2}>
          <SummaryList
            rows={s.fees.map((fee) => ({
              id: fee.code,
              label: fee.label,
              value: fee.isVariable
                ? `${formatMoney(fee.amountCents, fee.currency)} (may vary)`
                : formatMoney(fee.amountCents, fee.currency),
            }))}
          />
          <p>Paying a fee does not mean your application is approved.</p>
        </Card>
      )}

      {s.expectedOutputs.length > 0 && (
        <Card title="What you get" titleLevel={2}>
          <SummaryList
            rows={s.expectedOutputs.map((o) => ({
              id: o.outputCode,
              label: o.label,
              value: [o.description, o.validityLabel].filter(Boolean).join(" · ") || "—",
            }))}
          />
          {s.typicalValidity && <p className="muted">Typical validity: {s.typicalValidity}</p>}
        </Card>
      )}

      {s.authorityClassificationSummary && (
        <Card title="Who decides" titleLevel={2}>
          <p>{s.authorityClassificationSummary}</p>
        </Card>
      )}

      {s.reviewComplaintRoutes.length > 0 && (
        <Card title="If you disagree with a decision" titleLevel={2}>
          <ul className="bullets">
            {s.reviewComplaintRoutes.map((r) => (
              <li key={r.routeCode}>
                <strong>{r.label}</strong>
                {r.description ? `: ${r.description}` : ""}
                {r.contactReference ? ` (${r.contactReference})` : ""}
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card title="Ready to apply?" titleLevel={2} raised>
        {s.applicationCapable && (area === "account" || signedIn) ? (
          <Stack gap="3">
            <p>Your progress is saved as a draft, so you can finish later.</p>
            <Cluster gap="4" align="center">
              <Link href={paths.apply(s.slug)} standalone className="button-link">
                Start application
              </Link>
              <Link href={paths.eligibility(s.slug)} standalone>
                Check if you can apply
              </Link>
            </Cluster>
          </Stack>
        ) : s.applicationCapable ? (
          <Stack gap="3">
            <p>
              You need to sign in with your digital ID to apply. Your progress is saved as a draft,
              so you can finish later.
            </p>
            <Cluster gap="4" align="center">
              <Link
                href={loginUrl({ returnTo: paths.service(s.slug) })}
                standalone
                className="button-link"
              >
                Sign in to apply
              </Link>
              <Link href={registerUrl({ returnTo: paths.service(s.slug) })} standalone>
                Get a digital ID
              </Link>
            </Cluster>
          </Stack>
        ) : (
          <Notice tone="info" title="You cannot apply for this online">
            {s.isInformationOnly
              ? "This service is information only. There is nothing to apply for."
              : "This service is not open for online applications at the moment."}
          </Notice>
        )}
      </Card>

      <Disclaimer>{s.publicDisclaimer ?? s.nonbindingGuidanceDisclaimer}</Disclaimer>
    </Page>
  );
}
