// Shared loading for the apply → review steps: the service, its start experience (form schema,
// fees, fingerprint) and, once started, the draft application.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { getDraft } from "../../lib/applications";
import { useQuery } from "../../lib/query";

export function useApplyContext(slug: string, applicationId: string | null) {
  const client = useApi();
  const service = useQuery(`service:${slug}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/services/{slug}", { params: { path: { slug } }, signal }),
    ),
  );
  const start = useQuery(`start:${slug}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/services/{slug}/start", {
        params: { path: { slug } },
        signal,
      }),
    ),
  );
  const draft = useQuery(applicationId ? `draft:${applicationId}` : null, (signal) =>
    getDraft(client, applicationId ?? "", signal),
  );
  return { service, start, draft };
}
