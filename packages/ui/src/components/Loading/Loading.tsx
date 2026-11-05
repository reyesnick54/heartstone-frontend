import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./Loading.module.css";

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  shape?: "text" | "block" | "circle";
  /** Width as a fixed step (no inline styles, so the CSP stays `style-src 'self'`). */
  width?: "25%" | "40%" | "60%" | "80%" | "100%";
}

const WIDTHS = { "25%": "w25", "40%": "w40", "60%": "w60", "80%": "w80", "100%": "w100" } as const;

/**
 * Placeholder shape while content loads. Always hidden from assistive technology: wrap a group
 * of skeletons in `<Loading>` (or set `aria-busy` on the region) so the state is announced once.
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton(
  { shape = "text", width = "100%", className, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cx(styles.skeleton, styles[shape], styles[WIDTHS[width]], className)}
      {...rest}
    />
  );
});

export interface LoadingProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
  /** Announced to screen readers and shown beside the spinner. */
  label?: string;
  /** Show the label visually (default) or only to screen readers. */
  showLabel?: boolean;
  /** Skeleton content to show instead of the spinner. */
  children?: ReactNode;
}

/** Loading state for a region. Announced politely via `role="status"`. */
export const Loading = forwardRef<HTMLDivElement, LoadingProps>(function Loading(
  { label = "Loading", showLabel = true, className, children, ...rest },
  ref,
) {
  return (
    <div ref={ref} role="status" className={className} {...rest}>
      {children ? (
        <>
          <span className={styles.visuallyHidden}>{label}</span>
          {children}
        </>
      ) : (
        <span className={styles.loading}>
          <span className={styles.spinner} aria-hidden="true" />
          <span className={showLabel ? undefined : styles.visuallyHidden}>{label}</span>
        </span>
      )}
    </div>
  );
});
