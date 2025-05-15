import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from 'lucide-react';

import { Button } from './Button';
import { Sidebar, SidebarContent, SidebarFooter,SidebarHeader } from './Sidebar';

const wrapperStyles = css`
  min-height: 400px;
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
`;

const sidebarStyles = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  padding: 1.5rem 1rem;
  border-right: 1px solid hsl(var(--border));
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const logoStyles = css`
  font-size: 1.25rem;
  font-weight: 600;
`;

const navStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const buttonStyles = css`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-active="true"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const iconStyles = css`
  width: 1rem;
  height: 1rem;
`;

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

export const Default = () => (
  <div className={wrapperStyles}>
    <Sidebar className={sidebarStyles}>
      <SidebarHeader className={headerStyles}>
        <div className={logoStyles}>Acme Inc</div>
      </SidebarHeader>
      <SidebarContent className={navStyles}>
        <Button variant="ghost" className={buttonStyles} data-active={true}>
          <LayoutDashboard className={iconStyles} />
          Dashboard
        </Button>
        <Button variant="ghost" className={buttonStyles}>
          <ShoppingCart className={iconStyles} />
          Orders
        </Button>
        <Button variant="ghost" className={buttonStyles}>
          <UsersRound className={iconStyles} />
          Customers
        </Button>
        <Button variant="ghost" className={buttonStyles}>
          <Settings className={iconStyles} />
          Settings
        </Button>
      </SidebarContent>
      <SidebarFooter>
        {/* Footer content can be added here */}
      </SidebarFooter>
    </Sidebar>
  </div>
);

export const WithNav = () => (
  <div className={css`display: flex; height: 400px;`}>
    <Sidebar className={sidebarStyles}>
      <SidebarHeader className={headerStyles}>
        <div className={logoStyles}>Acme Inc</div>
      </SidebarHeader>
      <SidebarContent className={navStyles}>
        <Button variant="ghost" className={buttonStyles} data-active={true}>
          <LayoutDashboard className={iconStyles} />
          Dashboard
        </Button>
        <Button variant="ghost" className={buttonStyles}>
          <ShoppingCart className={iconStyles} />
          Orders
        </Button>
        <Button variant="ghost" className={buttonStyles}>
          <UsersRound className={iconStyles} />
          Customers
        </Button>
        <Button variant="ghost" className={buttonStyles}>
          <Settings className={iconStyles} />
          Settings
        </Button>
      </SidebarContent>
    </Sidebar>
    <div className={css`
      flex: 1;
      padding: 1.5rem;
      background-color: hsl(var(--background));
    `}>
      <h2 className={css`
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
      `}>
        Dashboard
      </h2>
      <p className={css`
        color: hsl(var(--muted-foreground));
      `}>
        This is an example of a sidebar layout with main content.
      </p>
    </div>
  </div>
);
