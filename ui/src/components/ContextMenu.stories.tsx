import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './ContextMenu';

const triggerStyles = css`
  border: 1px dashed hsl(var(--border));
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
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

const radioItemStyles = css`
  ${itemStyles}
  padding-left: 1.5rem;

  &[data-state="checked"] {
    &::before {
      content: "•";
      position: absolute;
      left: 0.5rem;
    }
  }
`;

const checkboxItemStyles = css`
  ${itemStyles}
  padding-left: 1.5rem;

  &[data-state="checked"] {
    &::before {
      content: "✓";
      position: absolute;
      left: 0.5rem;
    }
  }
`;

type ContextMenuProps = React.ComponentProps<typeof ContextMenu>;

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ContextMenuProps) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className={triggerStyles}>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className={contentStyles}>
        <ContextMenuItem className={itemStyles}>
          Back
          <ContextMenuShortcut className={shortcutStyles}>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className={itemStyles} disabled>
          Forward
          <ContextMenuShortcut className={shortcutStyles}>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className={itemStyles}>
          Reload
          <ContextMenuShortcut className={shortcutStyles}>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger className={subTriggerStyles}>
            More Tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className={subContentStyles}>
            <ContextMenuItem className={itemStyles}>
              Save Page As...
              <ContextMenuShortcut className={shortcutStyles}>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className={itemStyles}>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem className={itemStyles}>Name Window...</ContextMenuItem>
            <ContextMenuSeparator className={separatorStyles} />
            <ContextMenuItem className={itemStyles}>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator className={separatorStyles} />
        <ContextMenuCheckboxItem className={checkboxItemStyles}>
          Show Bookmarks Bar
          <ContextMenuShortcut className={shortcutStyles}>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem className={checkboxItemStyles}>
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator className={separatorStyles} />
        <ContextMenuLabel className={labelStyles}>People</ContextMenuLabel>
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuRadioItem className={radioItemStyles} value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem className={radioItemStyles} value="colm">
            Colm Tuite
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
