import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader2 } from 'lucide-react';

import { Button } from './Button';

const baseButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const defaultStyles = css`
  ${baseButtonStyles}
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));

  &:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
`;

const secondaryStyles = css`
  ${baseButtonStyles}
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));

  &:hover {
    background-color: hsl(var(--secondary) / 0.9);
  }
`;

const destructiveStyles = css`
  ${baseButtonStyles}
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));

  &:hover {
    background-color: hsl(var(--destructive) / 0.9);
  }
`;

const outlineStyles = css`
  ${baseButtonStyles}
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  color: hsl(var(--foreground));

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const ghostStyles = css`
  ${baseButtonStyles}
  background-color: transparent;
  color: hsl(var(--foreground));

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const linkStyles = css`
  ${baseButtonStyles}
  background-color: transparent;
  color: hsl(var(--primary));
  text-decoration-line: underline;

  &:hover {
    text-decoration-line: none;
  }
`;

const iconStyles = `
  height: 1rem;
  width: 1rem;
`;

type ButtonProps = React.ComponentProps<typeof Button>;

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ButtonProps) => (
    <Button className={defaultStyles} {...args}>
      Button
    </Button>
  ),
};

export const Secondary: Story = {
  render: (args: ButtonProps) => (
    <Button className={secondaryStyles} {...args}>
      Secondary
    </Button>
  ),
};

export const Destructive: Story = {
  render: (args: ButtonProps) => (
    <Button className={destructiveStyles} {...args}>
      Destructive
    </Button>
  ),
};

export const Outline: Story = {
  render: (args: ButtonProps) => (
    <Button className={outlineStyles} {...args}>
      Outline
    </Button>
  ),
};

export const Ghost: Story = {
  render: (args: ButtonProps) => (
    <Button className={ghostStyles} {...args}>
      Ghost
    </Button>
  ),
};

export const Link: Story = {
  render: (args: ButtonProps) => (
    <Button className={linkStyles} {...args}>
      Link
    </Button>
  ),
};

export const Loading: Story = {
  render: (args: ButtonProps) => (
    <Button className={defaultStyles} disabled {...args}>
      <Loader2 className={css`
        ${iconStyles}
        animation: spin 2s linear infinite;
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `} />
      Please wait
    </Button>
  ),
};

export const WithIcon: Story = {
  render: (args: ButtonProps) => (
    <Button className={defaultStyles} {...args}>
      <Loader2 className={css`${iconStyles}`} />
      Login
    </Button>
  ),
};
