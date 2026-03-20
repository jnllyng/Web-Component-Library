import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText('Cell')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(getByTestId('table-cell')).toHaveStyle('background-color: #bae6fd');
  });
});
