import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  test("is visible", () => {
    render(<RadioButton label="Pick me" name="t" value="1" />);
    expect(screen.getByText("Pick me")).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    const { container } = render(
      <RadioButton label="Pick me" name="t" value="1" disabled />
    );
    const wrapper = container.querySelector("label");
    expect(wrapper).toBeTruthy();
    expect(wrapper).toHaveStyle("background-color: #d1d5db");
  });
});