import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog';
import { Button } from './Button';

const contentStyles = css`
  background-color: hsl(var(--background));
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 32rem;
  padding: 1.5rem;
  gap: 1rem;
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

const footerStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

type AlertDialogProps = React.ComponentProps<typeof AlertDialog>;

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AlertDialogProps) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={contentStyles}>
        <AlertDialogHeader className={headerStyles}>
          <AlertDialogTitle className={titleStyles}>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className={descriptionStyles}>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={footerStyles}>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
