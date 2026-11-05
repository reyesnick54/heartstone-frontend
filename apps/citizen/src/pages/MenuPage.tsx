// More (design: Menu.html): the full menu on phones, behind the "More" tab.
import { useState } from "react";
import { useSession } from "@heartstone/api-client/react";
import { Button, Card, ItemList, Notice, Stack } from "@heartstone/ui";
import { Page } from "../components/Page";
import { routeHref } from "../components/RouteLink";
import { activeRepresentations, useMe } from "../lib/me";
import { MAIN_NAV, MY_GOVERNMENT, type NavEntry } from "../lib/nav";
import { paths } from "../lib/paths";

const RECORDS = ["appointments", "documents", "credentials", "payments", "renewals", "appeals"];
const ACCOUNT: NavEntry[] = [
  { id: "profile", label: "Profile and identity", href: paths.profile },
  { id: "representation", label: "Businesses you represent", href: paths.representation },
  { id: "settings", label: "Settings & notifications", href: paths.settings },
  { id: "help", label: "Help", href: paths.help },
];

function Links({ label, entries }: { label: string; entries: NavEntry[] }) {
  return (
    <ItemList
      label={label}
      items={entries
        .filter((e) => routeHref(e.href))
        .map((e) => ({ id: e.id, title: e.label, href: e.href }))}
    />
  );
}

export function MenuPage() {
  const me = useMe();
  const { signOut } = useSession();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const reps = me.status === "success" ? activeRepresentations(me.data) : [];
  return (
    <Page title="Menu">
      {me.status === "success" && (
        <Notice tone="info" title="Acting as">
          <Stack gap="1">
            <span>
              <strong>{me.data.profile.displayName}</strong> (yourself)
            </span>
            {reps.length > 0 && (
              <span>You can also act for {reps.map((r) => r.organizationName).join(", ")}.</span>
            )}
          </Stack>
        </Notice>
      )}
      <Card title="Your records" titleLevel={2}>
        <Links label="Your records" entries={MAIN_NAV.filter((e) => RECORDS.includes(e.id))} />
      </Card>
      <Card title="My government" titleLevel={2}>
        <Links label="My government" entries={MY_GOVERNMENT} />
      </Card>
      <Card title="Account" titleLevel={2}>
        <Stack gap="4">
          <Links label="Account" entries={ACCOUNT} />
          <div>
            <Button
              variant="secondary"
              loading={busy}
              loadingLabel="Signing out"
              onClick={() => {
                setBusy(true);
                setFailed(false);
                signOut()
                  .catch(() => setFailed(true))
                  .finally(() => setBusy(false));
              }}
            >
              Sign out
            </Button>
          </div>
          {failed && <Notice tone="error">Sign-out did not complete. Please try again.</Notice>}
        </Stack>
      </Card>
    </Page>
  );
}
