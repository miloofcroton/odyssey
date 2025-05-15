import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

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

  &::placeholder {
    color: hsl(var(--muted-foreground));
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const labelStyles = css`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const wrapperStyles = css`
  display: grid;
  gap: 1rem;
  max-width: 24rem;
  width: 100%;
`;

type InputProps = React.ComponentProps<typeof Input>;

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: InputProps) => (
    <div className={wrapperStyles}>
      <div>
        <label htmlFor="email" className={labelStyles}>Email</label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className={inputStyles}
          {...args}
        />
      </div>
      <div>
        <label htmlFor="username" className={labelStyles}>Username</label>
        <Input
          id="username"
          type="text"
          placeholder="Enter your username"
          className={inputStyles}
          {...args}
        />
      </div>
      <div>
        <label htmlFor="password" className={labelStyles}>Password</label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className={inputStyles}
          {...args}
        />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: InputProps) => (
    <div>
      <label htmlFor="disabled" className={labelStyles}>Disabled</label>
      <Input
        id="disabled"
        type="text"
        placeholder="This input is disabled"
        className={inputStyles}
        disabled
        {...args}
      />
    </div>
  ),
};
