import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  test('is visible', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText('Row')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Row</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(getByTestId('table-row')).toHaveStyle('background-color: #bae6fd');
  });
});
