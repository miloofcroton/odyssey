import React from 'react';
import { css, cx } from '@linaria/core';

const alertStyles = {
  base: css`
    position: relative;
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid;
    padding: 1rem 1rem 0.75rem;
    font-size: 0.875rem;
    display: grid;
    grid-template-columns: 0 1fr;
    gap: 0.125rem 0;
    align-items: start;

    &:has(>svg) {
      grid-template-columns: calc(var(--spacing)*4) 1fr;
      column-gap: 0.75rem;
    }

    & > svg {
      width: 1rem;
      height: 1rem;
      transform: translateY(0.125rem);
      color: currentColor;
    }
  `,
  variants: {
    default: css`
      background-color: var(--background);
      color: var(--foreground);
    `,
    destructive: css`
      color: var(--destructive-foreground);
      & > svg {
        color: currentColor;
      }
      [data-slot="alert-description"] {
        color: color-mix(in srgb, var(--destructive-foreground) 80%, transparent);
      }
    `,
  },
};

const Alert = ({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & { variant?: 'default' | 'destructive' }) => {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cx(alertStyles.base, alertStyles.variants[variant], className)}
      {...props}
    />
  );
};

const AlertTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-title"
      className={cx(
        css`
          grid-column-start: 2;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 1rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDescription = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-description"
      className={cx(
        css`
          color: var(--muted-foreground);
          grid-column-start: 2;
          display: grid;
          justify-items: start;
          gap: 0.25rem;
          font-size: 0.875rem;

          & p {
            line-height: 1.65;
          }
        `,
        className
      )}
      {...props}
    />
  );
};

export { Alert, AlertDescription,AlertTitle };
