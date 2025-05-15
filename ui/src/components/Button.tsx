import React from 'react';
import { css, cx } from '@linaria/core';
import { Slot } from '@radix-ui/react-slot';

const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 150ms, box-shadow 150ms;
  flex-shrink: 0;
  outline: none;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;

    &:not([class*='size-']) {
      width: 1rem;
      height: 1rem;
    }
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
`;

const variants = {
  default: css`
    background-color: var(--primary);
    color: var(--primary-foreground);
    box-shadow: var(--shadow-xs);
    &:hover {
      background-color: color-mix(in srgb, var(--primary) 90%, transparent);
    }
  `,
  destructive: css`
    background-color: var(--destructive);
    color: white;
    box-shadow: var(--shadow-xs);
    &:hover {
      background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px var(--destructive-opacity-20);
    }
    @media (prefers-color-scheme: dark) {
      &:focus-visible {
        box-shadow: 0 0 0 3px var(--destructive-opacity-40);
      }
    }
  `,
  outline: css`
    border: 1px solid var(--input);
    background-color: var(--background);
    box-shadow: var(--shadow-xs);
    &:hover {
      background-color: var(--accent);
      color: var(--accent-foreground);
    }
  `,
  secondary: css`
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    box-shadow: var(--shadow-xs);
    &:hover {
      background-color: color-mix(in srgb, var(--secondary) 80%, transparent);
    }
  `,
  ghost: css`
    &:hover {
      background-color: var(--accent);
      color: var(--accent-foreground);
    }
  `,
  link: css`
    color: var(--primary);
    text-underline-offset: 4px;
    &:hover {
      text-decoration: underline;
    }
  `,
};

const sizes = {
  default: css`
    height: 2.25rem;
    padding: 0.5rem 1rem;
    &:has(> svg) {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  `,
  sm: css`
    height: 2rem;
    border-radius: 0.375rem;
    gap: 0.375rem;
    padding: 0 0.75rem;
    &:has(> svg) {
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }
  `,
  lg: css`
    height: 2.5rem;
    border-radius: 0.375rem;
    padding: 0 1.5rem;
    &:has(> svg) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `,
  icon: css`
    width: 2.25rem;
    height: 2.25rem;
  `,
};

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  asChild?: boolean
}

const Button = ({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cx(
        baseButtonStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export { Button, variants as buttonVariants };
