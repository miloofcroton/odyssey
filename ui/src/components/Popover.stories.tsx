import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Settings2 } from 'lucide-react';

import { Button } from './Button';
import { Input } from './Input';
import { Label } from './Label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './Popover';

const contentStyles = css`
  width: 16rem;
  padding: 1rem;
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

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

const inputStyles = css`
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: hsl(var(--input-foreground));
  width: 100%;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 1px hsl(var(--ring));
  }
`;

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsl(var(--primary) / 0.9);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const iconStyles = css`
  height: 1rem;
  width: 1rem;
`;

type PopoverProps = React.ComponentProps<typeof Popover>;

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: PopoverProps) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline" className={buttonStyles}>
          <Settings2 className={iconStyles} />
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className={contentStyles}>
        <div className={css`display: grid; gap: 1rem;`}>
          <div className={css`display: grid; gap: 0.5rem;`}>
            <Label htmlFor="width" className={labelStyles}>Width</Label>
            <Input
              id="width"
              defaultValue="100%"
              className={inputStyles}
            />
          </div>
          <div className={css`display: grid; gap: 0.5rem;`}>
            <Label htmlFor="maxWidth" className={labelStyles}>Max. width</Label>
            <Input
              id="maxWidth"
              defaultValue="300px"
              className={inputStyles}
            />
          </div>
          <div className={css`display: grid; gap: 0.5rem;`}>
            <Label htmlFor="height" className={labelStyles}>Height</Label>
            <Input
              id="height"
              defaultValue="25px"
              className={inputStyles}
            />
          </div>
          <div className={css`display: grid; gap: 0.5rem;`}>
            <Label htmlFor="maxHeight" className={labelStyles}>Max. height</Label>
            <Input
              id="maxHeight"
              defaultValue="none"
              className={inputStyles}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
