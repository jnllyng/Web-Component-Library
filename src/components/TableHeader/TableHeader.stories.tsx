import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableHeader } from "./TableHeader";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
  argTypes: {
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof TableHeader>;

const Example = (disabled?: boolean) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <TableHeader disabled={disabled}>
      <TableRow>
        <TableCell as="th">Header A</TableCell>
        <TableCell as="th">Header B</TableCell>
      </TableRow>
    </TableHeader>
  </table>
);

export const Default: Story = { render: () => Example(false) };
export const Disabled: Story = { render: () => Example(true) };