import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";
import { TableFooter } from "../TableFooter";

const meta: Meta<typeof Table> = {
  title: "Components/Table/Table",
  component: Table,
  argTypes: {
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

const Example = (disabled?: boolean) => (
  <Table disabled={disabled}>
    <TableHeader>
      <TableRow>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">Director</TableCell>
        <TableCell as="th">Country</TableCell>
      </TableRow>
    </TableHeader>

    <tbody>
      <TableRow>
        <TableCell>In the mood for love</TableCell>
        <TableCell>Wong Kar Wai</TableCell>
        <TableCell>Hong Kong</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Undine</TableCell>
        <TableCell>Christian Petzold</TableCell>
        <TableCell>Germany</TableCell>
      </TableRow>
    </tbody>

    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Footer</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default: Story = { render: () => Example(false) };
export const Disabled: Story = { render: () => Example(true) };