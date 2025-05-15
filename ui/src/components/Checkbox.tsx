import React from 'react';
import { css, cx } from '@linaria/core';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

const checkboxStyles = css`
  border: 1px solid var(--input);
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 4px;
  box-shadow: var(--shadow-xs);
  transition: box-shadow 150ms;
  outline: none;

  &[data-state="checked"] {
    background-color: var(--primary);
    color: var(--primary-foreground);
    border-color: var(--primary);
  }

  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px var(--ring-opacity-50);
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 3px var(--destructive-opacity-20);
    border-color: var(--destructive);
  }

  @media (prefers-color-scheme: dark) {
    &[aria-invalid="true"] {
      box-shadow: 0 0 0 3px var(--destructive-opacity-40);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const indicatorStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  transition: none;
`;

const checkIconStyles = css`
  width: 0.875rem;
  height: 0.875rem;
`;

const Checkbox = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cx(checkboxStyles, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={indicatorStyles}
      >
        <CheckIcon className={checkIconStyles} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
