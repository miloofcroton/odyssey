import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

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

  &:focus-visible {
    outline: none;
    ring: 2px solid hsl(var(--ring));
    ring-offset: 2px;
  }
`;

const labelStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
  cursor: pointer;
`;

const textStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CheckboxProps) => (
    <div className={labelStyles}>
      <Checkbox className={checkboxStyles} id="terms" {...args} />
      <label htmlFor="terms" className={textStyles}>
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: CheckboxProps) => (
    <div className={labelStyles}>
      <Checkbox className={checkboxStyles} id="terms" disabled {...args} />
      <label htmlFor="terms" className={textStyles}>
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const WithText: Story = {
  render: (args: CheckboxProps) => (
    <div className={css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `}>
      <div className={labelStyles}>
        <Checkbox className={checkboxStyles} id="emails" {...args} />
        <div className={css`
          display: grid;
          gap: 0.25rem;
        `}>
          <label
            htmlFor="emails"
            className={css`
              font-size: 0.875rem;
              font-weight: 500;
              line-height: 1;
              cursor: pointer;
            `}
          >
            Marketing emails
          </label>
          <p className={css`
            color: hsl(var(--muted-foreground));
            font-size: 0.875rem;
            line-height: 1.25rem;
          `}>
            Receive emails about our products and services.
          </p>
        </div>
      </div>
    </div>
  ),
};
