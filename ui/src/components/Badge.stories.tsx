import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const badgeStyles = css`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid hsl(var(--border));
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  transition: border-color 0.2s ease-in-out;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));

  &:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
`;

const secondaryStyles = css`
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));

  &:hover {
    background-color: hsl(var(--secondary) / 0.9);
  }
`;

const outlineStyles = css`
  background-color: transparent;
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const destructiveStyles = css`
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));

  &:hover {
    background-color: hsl(var(--destructive) / 0.9);
  }
`;

type BadgeProps = React.ComponentProps<typeof Badge>;

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: BadgeProps) => (
    <Badge className={badgeStyles} {...args}>
      Badge
    </Badge>
  ),
};

export const Secondary: Story = {
  render: (args: BadgeProps) => (
    <Badge className={secondaryStyles} {...args}>
      Secondary
    </Badge>
  ),
};

export const Outline: Story = {
  render: (args: BadgeProps) => (
    <Badge className={outlineStyles} {...args}>
      Outline
    </Badge>
  ),
};

export const Destructive: Story = {
  render: (args: BadgeProps) => (
    <Badge className={destructiveStyles} {...args}>
      Destructive
    </Badge>
  ),
};
