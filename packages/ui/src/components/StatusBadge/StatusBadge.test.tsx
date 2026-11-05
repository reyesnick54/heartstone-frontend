import { render, screen } from "@testing-library/react";
import { StatusBadge } from "./StatusBadge";

describe("StatusBadge", () => {
  it("shows the backend label and keeps the raw status for traceability", () => {
    render(<StatusBadge status="UNDER_REVIEW" label="Under review · Inspection" tone="info" />);
    const badge = screen.getByText("Under review · Inspection");
    expect(badge).toHaveAttribute("data-status", "UNDER_REVIEW");
    expect(badge).toHaveAttribute("data-tone", "info");
  });

  it("makes a machine status readable when no label is supplied, without reinterpreting it", () => {
    render(<StatusBadge status="AWAITING_APPLICANT" />);
    expect(screen.getByText("Awaiting applicant")).toBeInTheDocument();
  });

  it("defaults to neutral: tone is never inferred from the status name", () => {
    // Even a status that sounds positive or official stays neutral unless the caller says so.
    render(<StatusBadge status="ISSUED" />);
    expect(screen.getByText("Issued")).toHaveAttribute("data-tone", "neutral");
  });

  it("uses the official (gold) style only with the explicit official prop", () => {
    // Example only: a real caller sets `official` from a backend-returned state.
    render(<StatusBadge status="EXAMPLE_OFFICIAL" label="Government issued (example)" official />);
    expect(screen.getByText("Government issued (example)")).toHaveAttribute(
      "data-tone",
      "official",
    );
  });

  it("conveys meaning in text: decorative markers are hidden from assistive technology", () => {
    const { container } = render(<StatusBadge status="DUE" label="Due 15 Oct" tone="warning" />);
    const badge = screen.getByText("Due 15 Oct");
    expect(badge).toHaveTextContent(/^Due 15 Oct$/);
    expect(container.querySelector("[aria-hidden='true']")).not.toBeNull();
  });
});
