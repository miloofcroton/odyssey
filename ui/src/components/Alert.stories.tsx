import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './Alert';

type AlertProps = React.ComponentProps<typeof Alert>;

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AlertProps) => (
    <Alert className={css`
      background-color: hsl(var(--background));
      border: 1px solid hsl(var(--border));
      border-radius: 0.5rem;
      padding: 1rem;
    `} {...args}>
      <Terminal className={css`
        height: 1rem;
        width: 1rem;
      `} />
      <AlertTitle className={css`
        font-weight: 500;
        line-height: 1;
        margin-bottom: 0.5rem;
      `}>Heads up!</AlertTitle>
      <AlertDescription className={css`
          line-height: 1.6;
      `}>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};
