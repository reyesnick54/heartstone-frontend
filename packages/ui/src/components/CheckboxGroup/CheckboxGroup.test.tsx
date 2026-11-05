import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CheckboxGroup } from "./CheckboxGroup";

function Harness({ onChange }: { onChange: (v: string[]) => void }) {
  const [value, setValue] = useState<string[]>(["b"]);
  return (
    <CheckboxGroup
      legend="Which roles?"
      hint="Select all that apply"
      error="Select at least one role"
      name="roles"
      options={[
        { value: "a", label: "Cook" },
        { value: "b", label: "Server" },
      ]}
      value={value}
      onChange={(v) => {
        setValue(v);
        onChange(v);
      }}
    />
  );
}

describe("CheckboxGroup", () => {
  it("is a described group whose values keep option order", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Harness onChange={onChange} />);
    const group = screen.getByRole("group", { name: "Which roles?" });
    expect(group).toHaveAccessibleDescription(/Select all that apply.*Select at least one role/);
    expect(screen.getByRole("checkbox", { name: "Server" })).toBeChecked();
    await user.click(screen.getByRole("checkbox", { name: "Cook" }));
    expect(onChange).toHaveBeenLastCalledWith(["a", "b"]);
    await user.click(screen.getByRole("checkbox", { name: "Server" }));
    expect(onChange).toHaveBeenLastCalledWith(["a"]);
  });
});
