import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import { Textarea } from './Textarea';

const wrapperStyles = css`
  display: grid;
  gap: 0.5rem;
  width: 24rem;
`;

const textareaStyles = css`
  display: block;
  width: 100%;
  min-height: 5rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  font-size: 0.875rem;
  line-height: 1.5;
  color: hsl(var(--foreground));
  resize: vertical;

  &::placeholder {
    color: hsl(var(--muted-foreground));
  }

  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 1px hsl(var(--ring));
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

type TextareaProps = React.ComponentProps<typeof Textarea>;

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: TextareaProps) => (
    <div className={wrapperStyles}>
      <Label htmlFor="message" className={labelStyles}>
        Your message
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here."
        className={textareaStyles}
        {...args}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: TextareaProps) => (
    <div className={wrapperStyles}>
      <Label htmlFor="disabled" className={labelStyles}>
        Disabled
      </Label>
      <Textarea
        id="disabled"
        placeholder="This textarea is disabled."
        disabled
        className={textareaStyles}
        {...args}
      />
    </div>
  ),
};

export const WithValue: Story = {
  render: (args: TextareaProps) => (
    <div className={wrapperStyles}>
      <Label htmlFor="bio" className={labelStyles}>
        Bio
      </Label>
      <Textarea
        id="bio"
        defaultValue="I'm a software developer based in..."
        className={textareaStyles}
        {...args}
      />
    </div>
  ),
};
