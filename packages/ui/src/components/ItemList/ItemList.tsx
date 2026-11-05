import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./ItemList.module.css";

export interface ItemListItem {
  /** Stable key. */
  id: string;
  /** The item's name. Becomes the link text when `href` is set. */
  title: ReactNode;
  href?: string;
  /** Small text above the title (an office, a category). */
  eyebrow?: ReactNode;
  /** Secondary line below the title (reference numbers, dates). */
  meta?: ReactNode;
  description?: ReactNode;
  /** A StatusBadge, shown at the end on wide screens. */
  status?: ReactNode;
  /** Buttons or links for this item. They must name the item ("Pay invoice INV-1"). */
  actions?: ReactNode;
}

export interface ItemListProps {
  /** Accessible name of the list. */
  label: string;
  items: readonly ItemListItem[];
  /** `rows` (default): a divided list. `grid`: link tiles, 1 column on phones, 2–3 wider. */
  variant?: "rows" | "grid";
  className?: string;
}

/**
 * A list of records or destinations: services, things to do, applications, messages,
 * documents. Each item's title is its link, so there is one link per item and the whole list
 * can be read by headings-free screen-reader navigation.
 */
export function ItemList({ label, items, variant = "rows", className }: ItemListProps) {
  return (
    <ul className={cx(styles.root, styles[variant], className)} aria-label={label}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <div className={styles.main}>
            {item.eyebrow && <p className={styles.eyebrow}>{item.eyebrow}</p>}
            <p className={styles.title}>
              {item.href ? (
                <a href={item.href} className={styles.link}>
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </p>
            {item.meta && <p className={styles.meta}>{item.meta}</p>}
            {item.description && <p className={styles.description}>{item.description}</p>}
            {item.actions && <div className={styles.actions}>{item.actions}</div>}
          </div>
          {item.status && <div className={styles.status}>{item.status}</div>}
        </li>
      ))}
    </ul>
  );
}
