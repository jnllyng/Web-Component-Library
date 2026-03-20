import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
];

describe('Dropdown', () => {
  test('is visible', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    const { container } = render(<Dropdown options={options} disabled />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle('background-color: #d1d5db');
  });
});
