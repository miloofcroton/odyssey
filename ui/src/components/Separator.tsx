'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const separatorStyles = css`
  background-color: var(--border);
  flex-shrink: 0;

  &[data-orientation="horizontal"] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation="vertical"] {
    height: 100%;
    width: 1px;
  }
`;

const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cx(separatorStyles, className)}
      {...props}
    />
  );
};

export { Separator };
