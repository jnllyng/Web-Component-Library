import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { TableCell } from '../TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof TableRow>;

const Example = (disabled?: boolean) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tbody>
      <TableRow disabled={disabled}>
        <TableCell>Row A</TableCell>
        <TableCell>Row B</TableCell>
      </TableRow>
    </tbody>
  </table>
);

export const Default: Story = { render: () => Example(false) };
export const Disabled: Story = { render: () => Example(true) };
