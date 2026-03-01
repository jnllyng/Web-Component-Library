import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Table } from "./Table";

describe("Table", () => {
  test("is visible", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Hello</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    const { getByTestId } = render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Hello</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(getByTestId("table-outer")).toHaveStyle("background-color: #bae6fd");
  });
});