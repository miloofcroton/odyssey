import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from './Menubar';

const menubarStyles = css`
  display: flex;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
`;

const triggerStyles = css`
  padding: 0.5rem 0.75rem;
  outline: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--foreground));
  transition: all 0.2s;

  &[data-highlighted],
  &[data-state="open"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const contentStyles = css`
  min-width: 14rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: scale-in 0.2s ease-out;

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const itemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1;
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  color: hsl(var(--foreground));

  &[data-highlighted] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const separatorStyles = css`
  height: 1px;
  margin: 0.25rem -0.5rem;
  background-color: hsl(var(--border));
`;

const shortcutStyles = css`
  margin-left: auto;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
`;

const iconStyles = css`
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
`;

type MenubarProps = React.ComponentProps<typeof Menubar>;

const meta = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: MenubarProps) => (
    <Menubar className={menubarStyles} {...args}>
      <MenubarMenu>
        <MenubarTrigger className={triggerStyles}>File</MenubarTrigger>
        <MenubarContent className={contentStyles}>
          <MenubarItem className={itemStyles}>
            <Plus className={iconStyles} />
            New Tab
            <MenubarShortcut className={shortcutStyles}>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className={itemStyles}>
            <PlusCircle className={iconStyles} />
            New Window
            <MenubarShortcut className={shortcutStyles}>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator className={separatorStyles} />
          <MenubarItem className={itemStyles}>
            <Settings className={iconStyles} />
            Settings
            <MenubarShortcut className={shortcutStyles}>⌘,</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerStyles}>Edit</MenubarTrigger>
        <MenubarContent className={contentStyles}>
          <MenubarItem className={itemStyles}>
            Undo
            <MenubarShortcut className={shortcutStyles}>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className={itemStyles}>
            Redo
            <MenubarShortcut className={shortcutStyles}>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator className={separatorStyles} />
          <MenubarItem className={itemStyles}>
            Cut
            <MenubarShortcut className={shortcutStyles}>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className={itemStyles}>
            Copy
            <MenubarShortcut className={shortcutStyles}>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className={itemStyles}>
            Paste
            <MenubarShortcut className={shortcutStyles}>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={triggerStyles}>View</MenubarTrigger>
        <MenubarContent className={contentStyles}>
          <MenubarItem className={itemStyles}>
            Zoom In
            <MenubarShortcut className={shortcutStyles}>⌘+</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className={itemStyles}>
            Zoom Out
            <MenubarShortcut className={shortcutStyles}>⌘-</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator className={separatorStyles} />
          <MenubarItem className={itemStyles}>
            Toggle Sidebar
            <MenubarShortcut className={shortcutStyles}>⌘\\</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
