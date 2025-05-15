'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

const contentStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  z-index: 50;
  max-height: var(--radix-dropdown-menu-content-available-height);
  min-width: 8rem;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  padding: 0.25rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  &[data-state="open"] {
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: contentHide 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-side="bottom"] { animation: slideFromTop 150ms; }
  &[data-side="left"] { animation: slideFromRight 150ms; }
  &[data-side="right"] { animation: slideFromLeft 150ms; }
  &[data-side="top"] { animation: slideFromBottom 150ms; }

  @keyframes contentShow {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes contentHide {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }

  @keyframes slideFromTop {
    from { transform: translateY(-0.5rem); }
    to { transform: translateY(0); }
  }

  @keyframes slideFromRight {
    from { transform: translateX(0.5rem); }
    to { transform: translateX(0); }
  }

  @keyframes slideFromLeft {
    from { transform: translateX(-0.5rem); }
    to { transform: translateX(0); }
  }

  @keyframes slideFromBottom {
    from { transform: translateY(0.5rem); }
    to { transform: translateY(0); }
  }
`;

const itemBaseStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
  cursor: default;

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;

    &:not([class*='text-']) {
      color: var(--muted-foreground);
    }
  }

  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-inset] {
    padding-left: 2rem;
  }
`;

const menuItemStyles = css`
  ${itemBaseStyles}

  &[data-variant="destructive"] {
    color: var(--destructive-foreground);

    &:focus {
      background-color: color-mix(in srgb, var(--destructive) 10%, transparent);
      color: var(--destructive-foreground);

      & svg {
        color: var(--destructive-foreground) !important;
      }
    }

    @media (prefers-color-scheme: dark) {
      &:focus {
        background-color: color-mix(in srgb, var(--destructive) 40%, transparent);
      }
    }
  }
`;

const checkboxItemStyles = css`
  ${itemBaseStyles}
`;

const radioItemStyles = css`
  ${itemBaseStyles}
`;

const indicatorWrapperStyles = css`
  pointer-events: none;
  position: absolute;
  left: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
`;

const labelStyles = css`
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;

  &[data-inset] {
    padding-left: 2rem;
  }
`;

const separatorStyles = css`
  background-color: var(--border);
  margin: 0.25rem -0.25rem;
  height: 1px;
`;

const shortcutStyles = css`
  color: var(--muted-foreground);
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
`;

const subTriggerStyles = css`
  ${itemBaseStyles}

  &[data-state="open"] {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  & svg:last-child {
    margin-left: auto;
  }
`;

const subContentStyles = css`
  ${contentStyles}
  min-width: 8rem;
`;

const DropdownMenu = ({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) => {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};

const DropdownMenuPortal = ({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) => {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
};

const DropdownMenuTrigger = ({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
};

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cx(contentStyles, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

const DropdownMenuGroup = ({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) => {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
};

const DropdownMenuItem = ({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) => {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cx(menuItemStyles, className)}
      {...props}
    />
  );
};

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cx(checkboxItemStyles, className)}
      checked={checked}
      {...props}
    >
      <span className={indicatorWrapperStyles}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

const DropdownMenuRadioGroup = ({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) => {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
};

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cx(radioItemStyles, className)}
      {...props}
    >
      <span className={indicatorWrapperStyles}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) => {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cx(labelStyles, className)}
      {...props}
    />
  );
};

const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cx(separatorStyles, className)}
      {...props}
    />
  );
};

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cx(shortcutStyles, className)}
      {...props}
    />
  );
};

const DropdownMenuSub = ({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) => {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
};

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) => {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cx(subTriggerStyles, className)}
      {...props}
    >
      {children}
      <ChevronRightIcon />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

const DropdownMenuSubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cx(subContentStyles, className)}
      {...props}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
