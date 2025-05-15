import React from 'react';
import { css, cx } from '@linaria/core';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

const menubarStyles = css`
  background-color: var(--background);
  display: flex;
  height: 2.25rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  padding: 0.25rem;
  box-shadow: var(--shadow-xs);
`;

const triggerBaseStyles = css`
  display: flex;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  outline: none;
  user-select: none;

  &:focus, &[data-state="open"] {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
`;

const contentBaseStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  z-index: 50;
  min-width: 12rem;
  overflow: hidden;
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

  &[data-inset] {
    padding-left: 2rem;
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
  ${triggerBaseStyles}

  & svg:last-child {
    margin-left: auto;
    width: 1rem;
    height: 1rem;
  }
`;

const subContentStyles = css`
  ${contentBaseStyles}
  min-width: 8rem;
`;

const Menubar = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) => {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cx(menubarStyles, className)}
      {...props}
    />
  );
};

const MenubarMenu = ({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) => {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
};

const MenubarGroup = ({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) => {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
};

const MenubarPortal = ({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) => {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
};

const MenubarRadioGroup = ({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) => {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
};

const MenubarTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) => {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cx(triggerBaseStyles, className)}
      {...props}
    />
  );
};

const MenubarContent = ({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) => {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cx(contentBaseStyles, className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
};

const MenubarItem = ({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) => {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cx(itemBaseStyles, className)}
      {...props}
    />
  );
};

const MenubarCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) => {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cx(itemBaseStyles, className)}
      checked={checked}
      {...props}
    >
      <span className={indicatorWrapperStyles}>
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
};

const MenubarRadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) => {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cx(itemBaseStyles, className)}
      {...props}
    >
      <span className={indicatorWrapperStyles}>
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
};

const MenubarLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) => {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cx(labelStyles, className)}
      {...props}
    />
  );
};

const MenubarSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) => {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cx(separatorStyles, className)}
      {...props}
    />
  );
};

const MenubarShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cx(shortcutStyles, className)}
      {...props}
    />
  );
};

const MenubarSub = ({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) => {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
};

const MenubarSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) => {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cx(subTriggerStyles, className)}
      {...props}
    >
      {children}
      <ChevronRightIcon />
    </MenubarPrimitive.SubTrigger>
  );
};

const MenubarSubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) => {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cx(subContentStyles, className)}
      {...props}
    />
  );
};

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
