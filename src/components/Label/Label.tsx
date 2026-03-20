import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ $disabled?: boolean; $bg?: string }>`
  padding: 6px 10px;
  border-radius: 6px;

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? '#d1d5db' : ($bg ?? '#CB0000')};

  color: ${({ $disabled }) => ($disabled ? '#000000' : '#ffffff')};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  backgroundColor,
}) => (
  <StyledLabel $disabled={disabled} $bg={backgroundColor}>
    {text}
  </StyledLabel>
);
