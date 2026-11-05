import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./SummaryList.module.css";

export interface SummaryListRow {
  /** Stable key. */
  id: string;
  label: ReactNode;
  value: ReactNode;
  /** Optional action, e.g. a "Change" link. Name it fully ("Change trading address"). */
  action?: ReactNode;
}

export interface SummaryListProps {
  rows: readonly SummaryListRow[];
  className?: string;
}

/**
 * Label/value pairs as a description list (`dl`): check-your-answers pages, record details,
 * receipts. Rows stack below 760px.
 */
export function SummaryList({ rows, className }: SummaryListProps) {
  return (
    <dl className={cx(styles.root, className)}>
      {rows.map((row) => (
        <div key={row.id} className={styles.row}>
          <dt className={styles.label}>{row.label}</dt>
          <dd className={styles.value}>{row.value}</dd>
          {row.action && <dd className={styles.action}>{row.action}</dd>}
        </div>
      ))}
    </dl>
  );
}
