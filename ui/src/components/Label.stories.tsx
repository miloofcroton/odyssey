import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { Label } from './Label';
import { Switch } from './Switch';

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
`;

const wrapperStyles = css`
  display: grid;
  gap: 1.5rem;
  max-width: 24rem;
  width: 100%;
`;

const inputStyles = css`
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: hsl(var(--input-foreground));

  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 1px hsl(var(--ring));
  }
`;

const checkboxStyles = css`
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));

  &[data-state="checked"] {
    border-color: hsl(var(--primary));
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
`;

const switchStyles = css`
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: hsl(var(--muted));
  transition: background-color 0.2s;

  &[data-state="checked"] {
    background-color: hsl(var(--primary));
  }

  &::before {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background-color: hsl(var(--background));
    transition: transform 0.2s;
  }

  &[data-state="checked"]::before {
    transform: translateX(1rem);
  }
`;

const flexStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

type LabelProps = React.ComponentProps<typeof Label>;

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: LabelProps) => (
    <div className={wrapperStyles}>
      <div>
        <Label htmlFor="email" className={labelStyles} {...args}>
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          className={inputStyles}
        />
      </div>
      <div className={flexStyles}>
        <Checkbox id="terms" className={checkboxStyles} />
        <Label htmlFor="terms" className={labelStyles} {...args}>
          Accept terms and conditions
        </Label>
      </div>
      <div className={flexStyles}>
        <Switch id="notifications" className={switchStyles} />
        <Label htmlFor="notifications" className={labelStyles} {...args}>
          Enable notifications
        </Label>
      </div>
    </div>
  ),
};

export const Required: Story = {
  render: (args: LabelProps) => (
    <div>
      <Label htmlFor="username" className={labelStyles} {...args}>
        Username <span className={css`color: hsl(var(--destructive));`}>*</span>
      </Label>
      <Input
        type="text"
        id="username"
        placeholder="Enter your username"
        className={inputStyles}
        required
      />
    </div>
  ),
};
