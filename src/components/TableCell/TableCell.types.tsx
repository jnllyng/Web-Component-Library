import React from 'react';

export interface TableCellProps {
  children: React.ReactNode;
  as?: 'td' | 'th';
  colSpan?: number;
  disabled?: boolean;
  backgroundColor?: string;
}
