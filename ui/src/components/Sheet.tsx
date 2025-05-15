'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

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

const contentBaseStyles = css`
  background-color: var(--background);
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: all ease-in-out;

  &[data-state="open"] {
    animation-duration: 500ms;
  }

  &[data-state="closed"] {
    animation-duration: 300ms;
  }
`;

const rightStyles = css`
  inset-y: 0;
  right: 0;
  height: 100%;
  width: 75%;
  border-left: 1px solid var(--border);

  @media (min-width: 640px) {
    max-width: 24rem;
  }

  &[data-state="closed"] {
    animation: slideOutToRight 300ms ease-in-out;
  }

  &[data-state="open"] {
    animation: slideInFromRight 500ms ease-in-out;
  }

  @keyframes slideInFromRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideOutToRight {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  }
`;

const leftStyles = css`
  inset-y: 0;
  left: 0;
  height: 100%;
  width: 75%;
  border-right: 1px solid var(--border);

  @media (min-width: 640px) {
    max-width: 24rem;
  }

  &[data-state="closed"] {
    animation: slideOutToLeft 300ms ease-in-out;
  }

  &[data-state="open"] {
    animation: slideInFromLeft 500ms ease-in-out;
  }

  @keyframes slideInFromLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideOutToLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
`;

const topStyles = css`
  inset-x: 0;
  top: 0;
  height: auto;
  border-bottom: 1px solid var(--border);

  &[data-state="closed"] {
    animation: slideOutToTop 300ms ease-in-out;
  }

  &[data-state="open"] {
    animation: slideInFromTop 500ms ease-in-out;
  }

  @keyframes slideInFromTop {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }

  @keyframes slideOutToTop {
    from { transform: translateY(0); }
    to { transform: translateY(-100%); }
  }
`;

const bottomStyles = css`
  inset-x: 0;
  bottom: 0;
  height: auto;
  border-top: 1px solid var(--border);

  &[data-state="closed"] {
    animation: slideOutToBottom 300ms ease-in-out;
  }

  &[data-state="open"] {
    animation: slideInFromBottom 500ms ease-in-out;
  }

  @keyframes slideInFromBottom {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes slideOutToBottom {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }
`;

const closeButtonStyles = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 0.125rem;
  opacity: 0.7;
  transition: opacity 150ms;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    ring: 2px solid var(--ring);
    ring-offset: 2px;
    ring-offset-background: var(--background);
  }

  &:disabled {
    pointer-events: none;
  }

  &[data-state="open"] {
    background-color: var(--secondary);
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

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cx(overlayStyles, className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cx(
          contentBaseStyles,
          side === 'right' && rightStyles,
          side === 'left' && leftStyles,
          side === 'top' && topStyles,
          side === 'bottom' && bottomStyles,
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className={closeButtonStyles}>
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cx(headerStyles, className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cx(footerStyles, className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cx(titleStyles, className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cx(descriptionStyles, className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
