'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const rootStyles = css`
  display: inline-flex;
  height: 1.25rem;
  width: 2.25rem;
  flex-shrink: 0;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  box-shadow: var(--shadow-xs);
  transition: all 150ms;
  outline: none;

  &[data-state="checked"] {
    background-color: var(--primary);
  }

  &[data-state="unchecked"] {
    background-color: var(--input);
  }

  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px var(--ring-opacity-50);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const thumbStyles = css`
  pointer-events: none;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-color: var(--background);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: transform 150ms;

  &[data-state="checked"] {
    transform: translateX(1rem);
  }

  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`;

const Switch = ({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cx(rootStyles, className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={thumbStyles}
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
