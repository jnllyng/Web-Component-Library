import React from "react";
import styled from "styled-components";
import type { DropdownProps } from "./Dropdown.types";

const Wrapper = styled.div<{ $disabled?: boolean; $bg?: string }>`
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? "#d1d5db" : $bg ?? "transparent"};

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor,
}) => (
  <Wrapper $disabled={disabled} $bg={backgroundColor}>
    <select disabled={disabled}>
      {options.map((o) => (
        <option key={o.value}>{o.label}</option>
      ))}
    </select>
  </Wrapper>
);