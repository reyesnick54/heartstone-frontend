import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import type { HeadingLevel } from "../Card/Card";
import styles from "./EmptyState.module.css";

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  titleLevel?: HeadingLevel;
  description?: ReactNode;
  /** Decorative icon. */
  icon?: ReactNode;
  /** The next step, e.g. a Button or Link. An empty state should always offer one if it can. */
  action?: ReactNode;
}

/** Shown when a list or region has nothing in it. Says what is missing and what to do next. */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { title, titleLevel = 2, description, icon, action, className, ...rest },
  ref,
) {
  const Heading = `h${titleLevel}` as const;
  return (
    <div ref={ref} className={cx(styles.root, className)} {...rest}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
});
