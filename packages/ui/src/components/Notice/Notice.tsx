import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from "../icons";
import type { HeadingLevel } from "../Card/Card";
import styles from "./Notice.module.css";

export type NoticeTone = "info" | "success" | "warning" | "error";

export interface NoticeProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "role"> {
  tone?: NoticeTone;
  title?: ReactNode;
  /** Heading level for the title. Defaults to 2. */
  titleLevel?: HeadingLevel;
  /**
   * How the notice is announced when it appears or changes:
   * - `"status"` (polite, `role="status"`): confirmations and progress. Default for info/success.
   * - `"alert"` (assertive, `role="alert"`): errors and time-critical warnings. Default for error.
   * - `"none"`: static content present on page load (most warnings and callouts).
   */
  announce?: "status" | "alert" | "none";
  children?: ReactNode;
}

const ICONS = { info: InfoIcon, success: CheckIcon, warning: WarningIcon, error: ErrorIcon };
const DEFAULT_ANNOUNCE = {
  info: "none",
  success: "status",
  warning: "none",
  error: "alert",
} as const;

/**
 * Page-level message. Every tone has an icon and (optionally) a title, so the meaning never
 * depends on colour. For field-level errors use the `error` prop of the form components.
 */
export const Notice = forwardRef<HTMLDivElement, NoticeProps>(function Notice(
  { tone = "info", title, titleLevel = 2, announce, className, children, ...rest },
  ref,
) {
  const Icon = ICONS[tone];
  const Heading = `h${titleLevel}` as const;
  const mode = announce ?? DEFAULT_ANNOUNCE[tone];

  return (
    <div
      ref={ref}
      role={mode === "none" ? undefined : mode}
      className={cx(styles.root, styles[tone], className)}
      data-tone={tone}
      {...rest}
    >
      <Icon size={22} className={styles.icon} />
      <div className={styles.body}>
        {title && <Heading className={styles.title}>{title}</Heading>}
        {children}
      </div>
    </div>
  );
});

/** Alias for callers that think in terms of "alerts". Same component and rules. */
export const Alert = Notice;
export type AlertProps = NoticeProps;
