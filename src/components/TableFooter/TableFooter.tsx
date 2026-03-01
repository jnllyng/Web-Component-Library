import React from "react";
import styled from "styled-components";
import type { TableFooterProps } from "./TableFooter.types";

const DEFAULT_BG = "#e0f2fe";
const DISABLED_BG = "#bae6fd";

const StyledTfoot = styled.tfoot<{ $disabled?: boolean; $bg?: string }>`
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? DISABLED_BG : $bg ?? DEFAULT_BG};
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTfoot
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid="table-footer"
    >
      {children}
    </StyledTfoot>
  );
};