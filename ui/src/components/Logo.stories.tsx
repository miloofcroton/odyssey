import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import MockLogo from '../assets/logo.jpg';

import { Logo } from './Logo';

const meta = {
  title: 'components/Logo',
  component: Logo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    color: 'dark',
    src: MockLogo,
    alt: 'Mock Logo',
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DarkLogo: Story = {};

export const LightLogo: Story = {
  args: {
    color: 'light',
  },
};
