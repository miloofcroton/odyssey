import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

import { Button } from './Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';

const contentStyles = css`
  z-index: 50;
  overflow: hidden;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1;
  color: hsl(var(--popover-foreground));
  background-color: hsl(var(--popover));
  border: 1px solid hsl(var(--border));
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

const iconStyles = css`
  height: 1rem;
  width: 1rem;
`;

type TooltipProps = React.ComponentProps<typeof Tooltip>;

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: TooltipProps) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className={iconStyles} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className={contentStyles}>
          Add to library
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithDelay: Story = {
  render: (args: TooltipProps) => (
    <TooltipProvider delayDuration={500}>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className={iconStyles} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className={contentStyles}>
          Add to library (500ms delay)
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
