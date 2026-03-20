import React from 'react';
import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const Wrapper = styled.div<{ $disabled?: boolean; $bg?: string }>`
  width: 100%;
  max-width: 320px;
  height: 200px;

  border-radius: 12px;
  overflow: hidden;

  background-color: ${({ $disabled, $bg }) =>
    $disabled ? '#d1d5db' : ($bg ?? '#f3f4f6')};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
const StyledImg = styled.img<{ $disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <Wrapper
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid="img-wrapper"
    >
      <StyledImg src={src} alt={alt} $disabled={disabled} />
    </Wrapper>
  );
};
