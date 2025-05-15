import React from 'react';
import { css, cx } from '@linaria/core';
import { Slot } from '@radix-ui/react-slot';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  overflow: hidden;
  transition: color 150ms, box-shadow 150ms;

  & > svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
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
    border-color: transparent;
    background-color: var(--primary);
    color: var(--primary-foreground);
    a& {
      &:hover {
        background-color: color-mix(in srgb, var(--primary) 90%, transparent);
      }
    }
  `,
  secondary: css`
    border-color: transparent;
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    a& {
      &:hover {
        background-color: color-mix(in srgb, var(--secondary) 90%, transparent);
      }
    }
  `,
  destructive: css`
    border-color: transparent;
    background-color: var(--destructive);
    color: white;
    a& {
      &:hover {
        background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
      }
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
    color: var(--foreground);
    a& {
      &:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
    }
  `,
};

type BadgeProps = React.ComponentProps<'span'> & {
  variant?: keyof typeof variants
  asChild?: boolean
}

const Badge = ({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cx(baseStyles, variants[variant], className)}
      {...props}
    />
  );
};

export { Badge, variants as badgeVariants };
