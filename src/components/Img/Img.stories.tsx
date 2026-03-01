import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "/sample.jpg",
    alt: "Sample image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "/sample.jpg",
    alt: "Sample image",
    disabled: true,
  },
};