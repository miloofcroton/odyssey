'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const tabsStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const listStyles = css`
  background-color: var(--muted);
  color: var(--muted-foreground);
  display: inline-flex;
  height: 2.25rem;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const triggerStyles = css`
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  transition: color 150ms, box-shadow 150ms;

  &:focus-visible {
    border-color: var(--ring);
    outline: 1px solid var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="active"] {
    background-color: var(--background);
    color: var(--foreground);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  & svg:not([class*='size-']) {
    width: 1rem;
    height: 1rem;
  }
`;

const contentStyles = css`
  flex: 1;
  outline: none;
`;

const Tabs = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cx(tabsStyles, className)}
      {...props}
    />
  );
};

const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cx(listStyles, className)}
      {...props}
    />
  );
};

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cx(triggerStyles, className)}
      {...props}
    />
  );
};

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cx(contentStyles, className)}
      {...props}
    />
  );
};

export { Tabs, TabsContent,TabsList, TabsTrigger };
