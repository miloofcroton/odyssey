import * as React from 'react';
import { css, cx } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from './Button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './Collapsible';

const collapsibleStyles = css`
  & {
    width: 350px;
  }

  & > * + * {
    margin-top: 0.5rem;
  }
`;

const triggerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  color: hsl(var(--foreground));

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const contentStyles = css`
  padding: 1rem;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

type CollapsibleProps = React.ComponentProps<typeof Collapsible>;

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

const CollapsibleDemo = (props: CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={collapsibleStyles}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className={triggerStyles}>
          <span>What is a Collapsible?</span>
          <ChevronsUpDown className={cx(
            css`
              height: 1rem;
              width: 1rem;
              transition: transform 0.2s;
            `,
            isOpen
              ? css`
                transform: rotate(180deg);
              ` : css`
                transform: rotate(0deg);
              `
          )} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className={contentStyles}>
        A collapsible is a component that can be expanded/collapsed with a button
        trigger.
      </CollapsibleContent>
    </Collapsible>
  );
};

export const Default: Story = {
  render: (args: CollapsibleProps) => <CollapsibleDemo {...args} />,
};
