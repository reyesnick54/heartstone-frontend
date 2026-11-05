import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormField } from "./FormField";
import { TextField } from "../TextField/TextField";
import { TextArea } from "../TextArea/TextArea";
import { Select } from "../Select/Select";

describe("FormField", () => {
  it("associates label, hint and error with the control", () => {
    render(
      <FormField
        label="Registration number"
        hint="For example C-2024-01234"
        error="Enter the number"
      >
        {(control) => <input {...control} />}
      </FormField>,
    );
    const input = screen.getByRole("textbox", { name: "Registration number" });
    expect(input).toHaveAccessibleDescription("For example C-2024-01234 Error: Enter the number");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("omits aria-describedby and aria-invalid when there is nothing to describe", () => {
    render(<FormField label="Name">{(control) => <input {...control} />}</FormField>);
    const input = screen.getByRole("textbox", { name: "Name" });
    expect(input).not.toHaveAttribute("aria-describedby");
    expect(input).not.toHaveAttribute("aria-invalid");
  });
});

describe("TextField", () => {
  it("is labelled, accepts input and marks optional fields in the label", async () => {
    const user = userEvent.setup();
    render(<TextField label="Business email" type="email" optional />);
    const input = screen.getByRole("textbox", { name: "Business email (optional)" });
    await user.type(input, "hello@example.org");
    expect(input).toHaveValue("hello@example.org");
  });

  it("marks required fields with the required attribute", () => {
    render(<TextField label="Business name" required />);
    expect(screen.getByRole("textbox", { name: "Business name" })).toBeRequired();
  });

  it("shows an error that is read with the field", () => {
    render(<TextField label="Phone" error="Enter a phone number" />);
    const input = screen.getByRole("textbox", { name: "Phone" });
    expect(input).toBeInvalid();
    expect(input).toHaveAccessibleDescription("Error: Enter a phone number");
  });
});

describe("TextArea", () => {
  it("is a labelled multi-line textbox with its hint", () => {
    render(<TextArea label="Trading address" hint="Where your staff will work" />);
    const textarea = screen.getByRole("textbox", { name: "Trading address" });
    expect(textarea.tagName).toBe("TEXTAREA");
    expect(textarea).toHaveAccessibleDescription("Where your staff will work");
  });
});

describe("Select", () => {
  it("is a labelled combobox with its options and a placeholder", async () => {
    const user = userEvent.setup();
    render(
      <Select
        label="Applications for"
        placeholder="Choose"
        options={[
          { value: "me", label: "Only me" },
          { value: "all", label: "Me and businesses I represent" },
        ]}
      />,
    );
    const select = screen.getByRole("combobox", { name: "Applications for" });
    expect(screen.getAllByRole("option")).toHaveLength(3);
    await user.selectOptions(select, "all");
    expect(select).toHaveValue("all");
  });
});
