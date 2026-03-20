import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: '/sample.jpg',
    alt: 'Hero image',
    title: 'Hero title',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: '/sample.jpg',
    alt: 'Hero image',
    title: 'Disabled Hero',
    disabled: true,
  },
};
