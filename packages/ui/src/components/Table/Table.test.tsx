import { render, screen, within } from "@testing-library/react";
import { Table, type TableColumn } from "./Table";

interface ExampleRow {
  id: string;
  name: string;
  updated: string;
}

const columns: TableColumn<ExampleRow>[] = [
  { key: "name", header: "Item", cell: (r) => r.name, rowHeader: true },
  { key: "updated", header: "Updated", cell: (r) => r.updated },
  { key: "actions", header: "Actions", cell: () => <a href="#x">Open</a>, hideHeader: true },
];

const rows: ExampleRow[] = [
  { id: "1", name: "Example item A", updated: "Today" },
  { id: "2", name: "Example item B", updated: "Yesterday" },
];

describe("Table", () => {
  it("is a table named by its caption, with column and row headers", () => {
    render(<Table caption="Example items" columns={columns} rows={rows} rowKey={(r) => r.id} />);
    const table = screen.getByRole("table", { name: "Example items" });
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map((h) => h.textContent),
    ).toEqual(["Item", "Updated", "Actions"]);
    expect(within(table).getByRole("rowheader", { name: "Example item A" })).toBeInTheDocument();
  });

  it("labels data cells for the stacked mobile layout", () => {
    render(<Table caption="Example items" columns={columns} rows={rows} rowKey={(r) => r.id} />);
    expect(screen.getByRole("cell", { name: "Today" })).toHaveAttribute("data-label", "Updated");
  });

  it("shows the empty content when there are no rows", () => {
    render(
      <Table
        caption="Example items"
        columns={columns}
        rows={[]}
        rowKey={(r) => r.id}
        empty="Nothing to show"
      />,
    );
    expect(screen.getByRole("cell", { name: "Nothing to show" })).toHaveAttribute("colspan", "3");
  });
});
