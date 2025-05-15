import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';

const progressStyles = css`
  width: 100%;
  max-width: 24rem;
`;

const progressBarStyles = css`
  height: 0.5rem;
  border-radius: 9999px;
  background-color: hsl(var(--muted));
  overflow: hidden;
`;

const progressIndicatorStyles = css`
  height: 100%;
  background-color: hsl(var(--primary));
  transition: width 0.2s ease-in-out;
`;

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const valueStyles = css`
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  margin-top: 0.5rem;
`;

type ProgressProps = React.ComponentProps<typeof Progress>;

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ProgressProps) => (
    <div className={progressStyles}>
      <div className={labelStyles}>Uploading...</div>
      <Progress value={33} className={progressBarStyles} {...args}>
        <div className={progressIndicatorStyles} />
      </Progress>
      <div className={valueStyles}>33%</div>
    </div>
  ),
};

export const Complete: Story = {
  render: (args: ProgressProps) => (
    <div className={progressStyles}>
      <div className={labelStyles}>Download complete</div>
      <Progress value={100} className={progressBarStyles} {...args}>
        <div className={progressIndicatorStyles} />
      </Progress>
      <div className={valueStyles}>100%</div>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: (args: ProgressProps) => (
    <div className={progressStyles}>
      <div className={labelStyles}>Processing...</div>
      <Progress className={progressBarStyles} {...args}>
        <div className={progressIndicatorStyles} />
      </Progress>
    </div>
  ),
};
