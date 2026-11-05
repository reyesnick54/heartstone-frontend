// Documents (design: Documents.html). GET /experience/citizen/documents.
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { EmptyState, Link, Notice, StatusBadge, Table } from "@heartstone/ui";
import { Disclaimer } from "../components/Disclaimer";
import { NotAvailable } from "../components/NotAvailable";
import { Page } from "../components/Page";
import { QueryView } from "../components/QueryView";
import type { Schemas } from "../lib/api-types";
import { formatShortDate, humanizeStatus } from "../lib/format";
import { paths } from "../lib/paths";
import { useQuery } from "../lib/query";

type Doc = Schemas["CitizenDocumentSummaryDto"];

export function DocumentsPage() {
  const client = useApi();
  const docs = useQuery("documents", (signal) =>
    unwrap(client.GET("/experience/citizen/documents", { signal })),
  );
  return (
    <Page
      title="Documents"
      description="Documents government has issued to you, and documents you have sent with your applications."
    >
      <Notice tone="info" title="Upload is not verification">
        A document you send is checked by an officer. Until then it shows the status the office has
        recorded, such as “not yet checked”. A check is not a decision on your application.
      </Notice>
      <QueryView
        query={docs}
        loadingLabel="Loading your documents"
        errorTitle="We could not load your documents"
      >
        {(items) =>
          items.length === 0 ? (
            <EmptyState
              title="You have no documents yet"
              description="Documents from your applications and from government offices appear here."
            />
          ) : (
            <Table<Doc>
              caption="Your documents"
              hideCaption
              rows={items}
              rowKey={(d) => d.id}
              columns={[
                {
                  key: "title",
                  header: "Document",
                  rowHeader: true,
                  cell: (d) => (
                    <>
                      <Link href={paths.document(d.id)}>{d.title}</Link>
                      <span className="table-sub">{humanizeStatus(d.documentType)}</span>
                    </>
                  ),
                },
                {
                  key: "from",
                  header: "From",
                  cell: (d) => d.originatingInstitution?.name ?? "You",
                },
                {
                  key: "related",
                  header: "Related to",
                  cell: (d) =>
                    d.relatedService?.serviceName ?? d.relatedService?.caseReference ?? "—",
                },
                {
                  key: "date",
                  header: "Date",
                  cell: (d) => formatShortDate(d.issueOrSubmissionDate, "—"),
                },
                {
                  key: "status",
                  header: "Status",
                  cell: (d) => (
                    <StatusBadge
                      status={d.integrity.authenticityStatus}
                      label={humanizeStatus(d.integrity.authenticityStatus)}
                    />
                  ),
                },
              ]}
            />
          )
        }
      </QueryView>
      <NotAvailable title="Sending a new document">
        <span>
          You cannot upload documents online yet. If an office asks you for a document, its message
          will tell you how to send it.
        </span>
      </NotAvailable>
      <Disclaimer>
        The official record of each document is held by the office that issued or received it.
      </Disclaimer>
    </Page>
  );
}
