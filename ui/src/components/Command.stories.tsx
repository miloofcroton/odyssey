import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './Command';

const commandStyles = css`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const inputContainerStyles = css`
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(var(--border));
  padding: 0.75rem;
`;

const inputStyles = css`
  flex: 1;
  outline: none;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  color: hsl(var(--foreground));

  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
`;

const listStyles = css`
  padding: 0.25rem;
  overflow-y: auto;
  max-height: 20rem;
`;

const emptyStyles = css`
  padding: 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

const groupStyles = css`
  padding: 0.5rem 0;

  & > div:first-child {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: hsl(var(--muted-foreground));
  }
`;

const itemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  color: hsl(var(--foreground));
  border-radius: 0.25rem;

  &[data-selected="true"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const iconStyles = css`
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
`;

const shortcutStyles = css`
  margin-left: auto;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
`;

const separatorStyles = css`
  height: 1px;
  background-color: hsl(var(--border));
  margin: 0.25rem -0.25rem;
`;

type CommandProps = React.ComponentProps<typeof Command>;

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CommandProps) => (
    <Command className={commandStyles} {...args}>
      <div className={inputContainerStyles}>
        <CommandInput
          className={inputStyles}
          placeholder="Type a command or search..."
        />
      </div>
      <CommandList className={listStyles}>
        <CommandEmpty className={emptyStyles}>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" className={groupStyles}>
          <CommandItem className={itemStyles}>
            <Calendar className={iconStyles} />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem className={itemStyles}>
            <Smile className={iconStyles} />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem className={itemStyles}>
            <Calculator className={iconStyles} />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator className={separatorStyles} />
        <CommandGroup heading="Settings" className={groupStyles}>
          <CommandItem className={itemStyles}>
            <User className={iconStyles} />
            <span>Profile</span>
            <CommandShortcut className={shortcutStyles}>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem className={itemStyles}>
            <CreditCard className={iconStyles} />
            <span>Billing</span>
            <CommandShortcut className={shortcutStyles}>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem className={itemStyles}>
            <Settings className={iconStyles} />
            <span>Settings</span>
            <CommandShortcut className={shortcutStyles}>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
