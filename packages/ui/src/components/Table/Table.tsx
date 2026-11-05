import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./Table.module.css";

export interface TableColumn<Row> {
  /** Stable key for the column. */
  key: string;
  /** Column header text. Also used as the cell label in the stacked (mobile) layout. */
  header: string;
  /** Renders the cell for a row. */
  cell: (row: Row) => ReactNode;
  /** The column that names the row; rendered as `<th scope="row">`. Use for one column. */
  rowHeader?: boolean;
  align?: "start" | "end";
  /** Hide the header text visually (e.g. an actions column), keeping it for screen readers. */
  hideHeader?: boolean;
}

export interface TableProps<Row> {
  /** Visible caption naming the table. Required: every data table needs an accessible name. */
  caption: ReactNode;
  /** Hide the caption visually (when a heading above already names it). */
  hideCaption?: boolean;
  columns: readonly TableColumn<Row>[];
  rows: readonly Row[];
  rowKey: (row: Row) => string;
  /**
   * `stack` (default): below 900px each row becomes a card with labelled cells.
   * `scroll`: the table keeps its columns and scrolls horizontally inside its container.
   */
  responsive?: "stack" | "scroll";
  /** Shown in place of the body when there are no rows. */
  empty?: ReactNode;
  className?: string;
}

/** Data table with a caption, column headers and a responsive layout. */
export function Table<Row>({
  caption,
  hideCaption = false,
  columns,
  rows,
  rowKey,
  responsive = "stack",
  empty,
  className,
}: TableProps<Row>) {
  return (
    <div className={cx(styles.wrapper, responsive === "stack" && styles.stack, className)}>
      <table className={styles.table}>
        <caption className={cx(styles.caption, hideCaption && styles.srOnly)}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cx(styles.th, column.align === "end" && styles.end)}
              >
                {column.hideHeader ? (
                  <span className={styles.srOnly}>{column.header}</span>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && empty ? (
            <tr>
              <td className={styles.td} colSpan={columns.length}>
                {empty}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={rowKey(row)}>
                {columns.map((column) => {
                  const className = cx(
                    styles.td,
                    column.rowHeader && styles.rowHeader,
                    column.align === "end" && styles.end,
                  );
                  const label = column.hideHeader ? undefined : column.header;
                  return column.rowHeader ? (
                    <th key={column.key} scope="row" className={className}>
                      {column.cell(row)}
                    </th>
                  ) : (
                    <td key={column.key} className={className} data-label={label}>
                      {column.cell(row)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
