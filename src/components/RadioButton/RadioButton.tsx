import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{
  $disabled?: boolean;
  $backgroundColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 8px 10px;
  border-radius: 8px;

  background-color: ${({ $disabled, $backgroundColor }) => {
    if ($disabled) return '#d1d5db';
    if ($backgroundColor) return $backgroundColor;
    return 'transparent';
  }};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  color: ${({ $disabled }) => ($disabled ? '#6b7280' : '#111827')};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  width: 16px;
  height: 16px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  backgroundColor,
  onChange,
}) => {
  return (
    <Wrapper $disabled={disabled} $backgroundColor={backgroundColor}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <span>{label}</span>
    </Wrapper>
  );
};
