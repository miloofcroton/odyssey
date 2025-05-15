import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './Tabs';

const tabsStyles = css`
  width: 24rem;
`;

const listStyles = css`
  display: inline-flex;
  padding: 0.25rem;
  background-color: hsl(var(--muted));
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const triggerStyles = css`
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &[data-state="active"] {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &[data-state="inactive"] {
    color: hsl(var(--muted-foreground));
  }

  &:hover[data-state="inactive"] {
    color: hsl(var(--foreground));
  }
`;

const contentStyles = css`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  padding: 1.5rem;
  margin-top: 0.5rem;

  &[data-state="inactive"] {
    display: none;
  }
`;

const headingStyles = css`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const textStyles = css`
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  line-height: 1.5;
`;

const verticalTabsStyles = css`
  display: flex;
  gap: 1rem;
  width: 32rem;
`;

const verticalListStyles = css`
  display: flex;
  flex-direction: column;
  min-width: 8rem;
  padding: 0.25rem;
  background-color: hsl(var(--muted));
  border-radius: 0.5rem;
`;

const verticalContentWrapperStyles = css`
  flex: 1;
`;

type TabsProps = React.ComponentProps<typeof Tabs>;

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: TabsProps) => (
    <Tabs defaultValue="account" className={tabsStyles} {...args}>
      <TabsList className={listStyles}>
        <TabsTrigger value="account" className={triggerStyles}>
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className={triggerStyles}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className={contentStyles}>
        <div className={headingStyles}>Account</div>
        <p className={textStyles}>
          Make changes to your account settings here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password" className={contentStyles}>
        <div className={headingStyles}>Password</div>
        <p className={textStyles}>
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: (args: TabsProps) => (
    <Tabs
      defaultValue="music"
      orientation="vertical"
      className={verticalTabsStyles}
      {...args}
    >
      <TabsList className={verticalListStyles}>
        <TabsTrigger value="music" className={triggerStyles}>
          Music
        </TabsTrigger>
        <TabsTrigger value="podcasts" className={triggerStyles}>
          Podcasts
        </TabsTrigger>
        <TabsTrigger value="audiobooks" className={triggerStyles}>
          Audiobooks
        </TabsTrigger>
      </TabsList>
      <div className={verticalContentWrapperStyles}>
        <TabsContent value="music" className={contentStyles}>
          <div className={headingStyles}>Music</div>
          <p className={textStyles}>
            Listen to your favorite songs and albums.
          </p>
        </TabsContent>
        <TabsContent value="podcasts" className={contentStyles}>
          <div className={headingStyles}>Podcasts</div>
          <p className={textStyles}>
            Catch up on the latest episodes from your favorite shows.
          </p>
        </TabsContent>
        <TabsContent value="audiobooks" className={contentStyles}>
          <div className={headingStyles}>Audiobooks</div>
          <p className={textStyles}>
            Explore a vast collection of audiobooks.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
