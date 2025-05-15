import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { X } from 'lucide-react';

import { Button } from './Button';
import { Input } from './Input';
import { Label } from './Label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';

const overlayStyles = css`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: hsl(var(--background) / 0.8);
  backdrop-filter: blur(4px);
  animation: fade-in 0.2s ease-in;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const contentStyles = css`
  position: fixed;
  z-index: 50;
  gap: 1rem;
  padding: 1.5rem;
  background-color: hsl(var(--background));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slide-in 0.2s ease-out;

  &[data-side="right"] {
    top: 0;
    right: 0;
    height: 100vh;
    width: 24rem;
  }

  &[data-side="left"] {
    top: 0;
    left: 0;
    height: 100vh;
    width: 24rem;
  }

  &[data-side="top"] {
    top: 0;
    left: 0;
    right: 0;
    height: 16rem;
  }

  &[data-side="bottom"] {
    bottom: 0;
    left: 0;
    right: 0;
    height: 16rem;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const closeButtonStyles = css`
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const headerStyles = css`
  margin-bottom: 1.5rem;
`;

const titleStyles = css`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
`;

const descriptionStyles = css`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

const inputStyles = css`
  margin-top: 0.5rem;
  width: 100%;
`;

const footerStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

type SheetProps = React.ComponentProps<typeof Sheet>;

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: (args: SheetProps) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right" className={contentStyles}>
        <SheetHeader className={headerStyles}>
          <SheetTitle className={titleStyles}>Edit profile</SheetTitle>
          <SheetDescription className={descriptionStyles}>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className={css`display: grid; gap: 1rem;`}>
          <div>
            <Label htmlFor="name" className={labelStyles}>Name</Label>
            <Input id="name" className={inputStyles} />
          </div>
          <div>
            <Label htmlFor="username" className={labelStyles}>Username</Label>
            <Input id="username" className={inputStyles} />
          </div>
        </div>
        <SheetFooter className={footerStyles}>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
        <SheetClose asChild>
          <Button className={closeButtonStyles} variant="ghost" size="icon">
            <X className={css`height: 1rem; width: 1rem;`} />
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: (args: SheetProps) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left" className={contentStyles}>
        <SheetHeader className={headerStyles}>
          <SheetTitle className={titleStyles}>Edit profile</SheetTitle>
          <SheetDescription className={descriptionStyles}>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className={css`display: grid; gap: 1rem;`}>
          <div>
            <Label htmlFor="name" className={labelStyles}>Name</Label>
            <Input id="name" className={inputStyles} />
          </div>
          <div>
            <Label htmlFor="username" className={labelStyles}>Username</Label>
            <Input id="username" className={inputStyles} />
          </div>
        </div>
        <SheetFooter className={footerStyles}>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
        <SheetClose asChild>
          <Button className={closeButtonStyles} variant="ghost" size="icon">
            <X className={css`height: 1rem; width: 1rem;`} />
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  ),
};
