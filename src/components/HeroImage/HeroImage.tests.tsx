import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  test('is visible', () => {
    render(<HeroImage src="/sample.jpg" alt="hero" />);
    expect(screen.getByAltText('hero')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    const { getByTestId } = render(
      <HeroImage src="/sample.jpg" alt="hero" disabled />
    );
    expect(getByTestId('hero-wrapper')).toHaveStyle(
      'background-color: #d1d5db'
    );
  });
});
