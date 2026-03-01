import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableCell } from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/Table/TableCell",
  component: TableCell,
  argTypes: {
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
    as: { control: "radio", options: ["td", "th"] },
  },
};
export default meta;

type Story = StoryObj<typeof TableCell>;

const Example = (disabled?: boolean) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <tbody>
      <tr>
        <TableCell as="th" disabled={disabled}>Header Cell</TableCell>
        <TableCell disabled={disabled}>Data Cell</TableCell>
      </tr>
    </tbody>
  </table>
);

export const Default: Story = { render: () => Example(false) };
export const Disabled: Story = { render: () => Example(true) };