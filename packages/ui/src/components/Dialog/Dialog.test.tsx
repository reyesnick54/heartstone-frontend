import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Dialog } from "./Dialog";

function Example({ role }: { role?: "dialog" | "alertdialog" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Cancel appointment
      </button>
      <p>Background content</p>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Cancel this appointment?"
        description="You can book a new time afterwards."
        {...(role ? { role } : {})}
        footer={
          <>
            <button type="button" onClick={() => setOpen(false)}>
              Keep appointment
            </button>
            <button type="button">Yes, cancel</button>
          </>
        }
      />
    </>
  );
}

describe("Dialog", () => {
  it("is a modal dialog named and described by its title and description", async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(screen.getByRole("button", { name: "Cancel appointment" }));
    const dialog = screen.getByRole("dialog", { name: "Cancel this appointment?" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleDescription("You can book a new time afterwards.");
  });

  it("moves focus in, traps Tab and Shift+Tab, closes on Escape and returns focus", async () => {
    const user = userEvent.setup();
    render(<Example />);
    const opener = screen.getByRole("button", { name: "Cancel appointment" });
    await user.click(opener);

    const close = screen.getByRole("button", { name: "Close" });
    const confirm = screen.getByRole("button", { name: "Yes, cancel" });
    expect(close).toHaveFocus();

    await user.tab();
    expect(screen.getByRole("button", { name: "Keep appointment" })).toHaveFocus();
    await user.tab();
    expect(confirm).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
    await user.tab({ shift: true });
    expect(confirm).toHaveFocus();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(opener).toHaveFocus();
  });

  it("hides and inerts the rest of the page while open, and restores it after", async () => {
    const user = userEvent.setup();
    const { container } = render(<Example />);
    await user.click(screen.getByRole("button", { name: "Cancel appointment" }));
    expect(container).toHaveAttribute("aria-hidden", "true");
    expect(container).toHaveAttribute("inert");
    expect(document.body).toHaveClass("hs-scroll-locked");
    // Background controls are no longer exposed to assistive technology.
    expect(screen.queryByRole("button", { name: "Cancel appointment" })).toBeNull();

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(container).not.toHaveAttribute("aria-hidden");
    expect(container).not.toHaveAttribute("inert");
    expect(document.body).not.toHaveClass("hs-scroll-locked");
  });

  it("supports alertdialog for consequential confirmations", async () => {
    const user = userEvent.setup();
    render(<Example role="alertdialog" />);
    await user.click(screen.getByRole("button", { name: "Cancel appointment" }));
    expect(
      screen.getByRole("alertdialog", { name: "Cancel this appointment?" }),
    ).toBeInTheDocument();
  });
});
