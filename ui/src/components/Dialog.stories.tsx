import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';
import { Input } from './Input';
import { Label } from './Label';

const contentStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 28rem;
  width: 90vw;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  gap: 1.5rem;
  z-index: 50;
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

type DialogProps = React.ComponentProps<typeof Dialog>;

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className={contentStyles}>
        <DialogHeader className={headerStyles}>
          <DialogTitle className={titleStyles}>Edit profile</DialogTitle>
          <DialogDescription className={descriptionStyles}>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter className={footerStyles}>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
