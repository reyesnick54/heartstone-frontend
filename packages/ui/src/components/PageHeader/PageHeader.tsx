import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./PageHeader.module.css";

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** The page's single `h1`. */
  title: ReactNode;
  description?: ReactNode;
  /** Small label above the title (e.g. a section name). */
  eyebrow?: ReactNode;
  /** Primary page actions, shown at the end on wide screens and below on narrow ones. */
  actions?: ReactNode;
  /**
   * Uses the UI typeface instead of the display serif, for dense operational screens. The brand
   * display face is for citizen and brand surfaces only.
   */
  dense?: boolean;
}

/** Page title block. Renders the page's only `h1`. */
export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(function PageHeader(
  { title, description, eyebrow, actions, dense = false, className, ...rest },
  ref,
) {
  return (
    <header ref={ref} className={cx(styles.root, dense && styles.dense, className)} {...rest}>
      <div className={styles.text}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
});
