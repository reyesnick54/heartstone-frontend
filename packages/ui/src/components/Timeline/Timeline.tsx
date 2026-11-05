import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./Timeline.module.css";

/** Visual state of a step. The caller decides it from backend data; it never comes from here. */
export type TimelineState = "done" | "current" | "upcoming" | "neutral";

export interface TimelineItem {
  id: string;
  title: ReactNode;
  /** Status text shown with the step (from the backend). Required for done/current, so state is never colour alone. */
  statusText?: ReactNode;
  /** When it happened or is expected, already formatted. */
  meta?: ReactNode;
  description?: ReactNode;
  state?: TimelineState;
}

export interface TimelineProps {
  /** Accessible name of the list, e.g. "Progress". */
  label: string;
  items: readonly TimelineItem[];
  className?: string;
}

const STATE_TEXT: Record<TimelineState, string | undefined> = {
  done: "Completed step:",
  current: "Current step:",
  upcoming: "Upcoming step:",
  neutral: undefined,
};

/**
 * An ordered list of steps or events: case progress, expected stages, history. Each step's
 * state is shown by a marker shape and announced as text, not by colour alone.
 */
export function Timeline({ label, items, className }: TimelineProps) {
  return (
    <ol className={cx(styles.root, className)} aria-label={label}>
      {items.map((item) => {
        const state = item.state ?? "neutral";
        const prefix = STATE_TEXT[state];
        return (
          <li
            key={item.id}
            className={cx(styles.item, styles[state])}
            aria-current={state === "current" ? "step" : undefined}
          >
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.body}>
              <p className={styles.title}>
                {prefix && <VisuallyHidden>{prefix} </VisuallyHidden>}
                {item.title}
                {item.statusText && <span className={styles.status}> {item.statusText}</span>}
              </p>
              {item.meta && <p className={styles.meta}>{item.meta}</p>}
              {item.description && <p className={styles.description}>{item.description}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
