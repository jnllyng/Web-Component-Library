import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $disabled?: boolean; $bg?: string }>`
  padding: 12px 16px;
  border-radius: 10px;
  border: 0;
  width: 100%;
  max-width: 320px;

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? '#d1d5db' : ($bg ?? '#CB0000')};

  color: ${({ $disabled }) => ($disabled ? '#000000' : '#ffffff')};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      $disabled={disabled}
      $bg={backgroundColor}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};
