import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("toggles with the keyboard and is named by its label", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Email me updates" />);
    const checkbox = screen.getByRole("checkbox", { name: "Email me updates" });
    await user.tab();
    expect(checkbox).toHaveFocus();
    await user.keyboard(" ");
    expect(checkbox).toBeChecked();
  });

  it("toggles when the label is clicked", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="I confirm the details are correct" />);
    await user.click(screen.getByText("I confirm the details are correct"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("reads the hint and error with the checkbox", () => {
    render(
      <Checkbox label="Declaration" hint="Required to submit" error="Confirm the declaration" />,
    );
    const checkbox = screen.getByRole("checkbox", { name: /Declaration/ });
    expect(checkbox).toHaveAccessibleDescription(
      "Required to submit Error: Confirm the declaration",
    );
    expect(checkbox).toBeInvalid();
  });
});
