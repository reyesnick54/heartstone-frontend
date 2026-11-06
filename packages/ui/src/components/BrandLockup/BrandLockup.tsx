import type { AnchorHTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import type { TenantImage } from "../../tenant";
import styles from "./BrandLockup.module.css";

export type BrandLockupSize = "sm" | "md" | "lg";

export interface BrandLockupProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> {
  /** Where the lockup links to, normally the home page. */
  href: string;
  /** The image (from tenant configuration). Pick the variant for the background it sits on. */
  image: TenantImage;
  /** Alternative text (from tenant configuration), e.g. the platform's name. */
  alt: string;
  /** Rendered height: `sm` 36px, `md` 44px (default), `lg` 56px. Width follows the image. */
  size?: BrandLockupSize;
}

/**
 * The tenant's logo lockup as a home link. All values come from tenant configuration; this
 * component names no government or programme.
 */
export function BrandLockup({
  href,
  image,
  alt,
  size = "md",
  className,
  ...rest
}: BrandLockupProps) {
  return (
    <a href={href} className={cx(styles.root, className)} {...rest}>
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        className={cx(styles.image, styles[size])}
      />
    </a>
  );
}
