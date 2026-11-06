// How sure government is about who the account holder is. Accounts created through "Get a
// digital ID" are BASIC: the identity provider confirmed an email address and nobody has checked
// the person's identity. The backend's `assuranceLevel` describes how strongly this session was
// signed in (for example with a second factor), which is not the same thing, so it is shown as
// sign-in strength and never as "verified". No gold (official) styling here.
import { Notice, Stack, StatusBadge } from "@heartstone/ui";
import { humanizeStatus } from "../lib/format";
import { useMe } from "../lib/me";

export function AccountAssuranceNotice({ titleLevel = 2 }: { titleLevel?: 2 | 3 }) {
  const me = useMe();
  if (me.status !== "success") return null;
  const { accountAssurance } = me.data;
  return (
    <Notice tone="info" title="Your account is a basic digital ID" titleLevel={titleLevel}>
      <Stack gap="2">
        <p>
          Your email address is confirmed, but this account has not been through an identity check.
          Checking your identity online, for example against your passport or national ID card, will
          be available later. Until then, some services may ask you to confirm who you are in
          person.
        </p>
        <p>
          Sign-in strength this session:{" "}
          <StatusBadge
            status={accountAssurance.assuranceLevel}
            label={humanizeStatus(accountAssurance.assuranceLevel)}
            tone="neutral"
          />
        </p>
        {accountAssurance.assuranceNote && (
          <p className="muted">{accountAssurance.assuranceNote}</p>
        )}
      </Stack>
    </Notice>
  );
}
