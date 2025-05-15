import React from 'react';
import { css, cx } from '@linaria/core';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

const subTriggerStyles = css`
  display: flex;
  cursor: default;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.25rem 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;

  &[data-inset="true"] {
    padding-left: 2rem;
  }

  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-state="open"] {
    background-color: var(--accent);
    color: var(--accent-foreground);
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

const chevronRightStyles = css`
  margin-left: auto;
`;

const contentStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  z-index: 50;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  padding: 0.25rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &[data-state="open"] {
    animation: in 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: out 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-side="bottom"] { animation-name: slideFromTop; }
  &[data-side="left"] { animation-name: slideFromRight; }
  &[data-side="right"] { animation-name: slideFromLeft; }
  &[data-side="top"] { animation-name: slideFromBottom; }

  @keyframes in {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes out {
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

const menuItemStyles = css`
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.25rem 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;

  &[data-inset="true"] {
    padding-left: 2rem;
  }

  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

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

  &[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  & svg:not([class*='text-']) {
    color: var(--muted-foreground);
  }

  & svg:not([class*='size-']) {
    width: 1rem;
    height: 1rem;
  }
`;

const checkboxItemStyles = css`
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 0.5rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;

  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
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

const checkIconStyles = css`
  width: 1rem;
  height: 1rem;
`;

const circleIconStyles = css`
  width: 0.5rem;
  height: 0.5rem;
  fill: currentColor;
`;

const labelStyles = css`
  color: var(--foreground);
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;

  &[data-inset="true"] {
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
  letter-spacing: 0.1em;
`;

const ContextMenu = ({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) => {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
};

const ContextMenuTrigger = ({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) => {
  return <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />;
};

const ContextMenuGroup = ({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) => {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;
};

const ContextMenuPortal = ({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) => {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />;
};

const ContextMenuSub = ({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) => {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
};

const ContextMenuRadioGroup = ({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) => {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />;
};

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) => {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      className={cx(subTriggerStyles, className)}
      {...props}
      data-inset={inset}
    >
      {children}
      <ChevronRightIcon className={chevronRightStyles} />
    </ContextMenuPrimitive.SubTrigger>
  );
};

const ContextMenuSubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) => {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cx(contentStyles, className)}
      {...props}
    />
  );
};

const ContextMenuContent = ({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cx(contentStyles, className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
};

const ContextMenuItem = ({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) => {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      className={cx(menuItemStyles, className)}
      {...props}
      data-inset={inset}
      data-variant={variant}
    />
  );
};

const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cx(checkboxItemStyles, className)}
      {...props}
      checked={checked}
    >
      <span className={indicatorWrapperStyles}>
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className={checkIconStyles} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
};

const ContextMenuRadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) => {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cx(checkboxItemStyles, className)}
      {...props}
    >
      <span className={indicatorWrapperStyles}>
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className={circleIconStyles} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
};

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) => {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      className={cx(labelStyles, className)}
      {...props}
      data-inset={inset}
    />
  );
};

const ContextMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) => {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cx(separatorStyles, className)}
      {...props}
    />
  );
};

const ContextMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cx(shortcutStyles, className)}
      {...props}
    />
  );
};

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
