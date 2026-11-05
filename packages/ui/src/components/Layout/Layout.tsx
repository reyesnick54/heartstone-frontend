import { forwardRef, type ElementType, type HTMLAttributes } from "react";
import { cx } from "../../internal/cx";
import styles from "./Layout.module.css";

/** Spacing steps available to layout primitives (see `space` in @heartstone/tokens). */
export type LayoutGap = "0" | "1" | "1-5" | "2" | "3" | "4" | "5" | "6" | "8" | "10";
export type LayoutAlign = "start" | "center" | "end" | "baseline" | "stretch";
export type LayoutJustify = "start" | "center" | "end" | "between";

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  gap?: LayoutGap | undefined;
  align?: LayoutAlign | undefined;
  justify?: LayoutJustify | undefined;
  /** Element to render. Use a semantic element (`section`, `ul`, `nav`) where one fits. */
  as?: ElementType;
}

function classes(
  base: string | undefined,
  { gap, align, justify }: Pick<LayoutProps, "gap" | "align" | "justify">,
) {
  return cx(
    base,
    gap && styles[`gap-${gap}`],
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
  );
}

/** Vertical flow with consistent gaps. */
export const Stack = forwardRef<HTMLElement, LayoutProps>(function Stack(
  { gap = "4", align, justify, as: Component = "div", className, ...rest },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={cx(classes(styles.stack, { gap, align, justify }), className)}
      {...rest}
    />
  );
});

/** Horizontal group that wraps onto new lines (buttons, badges, metadata). */
export const Cluster = forwardRef<HTMLElement, LayoutProps>(function Cluster(
  { gap = "2", align = "center", justify, as: Component = "div", className, ...rest },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={cx(classes(styles.cluster, { gap, align, justify }), className)}
      {...rest}
    />
  );
});
