import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableHeader } from "./TableHeader";

describe("TableHeader", () => {
  test("is visible", () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Header</th>
          </tr>
        </TableHeader>
      </table>
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    const { getByTestId } = render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Header</th>
          </tr>
        </TableHeader>
      </table>
    );
    expect(getByTestId("table-header")).toHaveStyle("background-color: #bae6fd");
  });
});