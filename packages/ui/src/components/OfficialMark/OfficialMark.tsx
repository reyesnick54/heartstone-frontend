import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import { ShieldIcon } from "../icons";
import styles from "./OfficialMark.module.css";

export interface OfficialMarkProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  /**
   * The statement, e.g. "An official website of …". Supplied by the deployment's tenant
   * configuration. This component never contains a government, agency or programme name: the
   * wording must be approved for each deployment before it is shown publicly.
   */
  statement: ReactNode;
  /** Link to the page explaining how to recognise official sites. */
  learnMoreHref?: string;
  learnMoreLabel?: string;
  /** Secondary text at the end of the bar, e.g. an environment notice. */
  aside?: ReactNode;
  /** Accessible name of the region. */
  label?: string;
}

/**
 * The "official website" banner at the very top of public and citizen pages. Gold (the shield)
 * is used because this is an official-identity statement.
 */
export const OfficialMark = forwardRef<HTMLElement, OfficialMarkProps>(function OfficialMark(
  {
    statement,
    learnMoreHref,
    learnMoreLabel = "How to tell",
    aside,
    label = "Official website notice",
    className,
    ...rest
  },
  ref,
) {
  return (
    <section ref={ref} aria-label={label} className={cx(styles.root, className)} {...rest}>
      <div className={styles.inner}>
        <span className={styles.statement}>
          <ShieldIcon size={14} className={styles.shield} />
          {statement}
        </span>
        {learnMoreHref && (
          <a href={learnMoreHref} className={styles.link}>
            {learnMoreLabel}
          </a>
        )}
        {aside && <span className={styles.aside}>{aside}</span>}
      </div>
    </section>
  );
});
