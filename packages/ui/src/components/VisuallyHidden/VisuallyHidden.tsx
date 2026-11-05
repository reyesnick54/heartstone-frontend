import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import styles from "./VisuallyHidden.module.css";

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

/** Content read by screen readers but not shown on screen. */
export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  function VisuallyHidden({ className, ...rest }, ref) {
    return <span ref={ref} className={cx(styles.root, className)} {...rest} />;
  },
);
