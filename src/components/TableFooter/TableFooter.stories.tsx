import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof TableFooter>;

const Example = (disabled?: boolean) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <TableFooter disabled={disabled}>
      <tr>
        <td>Footer</td>
      </tr>
    </TableFooter>
  </table>
);

export const Default: Story = { render: () => Example(false) };
export const Disabled: Story = { render: () => Example(true) };
