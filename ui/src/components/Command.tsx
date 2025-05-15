import React from 'react';
import { css, cx } from '@linaria/core';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const commandStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
`;

const commandDialogStyles = css`
  & [cmdk-group-heading] {
    color: var(--muted-foreground);
    padding: 0 0.5rem;
    font-weight: 500;
  }

  & [data-slot="command-input-wrapper"] {
    height: 3rem;
  }

  & [cmdk-group] {
    padding: 0 0.5rem;
  }

  & [cmdk-group]:not([hidden]) ~ [cmdk-group] {
    padding-top: 0;
  }

  & [cmdk-input-wrapper] svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  & [cmdk-input] {
    height: 3rem;
  }

  & [cmdk-item] {
    padding: 0.75rem 0.5rem;
  }

  & [cmdk-item] svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

const commandInputWrapperStyles = css`
  display: flex;
  height: 2.25rem;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border);
  padding: 0 0.75rem;
`;

const searchIconStyles = css`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  opacity: 0.5;
`;

const commandInputStyles = css`
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  background-color: transparent;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  outline: none;

  &::placeholder {
    color: var(--muted-foreground);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const commandListStyles = css`
  max-height: 300px;
  scroll-padding: 0.25rem 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const commandEmptyStyles = css`
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.875rem;
`;

const commandGroupStyles = css`
  color: var(--foreground);
  overflow: hidden;
  padding: 0.25rem;

  & [cmdk-group-heading] {
    color: var(--muted-foreground);
    padding: 0 0.5rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

const commandSeparatorStyles = css`
  background-color: var(--border);
  margin: 0 -0.25rem;
  height: 1px;
`;

const commandItemStyles = css`
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;

  &[data-selected="true"] {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg:not([class*='text-']) {
    color: var(--muted-foreground);
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

const commandShortcutStyles = css`
  color: var(--muted-foreground);
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
`;

const Command = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) => {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cx(commandStyles, className)}
      {...props}
    />
  );
};

const CommandDialog = ({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
}) => {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className={commandDialogStyles}>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <div
      data-slot="command-input-wrapper"
      className={commandInputWrapperStyles}
    >
      <SearchIcon className={searchIconStyles} />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cx(commandInputStyles, className)}
        {...props}
      />
    </div>
  );
};

const CommandList = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) => {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cx(commandListStyles, className)}
      {...props}
    />
  );
};

const CommandEmpty = ({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) => {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={commandEmptyStyles}
      {...props}
    />
  );
};

const CommandGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cx(commandGroupStyles, className)}
      {...props}
    />
  );
};

const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cx(commandSeparatorStyles, className)}
      {...props}
    />
  );
};

const CommandItem = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) => {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cx(commandItemStyles, className)}
      {...props}
    />
  );
};

const CommandShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="command-shortcut"
      className={cx(commandShortcutStyles, className)}
      {...props}
    />
  );
};

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
