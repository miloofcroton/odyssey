import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Check, ChevronDown } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './Select';

const triggerStyles = css`
  display: inline-flex;
  height: 2.5rem;
  width: 12rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 1.25rem;

  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 1px hsl(var(--ring));
  }

  &[data-placeholder] {
    color: hsl(var(--muted-foreground));
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 50;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: scale-in 0.2s ease-out;

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const labelStyles = css`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--muted-foreground));
`;

const itemStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  padding: 0.5rem 0.75rem;
  padding-right: 2rem;
  font-size: 0.875rem;
  outline: none;
  color: hsl(var(--foreground));

  &[data-highlighted] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const iconStyles = css`
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
`;

const checkStyles = css`
  position: absolute;
  right: 0.5rem;
  height: 1rem;
  width: 1rem;
`;

type SelectProps = React.ComponentProps<typeof Select>;

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SelectProps) => (
    <Select {...args}>
      <SelectTrigger className={triggerStyles}>
        <SelectValue placeholder="Select a fruit" />
        <ChevronDown className={iconStyles} />
      </SelectTrigger>
      <SelectContent className={contentStyles}>
        <SelectGroup>
          <SelectLabel className={labelStyles}>Fruits</SelectLabel>
          <SelectItem value="apple" className={itemStyles}>
            Apple
            <Check className={checkStyles} />
          </SelectItem>
          <SelectItem value="banana" className={itemStyles}>
            Banana
            <Check className={checkStyles} />
          </SelectItem>
          <SelectItem value="orange" className={itemStyles}>
            Orange
            <Check className={checkStyles} />
          </SelectItem>
          <SelectItem value="grape" className={itemStyles}>
            Grape
            <Check className={checkStyles} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args: SelectProps) => (
    <Select disabled {...args}>
      <SelectTrigger className={triggerStyles}>
        <SelectValue placeholder="Select a fruit" />
        <ChevronDown className={iconStyles} />
      </SelectTrigger>
      <SelectContent className={contentStyles}>
        <SelectGroup>
          <SelectLabel className={labelStyles}>Fruits</SelectLabel>
          <SelectItem value="apple" className={itemStyles}>
            Apple
            <Check className={checkStyles} />
          </SelectItem>
          <SelectItem value="banana" className={itemStyles}>
            Banana
            <Check className={checkStyles} />
          </SelectItem>
          <SelectItem value="orange" className={itemStyles}>
            Orange
            <Check className={checkStyles} />
          </SelectItem>
          <SelectItem value="grape" className={itemStyles}>
            Grape
            <Check className={checkStyles} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
