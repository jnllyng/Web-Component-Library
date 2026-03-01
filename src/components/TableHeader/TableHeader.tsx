import React from "react";
import styled from "styled-components";
import type { TableHeaderProps } from "./TableHeader.types";

const DEFAULT_BG = "#e0f2fe";
const DISABLED_BG = "#bae6fd";

const StyledThead = styled.thead<{ $disabled?: boolean; $bg?: string }>`
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? DISABLED_BG : $bg ?? DEFAULT_BG};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledThead
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid="table-header"
    >
      {children}
    </StyledThead>
  );
};