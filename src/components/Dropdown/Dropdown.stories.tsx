import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' },
];

export const Default: Story = {
  args: {
    options,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
  },
};
