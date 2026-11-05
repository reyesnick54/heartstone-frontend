import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import { humanizeStatus } from "../../internal/humanize";
import { SealIcon } from "../icons";
import styles from "./StatusBadge.module.css";

/**
 * Visual tone of a status. Tones are presentation only: the meaning is always in the label.
 *
 * `official` (gold) is deliberately absent from this type. Gold means official, verified or
 * government issued, so it can never be reached by mapping a status string; it needs the
 * separate `official` prop, set by a caller that has the backend's word for it.
 */
export type StatusTone = "neutral" | "info" | "success" | "warning" | "error";

interface StatusBadgeBaseProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Status string exactly as the backend returned it, e.g. `UNDER_REVIEW`. Kept in `data-status`. */
  status: string;
  /**
   * Public label from the backend. Strongly preferred. When omitted the status string is made
   * readable (`UNDER_REVIEW` → "Under review"); it is never reinterpreted.
   */
  label?: string;
}

export interface StatusBadgeToneProps extends StatusBadgeBaseProps {
  /** Tone chosen by the caller (typically from a backend-driven mapping). Defaults to neutral. */
  tone?: StatusTone;
  official?: false;
}

export interface StatusBadgeOfficialProps extends StatusBadgeBaseProps {
  /**
   * Renders the gold official style with a seal. Only set this when the backend has returned an
   * official / verified / government-issued state for this item. Never derive it from a status
   * name or from frontend logic.
   */
  official: true;
  tone?: never;
}

export type StatusBadgeProps = StatusBadgeToneProps | StatusBadgeOfficialProps;

/** Short status label. Colour is paired with a shape marker and text, never colour alone. */
export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  function StatusBadge(props, ref) {
    const { status, label, className, official, tone, ...rest } = props;
    const appliedTone = official === true ? "official" : (tone ?? "neutral");
    const text = label ?? humanizeStatus(status);

    return (
      <span
        ref={ref}
        className={cx(styles.root, styles[appliedTone], className)}
        data-status={status}
        data-tone={appliedTone}
        {...rest}
      >
        {appliedTone === "official" ? (
          <SealIcon size={13} className={styles.seal} />
        ) : (
          <span className={styles.marker} aria-hidden="true" />
        )}
        {text}
      </span>
    );
  },
);
