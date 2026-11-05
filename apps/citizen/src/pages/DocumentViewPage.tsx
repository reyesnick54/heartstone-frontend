// One document (design: DocumentView.html). GET /experience/citizen/documents/{id}. The
// signature, seal and authenticity values are shown exactly as the backend recorded them.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, Link, Stack, SummaryList } from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import { formatDate, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

export function DocumentViewPage({ documentId }: { documentId: string }) {
  const client = useApi();
  const doc = useQuery(`document:${documentId}`, (signal) =>
    unwrap(
      client.GET("/experience/citizen/documents/{id}", {
        params: { path: { id: documentId } },
        signal,
      }),
    ),
  );
  return (
    <Page title={doc.status === "success" ? doc.data.title : "Document"}>
      <QueryView
        query={doc}
        loadingLabel="Loading the document"
        errorTitle="We could not load this document"
        backHref={paths.documents}
        backLabel="Your documents"
      >
        {(d) => (
          <Stack gap="5">
            {d.download && (
              <Link href={d.download.downloadPath} download standalone>
                Download this document
              </Link>
            )}
            <Card title="Details" titleLevel={2}>
              <SummaryList
                rows={[
                  { id: "type", label: "Type", value: humanizeStatus(d.documentType) },
                  { id: "number", label: "Number", value: d.documentNumber },
                  { id: "from", label: "From", value: d.originatingInstitution?.name ?? "You" },
                  { id: "date", label: "Date", value: formatDate(d.issueOrSubmissionDate, "—") },
                  ...(d.expiryDate
                    ? [{ id: "expiry", label: "Expires", value: formatDate(d.expiryDate) }]
                    : []),
                  ...(d.relatedService
                    ? [
                        {
                          id: "related",
                          label: "Related to",
                          value:
                            d.relatedService.serviceName ?? d.relatedService.caseReference ?? "—",
                        },
                      ]
                    : []),
                  {
                    id: "version",
                    label: "Version",
                    value: `${d.currentVersionNumber} (${humanizeStatus(d.status).toLowerCase()})`,
                  },
                ]}
              />
            </Card>
            <Card title="Checks recorded by the office" titleLevel={2}>
              <SummaryList
                rows={[
                  {
                    id: "auth",
                    label: "Authenticity",
                    value: humanizeStatus(d.integrity.authenticityStatus),
                  },
                  {
                    id: "sig",
                    label: "Signature",
                    value: humanizeStatus(d.integrity.signatureStatus),
                  },
                  { id: "seal", label: "Seal", value: humanizeStatus(d.integrity.sealStatus) },
                  {
                    id: "hash",
                    label: "File fingerprint (SHA-256)",
                    value: <code className="hash">{d.integrity.sha256}</code>,
                  },
                ]}
              />
              <p className="muted">
                The fingerprint shows whether the file has changed since it was stored. It does not
                prove that what the document says is true.
              </p>
            </Card>
            <Disclaimer>{d.disclaimer}</Disclaimer>
          </Stack>
        )}
      </QueryView>
    </Page>
  );
}
