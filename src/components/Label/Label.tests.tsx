import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label', () => {
  test('renders label text', () => {
    render(<Label text="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('applies disabled background', () => {
    const { container } = render(<Label text="Test" disabled />);
    const el = container.querySelector('span')!;
    expect(el).toHaveStyle('background-color: #d1d5db');
  });
});
