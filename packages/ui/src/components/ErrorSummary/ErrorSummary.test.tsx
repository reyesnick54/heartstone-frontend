import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorSummary } from "./ErrorSummary";

describe("ErrorSummary", () => {
  it("is announced, takes focus, and links each message to its field", async () => {
    const user = userEvent.setup();
    render(
      <>
        <ErrorSummary
          errors={[{ targetId: "reg", message: "Enter the registration number" }]}
          generalErrors={["Something else"]}
        />
        <label htmlFor="reg">Registration number</label>
        <input id="reg" />
      </>,
    );
    const alert = screen.getByRole("alert");
    expect(alert).toHaveFocus();
    expect(alert).toHaveTextContent("There is a problem");
    expect(alert).toHaveTextContent("Something else");
    await user.click(screen.getByRole("link", { name: "Enter the registration number" }));
    expect(screen.getByLabelText("Registration number")).toHaveFocus();
  });

  it("links to another page when the answer is changed elsewhere", () => {
    render(<ErrorSummary errors={[{ href: "/apply?step=2", message: "Enter your email" }]} />);
    expect(screen.getByRole("link", { name: "Enter your email" })).toHaveAttribute(
      "href",
      "/apply?step=2",
    );
  });

  it("renders nothing without errors", () => {
    const { container } = render(<ErrorSummary errors={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
