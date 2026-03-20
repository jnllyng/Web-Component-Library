import React from 'react';
import styled from 'styled-components';
import type { TableProps } from './Table.types';

const DEFAULT_BG = '#e0f2fe';
const DISABLED_BG = '#bae6fd';

const Outer = styled.div<{ $disabled?: boolean; $bg?: string }>`
  width: 100%;
  overflow-x: auto;
  padding: 10px;
  border-radius: 12px;

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? DISABLED_BG : ($bg ?? DEFAULT_BG)};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <Outer $disabled={disabled} $bg={backgroundColor} data-testid="table-outer">
      <StyledTable>{children}</StyledTable>
    </Outer>
  );
};
