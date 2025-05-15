import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const skeletonStyles = css`
  width: 100%;
  height: 100%;
  background-color: hsl(var(--muted));
  border-radius: 0.5rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const cardStyles = css`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  width: 24rem;
`;

type SkeletonProps = React.ComponentProps<typeof Skeleton>;

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SkeletonProps) => (
    <div className={cardStyles}>
      <Skeleton className={css`
        width: 4rem;
        height: 4rem;
        border-radius: 9999px;
      `} {...args} />
      <div className={css`flex: 1;`}>
        <Skeleton className={css`
          width: 12rem;
          height: 1.25rem;
          margin-bottom: 0.5rem;
        `} {...args} />
        <Skeleton className={css`
          width: 100%;
          height: 4rem;
        `} {...args} />
      </div>
    </div>
  ),
};

export const Card: Story = {
  render: (args: SkeletonProps) => (
    <div className={cardStyles}>
      <div className={css`display: grid; gap: 0.75rem; width: 100%;`}>
        <Skeleton className={css`width: 40%; height: 1.5rem;`} {...args} />
        <Skeleton className={css`width: 100%; height: 4rem;`} {...args} />
        <Skeleton className={css`width: 25%; height: 1rem;`} {...args} />
      </div>
    </div>
  ),
};
