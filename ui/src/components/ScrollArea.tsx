'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const scrollAreaStyles = css`
  position: relative;
`;

const viewportStyles = css`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: color 150ms, box-shadow 150ms;

  &:focus-visible {
    outline: 1px solid var(--ring);
    box-shadow: 0 0 0 4px var(--ring-opacity-10);
  }

  @media (prefers-color-scheme: dark) {
    &:focus-visible {
      box-shadow: 0 0 0 4px var(--ring-opacity-20);
    }
  }
`;

const scrollbarStyles = css`
  display: flex;
  touch-action: none;
  padding: 1px;
  transition: colors 150ms;
  user-select: none;

  &[data-orientation="vertical"] {
    width: 0.625rem;
    height: 100%;
    border-left: 1px solid transparent;
  }

  &[data-orientation="horizontal"] {
    height: 0.625rem;
    flex-direction: column;
    border-top: 1px solid transparent;
  }
`;

const thumbStyles = css`
  position: relative;
  flex: 1;
  background-color: var(--border);
  border-radius: 9999px;
`;

const ScrollArea = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) => {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cx(scrollAreaStyles, className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={viewportStyles}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

const ScrollBar = ({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cx(scrollbarStyles, className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={thumbStyles}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

export { ScrollArea, ScrollBar };
