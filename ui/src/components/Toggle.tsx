import React from 'react';
import { css, cx } from '@linaria/core';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  transition: color 150ms, box-shadow 150ms;
  outline: none;

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
  }

  & svg:not([class*='size-']) {
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

const variantStyles = {
  default: css`
    background-color: transparent;
  `,
  outline: css`
    border: 1px solid var(--input);
    background-color: transparent;
    box-shadow: var(--shadow-xs);

    &:hover {
      background-color: var(--accent);
      color: var(--accent-foreground);
    }
  `,
};

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

type ToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> & {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
}

const Toggle = ({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ToggleProps) => {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};

export { Toggle, type ToggleProps };
