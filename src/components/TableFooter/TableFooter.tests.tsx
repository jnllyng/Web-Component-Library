import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableFooter } from "./TableFooter";

describe("TableFooter", () => {
  test("is visible", () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    const { getByTestId } = render(
      <table>
        <TableFooter disabled>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    expect(getByTestId("table-footer")).toHaveStyle("background-color: #bae6fd");
  });
});