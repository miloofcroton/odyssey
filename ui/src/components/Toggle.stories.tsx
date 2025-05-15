import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Bold, Italic, Underline } from 'lucide-react';

import { Toggle } from './Toggle';

const toggleStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1;
  background-color: transparent;
  color: hsl(var(--muted-foreground));
  transition: all 0.2s;

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-state="on"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const iconStyles = css`
  height: 1rem;
  width: 1rem;
`;

const groupStyles = css`
  display: inline-flex;
  gap: 0.25rem;
`;

type ToggleProps = React.ComponentProps<typeof Toggle>;

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ToggleProps) => (
    <Toggle aria-label="Toggle italic" className={toggleStyles} {...args}>
      <Italic className={iconStyles} />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: (args: ToggleProps) => (
    <Toggle aria-label="Toggle bold" className={toggleStyles} {...args}>
      <Bold className={iconStyles} />
      <span>Bold</span>
    </Toggle>
  ),
};

export const Group: Story = {
  render: (args: ToggleProps) => (
    <div className={groupStyles}>
      <Toggle aria-label="Toggle bold" className={toggleStyles} {...args}>
        <Bold className={iconStyles} />
      </Toggle>
      <Toggle aria-label="Toggle italic" className={toggleStyles} {...args}>
        <Italic className={iconStyles} />
      </Toggle>
      <Toggle aria-label="Toggle underline" className={toggleStyles} {...args}>
        <Underline className={iconStyles} />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: ToggleProps) => (
    <Toggle
      aria-label="Toggle italic"
      disabled
      className={toggleStyles}
      {...args}
    >
      <Italic className={iconStyles} />
    </Toggle>
  ),
};
