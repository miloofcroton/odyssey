import React from 'react';
import { css, cx } from '@linaria/core';

const skeletonStyles = css`
  background-color: color-mix(in srgb, var(--primary) 10%, transparent);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: 0.375rem;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cx(skeletonStyles, className)}
      {...props}
    />
  );
}

export { Skeleton };
