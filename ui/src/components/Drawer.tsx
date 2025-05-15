'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import { Drawer as DrawerPrimitive } from 'vaul';

const overlayStyles = css`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);

  &[data-state="open"] {
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: overlayHide 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes overlayShow {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes overlayHide {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const contentStyles = css`
  background-color: var(--background);
  position: fixed;
  z-index: 50;
  display: flex;
  height: auto;
  flex-direction: column;

  &[data-vaul-drawer-direction="top"] {
    inset-inline: 0;
    top: 0;
    margin-bottom: 6rem;
    max-height: 80vh;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  &[data-vaul-drawer-direction="bottom"] {
    inset-inline: 0;
    bottom: 0;
    margin-top: 6rem;
    max-height: 80vh;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &[data-vaul-drawer-direction="right"] {
    inset-block: 0;
    right: 0;
    width: 75%;

    @media (min-width: 640px) {
      max-width: 24rem;
    }
  }

  &[data-vaul-drawer-direction="left"] {
    inset-block: 0;
    left: 0;
    width: 75%;

    @media (min-width: 640px) {
      max-width: 24rem;
    }
  }
`;

const drawerHandleStyles = css`
  background-color: var(--muted);
  margin: 1rem auto 0;
  height: 0.5rem;
  width: 100px;
  flex-shrink: 0;
  border-radius: 9999px;
  display: none;

  [data-vaul-drawer-direction="bottom"] & {
    display: block;
  }
`;

const headerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1rem;
`;

const footerStyles = css`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const titleStyles = css`
  color: var(--foreground);
  font-weight: 600;
`;

const descriptionStyles = css`
  color: var(--muted-foreground);
  font-size: 0.875rem;
`;

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cx(overlayStyles, className)}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cx(contentStyles, className)}
        {...props}
      >
        <div className={drawerHandleStyles} />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cx(headerStyles, className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cx(footerStyles, className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cx(titleStyles, className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cx(descriptionStyles, className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
