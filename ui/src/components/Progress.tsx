'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as ProgressPrimitive from '@radix-ui/react-progress';

const progressRootStyles = css`
  position: relative;
  height: 0.5rem;
  width: 100%;
  overflow: hidden;
  border-radius: 9999px;
  background-color: hsl(var(--primary) / 0.2);
`;

const progressIndicatorStyles = css`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: hsl(var(--primary));
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Progress = ({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cx(progressRootStyles, className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={progressIndicatorStyles}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

export { Progress };
