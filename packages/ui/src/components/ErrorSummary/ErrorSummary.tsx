import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { cx } from "../../internal/cx";
import type { HeadingLevel } from "../Card/Card";
import { ErrorIcon } from "../icons";
import styles from "./ErrorSummary.module.css";

export interface ErrorSummaryItem {
  /** Id of the field (or fieldset) the message is about; the link moves focus there. */
  targetId?: string;
  /** Or a link to another page where the answer can be changed (e.g. an earlier form step). */
  href?: string;
  message: string;
}

export interface ErrorSummaryProps {
  title?: string;
  titleLevel?: HeadingLevel;
  errors: readonly ErrorSummaryItem[];
  /** Messages that belong to no single field. */
  generalErrors?: readonly string[];
  /** Move focus to the summary when it appears (after a failed submit). Default true. */
  focusOnMount?: boolean;
  className?: string;
}

/**
 * "There is a problem" box shown above a form after a failed submit. It is announced
 * (`role="alert"`), takes focus, and links each message to its field.
 */
export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(function ErrorSummary(
  {
    title = "There is a problem",
    titleLevel = 2,
    errors,
    generalErrors = [],
    focusOnMount = true,
    className,
  },
  ref,
) {
  const inner = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLDivElement);
  const Heading = `h${titleLevel}` as const;

  useEffect(() => {
    if (focusOnMount) inner.current?.focus();
  }, [focusOnMount]);

  if (errors.length === 0 && generalErrors.length === 0) return null;

  return (
    <div ref={inner} role="alert" tabIndex={-1} className={cx(styles.root, className)}>
      <Heading className={styles.title}>
        <ErrorIcon size={22} />
        {title}
      </Heading>
      <ul className={styles.list}>
        {generalErrors.map((message) => (
          <li key={`general-${message}`}>{message}</li>
        ))}
        {errors.map((error) => (
          <li key={`${error.targetId ?? error.href ?? ""}-${error.message}`}>
            <a
              href={error.href ?? `#${error.targetId ?? ""}`}
              className={styles.link}
              onClick={(event) => {
                if (error.href || !error.targetId) return;
                const target = document.getElementById(error.targetId);
                if (!target) return;
                event.preventDefault();
                const focusable = target.matches("input, select, textarea, button")
                  ? target
                  : target.querySelector<HTMLElement>("input, select, textarea, button");
                (focusable ?? target).focus();
                target.scrollIntoView?.({ block: "center" });
              }}
            >
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
