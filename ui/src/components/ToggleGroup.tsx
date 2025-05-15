'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const groupStyles = css`
  display: flex;
  width: fit-content;
  align-items: center;
  border-radius: 0.375rem;

  &[data-variant="outline"] {
    box-shadow: var(--shadow-xs);
  }
`;

const itemStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  transition: color 150ms, box-shadow 150ms;
  outline: none;
  min-width: 0;
  flex: 1;
  flex-shrink: 0;
  box-shadow: none;

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  }

  &:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  &:focus, &:focus-visible {
    z-index: 10;
  }

  &[data-variant="outline"] {
    border-left: 0;

    &:first-child {
      border-left: 1px solid var(--input);
    }
  }

  &:hover {
    background-color: var(--muted);
    color: var(--muted-foreground);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="on"] {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }

  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
  }

  &[aria-invalid="true"] {
    border-color: var(--destructive);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--destructive) 20%, transparent);

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--destructive) 40%, transparent);
    }
  }
`;

const sizeStyles = {
  default: css`
    height: 2.25rem;
    padding: 0 0.5rem;
    min-width: 2.25rem;
  `,
  sm: css`
    height: 2rem;
    padding: 0 0.375rem;
    min-width: 2rem;
  `,
  lg: css`
    height: 2.5rem;
    padding: 0 0.625rem;
    min-width: 2.5rem;
  `,
};

type ToggleGroupContextValue = {
  size?: keyof typeof sizeStyles
  variant?: 'default' | 'outline'
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: 'default',
  variant: 'default',
});

function ToggleGroup({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleGroupContextValue) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cx(groupStyles, className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleGroupContextValue) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cx(
        itemStyles,
        sizeStyles[context.size || size || 'default'],
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
