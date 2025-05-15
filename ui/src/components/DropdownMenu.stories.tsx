import * as React from 'react';
import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'lucide-react';

import { Button } from './Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu';

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

const labelStyles = css`
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: hsl(var(--muted-foreground));
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

const subTriggerStyles = css`
  ${itemStyles}
  &[data-state="open"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const subContentStyles = css`
  ${contentStyles}
  min-width: 8rem;
`;

const iconStyles = css`
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
`;

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>;

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={contentStyles}>
        <DropdownMenuLabel className={labelStyles}>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className={separatorStyles} />
        <DropdownMenuGroup>
          <DropdownMenuItem className={itemStyles}>
            <User className={iconStyles} />
            <span>Profile</span>
            <DropdownMenuShortcut className={shortcutStyles}>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className={itemStyles}>
            <CreditCard className={iconStyles} />
            <span>Billing</span>
            <DropdownMenuShortcut className={shortcutStyles}>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className={itemStyles}>
            <Settings className={iconStyles} />
            <span>Settings</span>
            <DropdownMenuShortcut className={shortcutStyles}>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className={itemStyles}>
            <Keyboard className={iconStyles} />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut className={shortcutStyles}>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className={separatorStyles} />
        <DropdownMenuGroup>
          <DropdownMenuItem className={itemStyles}>
            <Users className={iconStyles} />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className={subTriggerStyles}>
              <UserPlus className={iconStyles} />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className={subContentStyles}>
                <DropdownMenuItem className={itemStyles}>
                  <Mail className={iconStyles} />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem className={itemStyles}>
                  <MessageSquare className={iconStyles} />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className={separatorStyles} />
                <DropdownMenuItem className={itemStyles}>
                  <PlusCircle className={iconStyles} />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem className={itemStyles}>
            <Plus className={iconStyles} />
            <span>New Team</span>
            <DropdownMenuShortcut className={shortcutStyles}>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className={separatorStyles} />
        <DropdownMenuItem className={itemStyles}>
          <Github className={iconStyles} />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={itemStyles}>
          <LifeBuoy className={iconStyles} />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled className={itemStyles}>
          <Cloud className={iconStyles} />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className={separatorStyles} />
        <DropdownMenuItem className={itemStyles}>
          <LogOut className={iconStyles} />
          <span>Log out</span>
          <DropdownMenuShortcut className={shortcutStyles}>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
