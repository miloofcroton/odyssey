import React from 'react';
import { css, cx } from '@linaria/core';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const AlertDialog = ({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
};

const AlertDialogTrigger = ({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) => {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
};

const AlertDialogPortal = ({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
};

const AlertDialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) => {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cx(
        css`
          position: fixed;
          inset: 0;
          z-index: 50;
          background-color: rgba(0, 0, 0, 0.8);

          &[data-state="open"] {
            animation: fade-in 200ms;
          }

          &[data-state="closed"] {
            animation: fade-out 200ms;
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fade-out {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDialogContent = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cx(
          css`
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 50;
            display: grid;
            width: 100%;
            max-width: calc(100% - 2rem);
            transform: translate(-50%, -50%);
            gap: 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--border);
            background: var(--background);
            padding: 1.5rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            duration: 200ms;

            @media (min-width: 640px) {
              max-width: 32rem;
            }

            &[data-state="open"] {
              animation: zoom-in 200ms;
            }

            &[data-state="closed"] {
              animation: zoom-out 200ms;
            }

            @keyframes zoom-in {
              from { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
              to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }

            @keyframes zoom-out {
              from { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              to { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
            }
          `,
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
};

const AlertDialogHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cx(
        css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;

          @media (min-width: 640px) {
            text-align: left;
          }
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDialogFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cx(
        css`
          display: flex;
          flex-direction: column-reverse;
          gap: 0.5rem;

          @media (min-width: 640px) {
            flex-direction: row;
            justify-content: flex-end;
          }
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) => {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cx(
        css`
          font-size: 1.125rem;
          font-weight: 600;
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) => {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cx(
        css`
          color: var(--muted-foreground);
          font-size: 0.875rem;
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDialogAction = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) => {
  return (
    <AlertDialogPrimitive.Action
      className={cx(
        css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          background-color: var(--primary);
          color: var(--primary-foreground);
          cursor: pointer;

          &:hover {
            background-color: var(--primary/90);
          }

          &:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }

          &:disabled {
            pointer-events: none;
            opacity: 0.5;
          }
        `,
        className
      )}
      {...props}
    />
  );
};

const AlertDialogCancel = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) => {
  return (
    <AlertDialogPrimitive.Cancel
      className={cx(
        css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.375rem;
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          background-color: var(--background);
          color: var(--foreground);
          cursor: pointer;

          &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
          }

          &:focus-visible {
            outline: 2px solid var(--ring);
            outline-offset: 2px;
          }

          &:disabled {
            pointer-events: none;
            opacity: 0.5;
          }
        `,
        className
      )}
      {...props}
    />
  );
};

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
