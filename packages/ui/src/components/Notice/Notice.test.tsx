import { render, screen } from "@testing-library/react";
import { Alert, Notice } from "./Notice";

describe("Notice", () => {
  it("announces errors assertively with role=alert", () => {
    render(
      <Notice tone="error" title="There is a problem">
        Enter the business registration number
      </Notice>,
    );
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("There is a problem");
    expect(
      screen.getByRole("heading", { level: 2, name: "There is a problem" }),
    ).toBeInTheDocument();
  });

  it("announces success politely with role=status", () => {
    render(<Notice tone="success">Your application has been submitted.</Notice>);
    expect(screen.getByRole("status")).toHaveTextContent("Your application has been submitted.");
  });

  it("does not announce static information or warnings by default", () => {
    render(
      <>
        <Notice tone="info">Paying a fee does not decide your application.</Notice>
        <Notice tone="warning">Due 8 October.</Notice>
      </>,
    );
    expect(screen.queryByRole("status")).toBeNull();
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("lets the caller override announcement, and exposes the Alert alias", () => {
    render(
      <Alert tone="warning" announce="alert">
        Session expires in 2 minutes.
      </Alert>,
    );
    expect(screen.getByRole("alert")).toHaveAttribute("data-tone", "warning");
  });
});
