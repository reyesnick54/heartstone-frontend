import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import styles from "./SkipLink.module.css";

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Id of the main content element (without `#`). Defaults to `main-content`. */
  targetId?: string;
}

/** First focusable element on every page: jumps keyboard users past navigation. */
export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(
  { targetId = "main-content", className, children = "Skip to main content", ...rest },
  ref,
) {
  return (
    <a ref={ref} href={`#${targetId}`} className={cx(styles.root, className)} {...rest}>
      {children}
    </a>
  );
});
