// "Acting as": who is doing this, and for whom. Shown on every transactional page so the person
// acting is never confused with the business or person they act for.
import { Notice, Stack } from "@heartstone/ui";
import { formatDate } from "../lib/format";
import { useMe, type Representation } from "../lib/me";

export interface ActingAsProps {
  /** The organisation this record or action is for, when it is not the person themself. */
  forOrganization?: { name: string; representation?: Representation | undefined } | undefined;
}

export function ActingAs({ forOrganization }: ActingAsProps) {
  const me = useMe();
  if (me.status !== "success") return null;
  const name = me.data.profile.displayName;
  const rep = forOrganization?.representation;
  return (
    <Notice tone="info" title="Acting as" titleLevel={2} className="acting-as">
      {forOrganization ? (
        <Stack gap="1">
          <span>
            You, <strong>{name}</strong>, are acting for <strong>{forOrganization.name}</strong>.
          </span>
          {rep && (
            <span>
              Your authority covers {rep.scopeDescription}
              {rep.effectiveUntil ? ` until ${formatDate(rep.effectiveUntil)}` : ""}.
            </span>
          )}
        </Stack>
      ) : (
        <span>
          You, <strong>{name}</strong>, are acting for yourself.
        </span>
      )}
    </Notice>
  );
}
