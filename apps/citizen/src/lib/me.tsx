// The signed-in person (GET /experience/citizen/me), loaded once per session and shared.
import { createContext, useContext, type ReactNode } from "react";
import { unwrap, type Api } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { useQuery, type QueryResult } from "./query";

const MeContext = createContext<QueryResult<Api.CitizenMe> | null>(null);

export function MeProvider({ identityId, children }: { identityId: string; children: ReactNode }) {
  const client = useApi();
  const me = useQuery(`me:${identityId}`, (signal) =>
    unwrap(client.GET("/experience/citizen/me", { signal })),
  );
  return <MeContext.Provider value={me}>{children}</MeContext.Provider>;
}

export function useMe(): QueryResult<Api.CitizenMe> {
  const value = useContext(MeContext);
  if (!value) throw new Error("useMe must be used inside <MeProvider>.");
  return value;
}

export type Representation = Api.CitizenMe["representationRelationships"][number];

/** Representations the backend reports as active (it already filters; this is belt and braces). */
export function activeRepresentations(me: Api.CitizenMe): Representation[] {
  return me.representationRelationships.filter((r) => r.status === "ACTIVE");
}
