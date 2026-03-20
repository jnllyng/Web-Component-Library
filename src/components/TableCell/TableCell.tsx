import React from 'react';
import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const DEFAULT_BG = 'transparent';
const DISABLED_BG = '#bae6fd';

const BaseCell = styled.td<{
  $disabled?: boolean;
  $bg?: string;
  $as?: 'td' | 'th';
}>`
  padding: 10px 12px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;

  font-weight: ${({ $as }) => ($as === 'th' ? 700 : 400)};

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? DISABLED_BG : ($bg ?? DEFAULT_BG)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  color: ${({ $disabled }) => ($disabled ? '#1e3a8a' : '#111827')};

  @media (max-width: 600px) {
    padding: 9px 10px;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  as = 'td',
  colSpan,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <BaseCell
      as={as}
      colSpan={colSpan}
      $as={as}
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid="table-cell"
    >
      {children}
    </BaseCell>
  );
};
