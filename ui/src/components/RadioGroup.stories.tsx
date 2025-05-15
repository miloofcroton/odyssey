import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import {
  RadioGroup,
  RadioGroupItem,
} from './RadioGroup';

const radioGroupStyles = css`
  display: grid;
  gap: 1rem;
  max-width: 24rem;
  width: 100%;
`;

const itemWrapperStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const radioItemStyles = css`
  aspect-ratio: 1;
  width: 1rem;
  border-radius: 100%;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));

  &[data-state="checked"] {
    border-color: hsl(var(--primary));
    background-color: hsl(var(--primary));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary));
  }
`;

const labelStyles = css`
  font-size: 0.875rem;
  line-height: 1;
  color: hsl(var(--foreground));
`;

const descriptionStyles = css`
  font-size: 0.875rem;
  line-height: 1.25;
  color: hsl(var(--muted-foreground));
`;

type RadioGroupProps = React.ComponentProps<typeof RadioGroup>;

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: RadioGroupProps) => (
    <RadioGroup defaultValue="comfortable" className={radioGroupStyles} {...args}>
      <div className={itemWrapperStyles}>
        <RadioGroupItem value="default" className={radioItemStyles} id="default" />
        <Label htmlFor="default" className={labelStyles}>Default</Label>
      </div>
      <div className={itemWrapperStyles}>
        <RadioGroupItem value="comfortable" className={radioItemStyles} id="comfortable" />
        <Label htmlFor="comfortable" className={labelStyles}>Comfortable</Label>
      </div>
      <div className={itemWrapperStyles}>
        <RadioGroupItem value="compact" className={radioItemStyles} id="compact" />
        <Label htmlFor="compact" className={labelStyles}>Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: (args: RadioGroupProps) => (
    <RadioGroup defaultValue="card" className={radioGroupStyles} {...args}>
      <div className={itemWrapperStyles}>
        <RadioGroupItem value="card" className={radioItemStyles} id="card" />
        <div>
          <Label htmlFor="card" className={labelStyles}>Card</Label>
          <p className={descriptionStyles}>Pay with credit or debit card</p>
        </div>
      </div>
      <div className={itemWrapperStyles}>
        <RadioGroupItem value="paypal" className={radioItemStyles} id="paypal" />
        <div>
          <Label htmlFor="paypal" className={labelStyles}>PayPal</Label>
          <p className={descriptionStyles}>Pay with your PayPal account</p>
        </div>
      </div>
      <div className={itemWrapperStyles}>
        <RadioGroupItem value="apple" className={radioItemStyles} id="apple" />
        <div>
          <Label htmlFor="apple" className={labelStyles}>Apple Pay</Label>
          <p className={descriptionStyles}>Pay with Apple Pay</p>
        </div>
      </div>
    </RadioGroup>
  ),
};
