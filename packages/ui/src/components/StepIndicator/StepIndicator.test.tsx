import { render, screen } from "@testing-library/react";
import { StepIndicator } from "./StepIndicator";

describe("StepIndicator", () => {
  it("marks the current step and links completed ones", () => {
    render(
      <StepIndicator
        label="Application steps"
        current={1}
        steps={[
          { id: "a", label: "About you", href: "?step=1" },
          { id: "b", label: "Employees", href: "?step=2" },
          { id: "c", label: "Check and submit" },
        ]}
      />,
    );
    expect(screen.getByRole("navigation", { name: "Application steps" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About you (completed)" })).toHaveAttribute(
      "href",
      "?step=1",
    );
    const current = screen.getByText("Employees").closest("li");
    expect(current).toHaveAttribute("aria-current", "step");
    expect(screen.queryByRole("link", { name: /Employees/ })).not.toBeInTheDocument();
  });
});
