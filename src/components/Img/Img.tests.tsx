import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img', () => {
  test('is visible', () => {
    render(<Img src="/sample.jpg" alt="test-img" />);
    expect(screen.getByAltText('test-img')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    const { getByTestId } = render(
      <Img src="/sample.jpg" alt="test-img" disabled />
    );
    expect(getByTestId('img-wrapper')).toHaveStyle('background-color: #d1d5db');
  });
});
