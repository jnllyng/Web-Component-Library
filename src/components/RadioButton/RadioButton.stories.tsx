import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    onChange: { action: 'changed' },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'example',
    value: 'a',
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = React.useState(args.checked);
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={() => setChecked(true)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    name: 'example',
    value: 'b',
    checked: false,
    disabled: true,
  },
};
