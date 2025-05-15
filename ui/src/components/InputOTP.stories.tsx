import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';

import { InputOTP, InputOTPGroup, InputOTPSlot } from './InputOTP';

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 24rem;
`;

const groupStyles = css`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const slotStyles = css`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  text-align: center;
  font-size: 1rem;
  line-height: 1;
  color: hsl(var(--foreground));
  transition: all 0.2s;

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

const meta = {
  title: 'Components/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputOTP>;

export default meta;

export const Default = () => (
  <div className={wrapperStyles}>
    <InputOTP maxLength={6}>
      <InputOTPGroup className={groupStyles}>
        <InputOTPSlot index={0} className={slotStyles} />
        <InputOTPSlot index={1} className={slotStyles} />
        <InputOTPSlot index={2} className={slotStyles} />
        <InputOTPSlot index={3} className={slotStyles} />
        <InputOTPSlot index={4} className={slotStyles} />
        <InputOTPSlot index={5} className={slotStyles} />
      </InputOTPGroup>
    </InputOTP>
  </div>
);

export const WithSeparator = () => (
  <div className={wrapperStyles}>
    <InputOTP maxLength={6}>
      <InputOTPGroup className={groupStyles}>
        <InputOTPSlot index={0} className={slotStyles} />
        <InputOTPSlot index={1} className={slotStyles} />
        <InputOTPSlot index={2} className={slotStyles} />
      </InputOTPGroup>
      <div className={css`text-align: center; color: hsl(var(--muted-foreground));`}>-</div>
      <InputOTPGroup className={groupStyles}>
        <InputOTPSlot index={3} className={slotStyles} />
        <InputOTPSlot index={4} className={slotStyles} />
        <InputOTPSlot index={5} className={slotStyles} />
      </InputOTPGroup>
    </InputOTP>
  </div>
);

export const Disabled = () => (
  <div className={wrapperStyles}>
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup className={groupStyles}>
        <InputOTPSlot index={0} className={slotStyles} />
        <InputOTPSlot index={1} className={slotStyles} />
        <InputOTPSlot index={2} className={slotStyles} />
        <InputOTPSlot index={3} className={slotStyles} />
        <InputOTPSlot index={4} className={slotStyles} />
        <InputOTPSlot index={5} className={slotStyles} />
      </InputOTPGroup>
    </InputOTP>
  </div>
);
