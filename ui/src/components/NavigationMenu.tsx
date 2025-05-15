'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon } from 'lucide-react';

const menuStyles = css`
  position: relative;
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const listStyles = css`
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const itemStyles = css`
  position: relative;
`;

const triggerStyles = css`
  display: inline-flex;
  height: 2.25rem;
  width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: var(--background);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 150ms, box-shadow 150ms;

  &:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="open"] {
    background-color: color-mix(in srgb, var(--accent) 50%, transparent);
    color: var(--accent-foreground);

    &:hover, &:focus {
      background-color: var(--accent);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--ring);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--ring) 10%, transparent);

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--ring) 20%, transparent);
      outline-color: color-mix(in srgb, var(--ring) 40%, transparent);
    }
  }
`;

const triggerIconStyles = css`
  position: relative;
  top: 1px;
  margin-left: 0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  transition: transform 300ms;

  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;

const contentStyles = css`
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  padding-right: 0.625rem;

  &[data-motion^="from-"] { animation: contentIn 150ms ease-out; }
  &[data-motion^="to-"] { animation: contentOut 150ms ease-in; }
  &[data-motion="from-end"] { animation: slideFromRight 150ms ease-out; }
  &[data-motion="from-start"] { animation: slideFromLeft 150ms ease-out; }
  &[data-motion="to-end"] { animation: slideToRight 150ms ease-in; }
  &[data-motion="to-start"] { animation: slideToLeft 150ms ease-in; }

  @media (min-width: 768px) {
    position: absolute;
    width: auto;
  }

  .group[data-viewport="false"] & {
    background-color: var(--popover);
    color: var(--popover-foreground);
    position: absolute;
    top: 100%;
    margin-top: 0.375rem;
    overflow: hidden;
    border-radius: 0.375rem;
    border: 1px solid var(--border);
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.1);
    transition: all 200ms;

    &[data-state="open"] {
      animation: zoomIn 200ms ease-out;
    }

    &[data-state="closed"] {
      animation: zoomOut 200ms ease-in;
    }
  }

  [data-slot="navigation-menu-link"] {
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  @keyframes contentIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes contentOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes slideFromRight {
    from { transform: translateX(13rem); }
    to { transform: translateX(0); }
  }

  @keyframes slideFromLeft {
    from { transform: translateX(-13rem); }
    to { transform: translateX(0); }
  }

  @keyframes slideToRight {
    from { transform: translateX(0); }
    to { transform: translateX(13rem); }
  }

  @keyframes slideToLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-13rem); }
  }

  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes zoomOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }
`;

const viewportWrapperStyles = css`
  position: absolute;
  top: 100%;
  left: 0;
  isolation: isolate;
  z-index: 50;
  display: flex;
  justify-content: center;
`;

const viewportStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  position: relative;
  margin-top: 0.375rem;
  height: var(--radix-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.1);
  transform-origin: top center;

  &[data-state="open"] {
    animation: viewportShow 150ms ease-out;
  }

  &[data-state="closed"] {
    animation: viewportHide 150ms ease-in;
  }

  @media (min-width: 768px) {
    width: var(--radix-navigation-menu-viewport-width);
  }

  @keyframes viewportShow {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes viewportHide {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }
`;

const linkStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-radius: 0.125rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  transition: color 150ms, box-shadow 150ms;

  & svg:not([class*='text-']) {
    color: var(--muted-foreground);
  }

  & svg:not([class*='size-']) {
    width: 1rem;
    height: 1rem;
  }

  &:hover, &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-active="true"] {
    background-color: color-mix(in srgb, var(--accent) 50%, transparent);
    color: var(--accent-foreground);

    &:hover, &:focus {
      background-color: var(--accent);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--ring);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--ring) 10%, transparent);

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--ring) 20%, transparent);
      outline-color: color-mix(in srgb, var(--ring) 40%, transparent);
    }
  }
`;

const indicatorStyles = css`
  top: 100%;
  z-index: 1;
  display: flex;
  height: 0.375rem;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  &[data-state="visible"] {
    animation: indicatorShow 150ms ease-out;
  }

  &[data-state="hidden"] {
    animation: indicatorHide 150ms ease-in;
  }

  @keyframes indicatorShow {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes indicatorHide {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const indicatorArrowStyles = css`
  background-color: var(--border);
  position: relative;
  top: 60%;
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(45deg);
  border-top-left-radius: 0.125rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.1);
`;

const NavigationMenu = ({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) => {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cx(menuStyles, className)}
      {...props}
    >
      {children}
      {viewport && (
        <div className={viewportWrapperStyles}>
          <NavigationMenuViewport />
        </div>
      )}
    </NavigationMenuPrimitive.Root>
  );
};

const NavigationMenuList = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) => {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cx(listStyles, className)}
      {...props}
    />
  );
};

const NavigationMenuItem = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) => {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cx(itemStyles, className)}
      {...props}
    />
  );
};

const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) => {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cx(triggerStyles, className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className={triggerIconStyles} />
    </NavigationMenuPrimitive.Trigger>
  );
};

const NavigationMenuContent = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) => {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cx(contentStyles, className)}
      {...props}
    />
  );
};

const NavigationMenuViewport = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) => {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      className={cx(viewportStyles, className)}
      {...props}
    />
  );
};

const NavigationMenuLink = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) => {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cx(linkStyles, className)}
      {...props}
    />
  );
};

const NavigationMenuIndicator = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) => {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cx(indicatorStyles, className)}
      {...props}
    />
  );
};

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
