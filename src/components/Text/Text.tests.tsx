import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Text } from "./Text";

describe("Text", () => {
  test("renders text", () => {
    render(<Text text="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("disabled background changes", () => {
    const { container } = render(<Text text="Test" disabled />);
    const el = container.querySelector("p")!;
    expect(el).toHaveStyle("background-color: #d1d5db");
  });
});