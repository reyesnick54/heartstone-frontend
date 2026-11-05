// F1 demo of the institutional theme. The real workstation shell (work queues, Authority Panel)
// arrives in F6. No routing, no API calls and no government data: values are labelled examples.
import {
  Button,
  Card,
  Cluster,
  Notice,
  PageHeader,
  SkipLink,
  Stack,
  StatusBadge,
  Table,
  type TableColumn,
} from "@heartstone/ui";

export const EXPERIENCE_NAME = "Government Workstation";

interface ExampleRow {
  id: string;
  item: string;
  status: { code: string; label: string; tone: "info" | "warning" | "neutral" };
}

const columns: TableColumn<ExampleRow>[] = [
  { key: "item", header: "Item", cell: (r) => r.item, rowHeader: true },
  {
    key: "status",
    header: "Status",
    cell: (r) => <StatusBadge status={r.status.code} label={r.status.label} tone={r.status.tone} />,
  },
];

const rows: ExampleRow[] = [
  {
    id: "1",
    item: "Example item A",
    status: { code: "EXAMPLE_INFO", label: "Example: in review", tone: "info" },
  },
  {
    id: "2",
    item: "Example item B",
    status: { code: "EXAMPLE_WARNING", label: "Example: overdue", tone: "warning" },
  },
];

export function App() {
  return (
    <div className="workstation">
      <SkipLink />
      <main id="main-content" tabIndex={-1} className="workstation-main">
        <Stack gap="6">
          <PageHeader
            dense
            title={`HeartStone — ${EXPERIENCE_NAME}`}
            description="Institutional theme preview (F1)."
          />
          <Notice tone="info" title="Development build">
            Not a live government service. No case data, no authority checks and no backend.
          </Notice>
          <Card title="Example table" titleLevel={2}>
            <Table
              caption="Example items"
              hideCaption
              columns={columns}
              rows={rows}
              rowKey={(r) => r.id}
            />
          </Card>
          <Cluster gap="3">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
          </Cluster>
        </Stack>
      </main>
    </div>
  );
}
