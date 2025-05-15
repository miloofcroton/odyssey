import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';

const wrapperStyles = css`
  max-width: 24rem;
  width: 100%;
`;

const separatorStyles = css`
  background-color: hsl(var(--border));
`;

const headingStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const textStyles = css`
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

type SeparatorProps = React.ComponentProps<typeof Separator>;

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args: SeparatorProps) => (
    <div className={wrapperStyles}>
      <div className={headingStyles}>Navigation Menu</div>
      <div className={textStyles}>
        A collection of navigation items for moving through an app.
      </div>
      <Separator className={separatorStyles} {...args} />
      <div className={css`margin-top: 0.75rem;`}>
        <div className={headingStyles}>Horizontal Navigation</div>
        <div className={textStyles}>
          Perfect for top-level navigation in your app.
        </div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: (args: SeparatorProps) => (
    <div className={css`display: flex; align-items: center; gap: 1rem;`}>
      <div>
        <div className={headingStyles}>Navigation</div>
        <div className={textStyles}>Main menu items</div>
      </div>
      <Separator orientation="vertical" className={separatorStyles} {...args} />
      <div>
        <div className={headingStyles}>Content</div>
        <div className={textStyles}>Page content and details</div>
      </div>
    </div>
  ),
};
