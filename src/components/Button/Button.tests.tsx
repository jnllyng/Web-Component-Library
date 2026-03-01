import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Button } from "./Button";

describe("Button", () => {
  test("button appears on screen", () => {
    render(<Button label="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("disabled button has different background", () => {
    const { container } = render(<Button label="Test" disabled />);
    const btn = container.querySelector("button");
    expect(btn).toBeTruthy();
    expect(btn).toHaveStyle("background-color: #d1d5db");
  });
});