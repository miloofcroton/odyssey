import * as React from 'react';
import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';
import { Input } from './Input';
import { Label } from './Label';

const contentStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: hsl(var(--background));
  box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  gap: 1.5rem;
  z-index: 50;
  max-height: 90vh;
  overflow-y: auto;
`;

const headerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

const titleStyles = css`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
`;

const descriptionStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--muted-foreground));
`;

const formStyles = css`
  display: grid;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const labelWrapperStyles = css`
  display: grid;
  gap: 0.5rem;
`;

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

const footerStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

type DrawerProps = React.ComponentProps<typeof Drawer>;

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent className={contentStyles}>
        <DrawerHeader className={headerStyles}>
          <DrawerTitle className={titleStyles}>Edit profile</DrawerTitle>
          <DrawerDescription className={descriptionStyles}>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <form className={formStyles}>
          <div className={labelWrapperStyles}>
            <Label htmlFor="name" className={labelStyles}>Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className={labelWrapperStyles}>
            <Label htmlFor="username" className={labelStyles}>Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </form>
        <DrawerFooter className={footerStyles}>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button type="submit">Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
