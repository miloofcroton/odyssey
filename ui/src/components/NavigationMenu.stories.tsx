import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './NavigationMenu';

const menuStyles = css`
  position: relative;
  max-width: 100%;
  width: max-content;
`;

const listStyles = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0.25rem;
  background-color: hsl(var(--background));
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
`;

const triggerStyles = css`
  padding: 0.5rem 0.75rem;
  outline: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--foreground));
  transition: all 0.2s;

  &[data-state="open"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const contentStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: scale-in 0.2s ease-out;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

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

const linkStyles = css`
  display: block;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  color: hsl(var(--foreground));
  transition: all 0.2s;

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const listItemStyles = css`
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 16rem;
`;

const titleStyles = css`
  font-weight: 500;
  line-height: 1;
`;

const subtitleStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--muted-foreground));
`;

type NavigationMenuProps = React.ComponentProps<typeof NavigationMenu>;

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const components: Array<{ title: string; href: string; description: string }> = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export const Default: Story = {
  render: (args: NavigationMenuProps) => (
    <NavigationMenu className={menuStyles} {...args}>
      <NavigationMenuList className={listStyles}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyles}>
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className={contentStyles}>
            <ul className={css`
              display: grid;
              gap: 0.5rem;
              padding: 0.5rem;
              width: 24rem;
              grid-template-columns: 0.75fr 1fr;
            `}>
              <li className={listItemStyles}>
                <NavigationMenuLink className={linkStyles} href="/docs">
                  <div className={titleStyles}>Introduction</div>
                  <div className={subtitleStyles}>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </div>
                </NavigationMenuLink>
              </li>
              <li className={listItemStyles}>
                <NavigationMenuLink className={linkStyles} href="/docs/installation">
                  <div className={titleStyles}>Installation</div>
                  <div className={subtitleStyles}>
                    How to install dependencies and structure your app.
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyles}>
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className={contentStyles}>
            <ul className={css`
              display: grid;
              gap: 0.5rem;
              padding: 0.5rem;
              width: 32rem;
              grid-template-columns: repeat(2, 1fr);
            `}>
              {components.map((component) => (
                <li key={component.title} className={listItemStyles}>
                  <NavigationMenuLink className={linkStyles} href={component.href}>
                    <div className={titleStyles}>{component.title}</div>
                    <div className={subtitleStyles}>{component.description}</div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={triggerStyles} href="/docs/changelog">
            Changelog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
