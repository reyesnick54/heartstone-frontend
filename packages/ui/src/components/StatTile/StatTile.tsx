import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./StatTile.module.css";

export interface StatTileProps {
  /** The number, already formatted. Pass what the backend returned; never a derived total. */
  value: ReactNode;
  label: ReactNode;
  /** Makes the whole tile a link to the list it counts. */
  href?: string;
  className?: string;
}

/** A count with its label ("3 Active applications"), optionally a link. Read as one phrase. */
export function StatTile({ value, label, href, className }: StatTileProps) {
  const content = (
    <>
      <span className={styles.value}>{value}</span> <span className={styles.label}>{label}</span>
    </>
  );
  return href ? (
    <a href={href} className={cx(styles.root, styles.link, className)}>
      {content}
    </a>
  ) : (
    <div className={cx(styles.root, className)}>{content}</div>
  );
}

export interface StatGridProps {
  /** Accessible name of the group, e.g. "At a glance". */
  label: string;
  children: ReactNode;
  className?: string;
}

/** A responsive grid of StatTiles (2 columns on phones, 4 from 900px). */
export function StatGrid({ label, children, className }: StatGridProps) {
  return (
    <ul className={cx(styles.grid, className)} aria-label={label}>
      {Array.isArray(children) ? (
        children.map((child, index) => <li key={index}>{child}</li>)
      ) : (
        <li>{children}</li>
      )}
    </ul>
  );
}
