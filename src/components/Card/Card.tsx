import React from "react";
import styled from "styled-components";
import type { CardProps } from "./Card.types";

const Wrapper = styled.article<{
  $disabled?: boolean;
  $backgroundColor?: string;
}>`
  width: 100%;
  max-width: 420px;

  border-radius: 16px;
  padding: 16px;

  background-color: ${({ $disabled, $backgroundColor }) => {
    if ($disabled) return "#d1d5db";
    if ($backgroundColor) return $backgroundColor;
    return "#ffffff";
  }};

  border: 1px solid ${({ $disabled }) => ($disabled ? "#cbd5e1" : "#e5e7eb")};

  box-shadow: ${({ $disabled }) =>
    $disabled ? "none" : "0 6px 18px rgba(0,0,0,0.08)"};

  color: ${({ $disabled }) => ($disabled ? "#6b7280" : "#111827")};

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 14px;
    border-radius: 12px;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  line-height: 1.2;
`;

const Body = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`;

export const Card: React.FC<CardProps> = ({
  title,
  body,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <Wrapper
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="card-wrapper"
    >
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};