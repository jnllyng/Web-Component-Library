import React from 'react';
import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const DISABLED_BG = '#bae6fd';

const StyledTr = styled.tr<{ $disabled?: boolean; $bg?: string }>`
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? DISABLED_BG : ($bg ?? 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTr
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid="table-row"
    >
      {children}
    </StyledTr>
  );
};
