import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./StepIndicator.module.css";

export interface StepIndicatorStep {
  id: string;
  label: ReactNode;
  /** Link to the step, for steps the person may go back to. */
  href?: string;
}

export interface StepIndicatorProps {
  /** Accessible name, e.g. "Application steps". */
  label?: string;
  steps: readonly StepIndicatorStep[];
  /** Index of the current step (0-based). */
  current: number;
  className?: string;
}

/** Numbered steps of a multi-page form. The current step has `aria-current="step"`. */
export function StepIndicator({ label = "Steps", steps, current, className }: StepIndicatorProps) {
  return (
    <nav aria-label={label} className={className}>
      <ol className={styles.list}>
        {steps.map((step, index) => {
          const state = index < current ? "done" : index === current ? "current" : "upcoming";
          const text = (
            <>
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>
              <span>
                {step.label}
                {state === "done" && (
                  <>
                    {" "}
                    <VisuallyHidden>(completed)</VisuallyHidden>
                  </>
                )}
              </span>
            </>
          );
          return (
            <li
              key={step.id}
              className={cx(styles.step, styles[state])}
              aria-current={state === "current" ? "step" : undefined}
            >
              {step.href && state !== "current" ? (
                <a href={step.href} className={styles.link}>
                  {text}
                </a>
              ) : (
                <span className={styles.link}>{text}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
