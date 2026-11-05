// "Acting as": who is doing this, and for whom. Shown on every transactional page so the person
// acting is never confused with the business or person they act for.
import { Notice, Stack } from "@heartstone/ui";
import { formatDate } from "../lib/format";
import { activeRepresentations, useMe, type Representation } from "../lib/me";

export interface ActingAsProps {
  /**
   * The organisation this record or action is for. `undefined` means the backend did not say;
   * `null` means the person themself.
   */
  forOrganization?:
    { name: string; representation?: Representation | undefined } | null | undefined;
}

function scope(rep: Representation): string {
  return `${rep.scopeDescription}${rep.effectiveUntil ? ` until ${formatDate(rep.effectiveUntil)}` : ""}`;
}

export function ActingAs({ forOrganization }: ActingAsProps) {
  const me = useMe();
  if (me.status !== "success") return null;
  const name = me.data.profile.displayName;
  const reps = activeRepresentations(me.data);

  // The record does not say whom it is for, and the person may act for others: say who is
  // signed in and whom they may act for, without guessing which applies here.
  if (forOrganization === undefined) {
    if (reps.length === 0) return null;
    return (
      <Notice tone="info" title="Acting as" titleLevel={2}>
        <Stack gap="1">
          <span>
            You are signed in as <strong>{name}</strong>. You can also act for:
          </span>
          <ul className="bullets">
            {reps.map((r) => (
              <li key={r.representativeAuthorityId}>
                {r.organizationName} ({scope(r)})
              </li>
            ))}
          </ul>
        </Stack>
      </Notice>
    );
  }

  const rep = forOrganization?.representation;
  return (
    <Notice tone="info" title="Acting as" titleLevel={2}>
      {forOrganization ? (
        <Stack gap="1">
          <span>
            You, <strong>{name}</strong>, are acting for <strong>{forOrganization.name}</strong>.
          </span>
          {rep && <span>Your authority covers {scope(rep)}.</span>}
        </Stack>
      ) : (
        <span>
          You, <strong>{name}</strong>, are acting for yourself.
        </span>
      )}
    </Notice>
  );
}
