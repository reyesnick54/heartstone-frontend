import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./Link.module.css";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** A link on its own line (not inside a sentence): gets a 44px touch target. */
  standalone?: boolean;
  /** Opens in a new tab with `rel="noopener noreferrer"` and tells screen-reader users so. */
  external?: boolean;
}

/**
 * Text link. Router integration (F2) wraps this rather than replacing it, so link styling and
 * behaviour stay in one place.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { standalone = false, external = false, className, children, rel, target, ...rest },
  ref,
) {
  return (
    <a
      ref={ref}
      className={cx(
        styles.root,
        standalone && styles.standalone,
        external && styles.external,
        className,
      )}
      target={external ? "_blank" : target}
      rel={external ? "noopener noreferrer" : rel}
      {...rest}
    >
      {children}
      {external && (
        <>
          {" "}
          <VisuallyHidden>(opens in a new tab)</VisuallyHidden>
        </>
      )}
    </a>
  );
});
