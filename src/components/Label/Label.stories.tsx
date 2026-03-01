import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: "Label" },
};

export const Disabled: Story = {
  args: { text: "Label", disabled: true },
};