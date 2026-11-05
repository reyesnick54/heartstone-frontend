import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup } from "./RadioGroup";

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No, we own them" },
];

describe("RadioGroup", () => {
  it("is a group named by its legend, with a description from the hint", () => {
    render(
      <RadioGroup
        legend="Does the business rent its premises?"
        hint="If yes, we'll ask for your lease."
        name="rent"
        options={options}
      />,
    );
    const group = screen.getByRole("group", { name: "Does the business rent its premises?" });
    expect(group).toHaveAccessibleDescription("If yes, we'll ask for your lease.");
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("selects with arrow keys (native radio behaviour) and reports changes", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup
        legend="Rent?"
        name="rent"
        options={options}
        defaultValue="yes"
        onChange={onChange}
      />,
    );
    const yes = screen.getByRole("radio", { name: "Yes" });
    expect(yes).toBeChecked();
    await user.click(screen.getByRole("radio", { name: "No, we own them" }));
    expect(onChange).toHaveBeenCalledWith("no", expect.anything());
    expect(screen.getByRole("radio", { name: "No, we own them" })).toBeChecked();
  });

  it("announces errors with the group", () => {
    render(<RadioGroup legend="Rent?" name="rent" options={options} error="Select yes or no" />);
    expect(screen.getByRole("group", { name: "Rent?" })).toHaveAccessibleDescription(
      "Error: Select yes or no",
    );
  });
});
