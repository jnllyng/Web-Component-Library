import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card', () => {
  test('is visible', () => {
    render(<Card title="Hello" body="World" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    const { getByTestId } = render(
      <Card title="Hello" body="World" disabled />
    );
    expect(getByTestId('card-wrapper')).toHaveStyle(
      'background-color: #d1d5db'
    );
  });
});
