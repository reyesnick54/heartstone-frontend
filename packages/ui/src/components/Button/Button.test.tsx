import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("is a button named by its label, type=button by default", () => {
    render(<Button>Save and continue</Button>);
    const button = screen.getByRole("button", { name: "Save and continue" });
    expect(button).toHaveAttribute("type", "button");
  });

  it("calls onClick when activated with the keyboard", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Pay</Button>);
    await user.tab();
    expect(screen.getByRole("button", { name: "Pay" })).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("stays focusable but inert when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Submit
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).not.toBeDisabled();
    await user.tab();
    expect(button).toHaveFocus();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("announces loading with aria-busy and ignores clicks", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button loading loadingLabel="Submitting" onClick={onClick}>
        Submit
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Submitting" });
    expect(button).toHaveAttribute("aria-busy", "true");
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it.each(["primary", "secondary", "quiet", "danger"] as const)(
    "renders the %s variant",
    (variant) => {
      render(<Button variant={variant}>Action</Button>);
      expect(screen.getByRole("button", { name: "Action" }).className).toMatch(variant);
    },
  );

  it("supports submit buttons and forwards refs", () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(
      <Button ref={ref} type="submit">
        Send
      </Button>,
    );
    expect(ref.current).toBe(screen.getByRole("button", { name: "Send" }));
    expect(ref.current).toHaveAttribute("type", "submit");
  });
});
