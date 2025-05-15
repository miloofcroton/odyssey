import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const avatarStyles = css`
  display: flex;
  border-radius: 100%;
  overflow: hidden;
  width: 2.5rem;
  height: 2.5rem;
`;

const fallbackStyles = css`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--muted));
  font-weight: 500;
`;

type AvatarProps = React.ComponentProps<typeof Avatar>;

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: (args: AvatarProps) => (
    <Avatar className={avatarStyles} {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className={fallbackStyles}>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: (args: AvatarProps) => (
    <Avatar className={avatarStyles} {...args}>
      <AvatarImage src="/broken-image.jpg" alt="@shadcn" />
      <AvatarFallback className={fallbackStyles}>CN</AvatarFallback>
    </Avatar>
  ),
};
