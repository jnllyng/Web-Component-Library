import React from "react";
import styled from "styled-components";
import type { TextProps } from "./Text.types";

const StyledText = styled.p<{ $disabled?: boolean; $bg?: string }>`
  margin: 0;
  padding: 4px;

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? "#d1d5db" : $bg ?? "#CB0000"};

  color: ${({ $disabled }) => ($disabled ? "#000000" : "#ffffff")};

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
`;

export const Text: React.FC<TextProps> = ({
  text,
  disabled = false,
  backgroundColor,
}) => (
  <StyledText $disabled={disabled} $bg={backgroundColor}>
    {text}
  </StyledText>
);