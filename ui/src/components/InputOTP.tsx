'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:has(:disabled) {
    opacity: 0.5;
  }
`;

const inputStyles = css`
  &:disabled {
    cursor: not-allowed;
  }
`;

const groupStyles = css`
  display: flex;
  align-items: center;
`;

const slotStyles = css`
  border: 1px solid var(--input);
  position: relative;
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  font-size: 0.875rem;
  box-shadow: var(--shadow-xs);
  transition: all 150ms;
  outline: none;

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    border-left-width: 1px;
  }

  &:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  &[data-active="true"] {
    z-index: 10;
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);

    &[aria-invalid="true"] {
      border-color: var(--destructive);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--destructive) 20%, transparent);

      @media (prefers-color-scheme: dark) {
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--destructive) 40%, transparent);
      }
    }
  }

  &[aria-invalid="true"] {
    border-color: var(--destructive);
  }
`;

const caretStyles = css`
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const caretBlinkStyles = css`
  background-color: var(--foreground);
  height: 1rem;
  width: 1px;
  animation: caretBlink 1000ms infinite;

  @keyframes caretBlink {
    0%, 70% { opacity: 1; }
    71%, 100% { opacity: 0; }
  }
`;

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cx(containerStyles, containerClassName)}
      className={cx(inputStyles, className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cx(groupStyles, className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cx(slotStyles, className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={caretStyles}>
          <div className={caretBlinkStyles} />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator,InputOTPSlot };
