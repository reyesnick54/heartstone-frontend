import { forwardRef, useId, type ElementType, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../internal/cx";
import styles from "./Card.module.css";

export type CardPadding = "none" | "compact" | "default" | "roomy";
export type HeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** Heading shown at the top. When set, the card is a labelled region (`section`). */
  title?: ReactNode;
  /** Heading level of `title`. Choose it to fit the page outline. Defaults to 2. */
  titleLevel?: HeadingLevel;
  padding?: CardPadding;
  raised?: boolean;
  /**
   * Gold border for an official / government-issued item. Only set when the backend says the
   * item is official.
   */
  official?: boolean;
  /** Element to render when there is no `title`. Defaults to `div`. */
  as?: ElementType;
}

/** White panel with a border: the main grouping surface in the designs. */
export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  {
    title,
    titleLevel = 2,
    padding = "default",
    raised = false,
    official = false,
    as,
    className,
    children,
    ...rest
  },
  ref,
) {
  const headingId = useId();
  const Component: ElementType = title ? "section" : (as ?? "div");
  const Heading = `h${titleLevel}` as const;

  return (
    <Component
      ref={ref}
      className={cx(
        styles.root,
        styles[`pad-${padding}`],
        raised && styles.raised,
        official && styles.official,
        className,
      )}
      aria-labelledby={title ? headingId : undefined}
      {...rest}
    >
      {title && (
        <Heading id={headingId} className={styles.title}>
          {title}
        </Heading>
      )}
      {children}
    </Component>
  );
});
