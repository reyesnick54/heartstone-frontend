// The website's search box (home hero, header, services and search pages). It searches the
// website's own content and opens the results page at /search?q=.
import { useId, useState } from "react";
import { Button, TextField, VisuallyHidden } from "@heartstone/ui";
import { site } from "../lib/paths";
import { useNavigate } from "../router/router";

export interface SiteSearchFormProps {
  /** The field's visible label (or hidden label for the compact header form). */
  label: string;
  hint?: string;
  initial?: string;
  /** Header form: one line, hidden label, smaller button. */
  compact?: boolean;
  className?: string;
  /** Accessible name of the search landmark. */
  landmarkLabel?: string;
}

export function SiteSearchForm({
  label,
  hint,
  initial = "",
  compact = false,
  className,
  landmarkLabel = "Search this website",
}: SiteSearchFormProps) {
  const navigate = useNavigate();
  const [text, setText] = useState(initial);
  const inputId = useId();
  const submit = () => navigate(site.search(text.trim()));

  if (compact) {
    return (
      <form
        role="search"
        aria-label={landmarkLabel}
        className={className ?? "site-header-search"}
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <label htmlFor={inputId}>
          <VisuallyHidden>{label}</VisuallyHidden>
        </label>
        <input
          id={inputId}
          type="search"
          className="site-header-search-input"
          placeholder="Search"
          autoComplete="off"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="site-header-search-button">
          Search
        </button>
      </form>
    );
  }
  return (
    <form
      role="search"
      aria-label={landmarkLabel}
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <TextField
        type="search"
        label={label}
        {...(hint ? { hint } : {})}
        autoComplete="off"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
