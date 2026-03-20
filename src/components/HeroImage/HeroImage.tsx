import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.div<{ $disabled?: boolean; $bg?: string }>`
  width: 100%;
  height: 260px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? '#d1d5db' : ($bg ?? '#f3f4f6')};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  @media (max-width: 600px) {
    height: 200px;
    border-radius: 12px;
  }
`;

const StyledImg = styled.img<{ $disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
`;

const Title = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 18px;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <Wrapper
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid="hero-wrapper"
    >
      <StyledImg src={src} alt={alt} $disabled={disabled} />
      {title && <Title>{title}</Title>}
    </Wrapper>
  );
};
