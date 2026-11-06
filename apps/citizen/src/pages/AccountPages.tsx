// Account pages (designs: Profile.html, Settings.html, Representation.html). They read
// GET /experience/citizen/me. The backend has no citizen route to change details, contact
// preferences or the organisation being acted for, so those are shown as "not available yet".
import { Card, ItemList, Link, Stack, StatusBadge, SummaryList } from "@heartstone/ui";
import { AccountAssuranceNotice } from "../components/AccountAssurance";
import { Disclaimer } from "../components/Disclaimer";
import { NotAvailable } from "../components/NotAvailable";
import { Page } from "../components/Page";
import { RouteLink } from "../components/RouteLink";
import { formatDate, humanizeStatus } from "../lib/format";
import { activeRepresentations, useMe } from "../lib/me";
import { paths } from "../lib/paths";

export function ProfilePage() {
  const me = useMe();
  if (me.status !== "success") return null;
  const { profile, classification, accountAssurance, disclaimer } = me.data;
  return (
    <Page
      title="Profile and identity"
      description="The details government holds about you, and what kind of account you have."
    >
      <Card title="Your details" titleLevel={2}>
        <SummaryList
          rows={[
            {
              id: "name",
              label: "Name",
              value:
                [profile.givenName, profile.familyName].filter(Boolean).join(" ") ||
                profile.displayName,
            },
            ...(classification.observedApplicantCategories &&
            classification.observedApplicantCategories.length > 0
              ? [
                  {
                    id: "as",
                    label: "You have used services as",
                    value: classification.observedApplicantCategories
                      .map((c) => humanizeStatus(c))
                      .join(", "),
                  },
                ]
              : []),
          ]}
        />
        <p className="muted">{classification.classificationNote}</p>
      </Card>
      <AccountAssuranceNotice />
      <Card title="Account" titleLevel={2}>
        <SummaryList
          rows={[
            {
              id: "status",
              label: "Status",
              value: humanizeStatus(accountAssurance.accountStatus),
            },
          ]}
        />
      </Card>
      <NotAvailable title="Changing your details online is not available yet">
        <span>
          Your details come from government records. To correct them, contact the office that holds
          the record.{" "}
          <RouteLink href={paths.civilRecords} fallback={null}>
            Civil records
          </RouteLink>
        </span>
      </NotAvailable>
      <Disclaimer>{disclaimer.label}</Disclaimer>
    </Page>
  );
}

export function SettingsPage() {
  const me = useMe();
  if (me.status !== "success") return null;
  const prefs = me.data.communicationPreferences;
  return (
    <Page title="Settings and notifications" description="How government contacts you.">
      <Card title="How we contact you" titleLevel={2}>
        <Stack gap="3">
          <p>
            Every message is always in your messages here. These are the other ways the office has
            on record:
          </p>
          {prefs.length === 0 ? (
            <p>No other contact preferences are recorded.</p>
          ) : (
            <ItemList
              label="Contact preferences"
              items={prefs.map((p) => ({
                id: `${p.channelType}-${p.locale ?? ""}`,
                title: humanizeStatus(p.channelType),
                ...(p.locale ? { meta: `Language: ${p.locale}` } : {}),
                status: (
                  <StatusBadge
                    status={p.isEnabled ? "ON" : "OFF"}
                    label={p.isEnabled ? "On" : "Off"}
                  />
                ),
              }))}
            />
          )}
        </Stack>
      </Card>
      <NotAvailable title="Changing these settings online is not available yet">
        <span>To change how you are contacted, contact a service adviser.</span>
        <RouteLink href={paths.help} fallback={null}>
          Get help
        </RouteLink>
      </NotAvailable>
      <Card title="Text size and motion" titleLevel={2}>
        <p>This site follows your device's text size and “reduce motion” settings.</p>
      </Card>
    </Page>
  );
}

export function RepresentationPage() {
  const me = useMe();
  if (me.status !== "success") return null;
  const reps = activeRepresentations(me.data);
  const orgs = me.data.organizationRelationships;
  return (
    <Page
      title="Businesses you represent"
      description="Organisations you are allowed to act for online, and what you can do for each."
    >
      <Card title="You can act for" titleLevel={2}>
        {reps.length === 0 ? (
          <p>You are not recorded as able to act for any organisation.</p>
        ) : (
          <ItemList
            label="Organisations you can act for"
            items={reps.map((r) => ({
              id: r.representativeAuthorityId,
              title: r.organizationName,
              meta: `${r.scopeDescription} · from ${formatDate(r.effectiveFrom)}${r.effectiveUntil ? ` to ${formatDate(r.effectiveUntil)}` : ""}`,
              status: <StatusBadge status={r.status} />,
            }))}
          />
        )}
        <p className="muted">You choose whom you are acting for when you start an application.</p>
      </Card>
      <Card title="Organisations you belong to" titleLevel={2}>
        {orgs.length === 0 ? (
          <p>No memberships are recorded.</p>
        ) : (
          <ItemList
            label="Organisations you belong to"
            items={orgs.map((o) => ({
              id: o.organizationId,
              title: o.organizationName,
              meta: humanizeStatus(o.membershipRole),
              status: <StatusBadge status={o.membershipStatus} />,
            }))}
          />
        )}
        <p className="muted">
          Being a director or member does not by itself let you act for an organisation online. You
          also need an authority to represent it.
        </p>
      </Card>
      <NotAvailable title="Switching to a business account is not available yet">
        <span>
          A business dashboard is coming later. For now, you act for a business application by
          application.
        </span>
      </NotAvailable>
      <Link href={paths.help}>How to get authority to represent a business</Link>
    </Page>
  );
}
