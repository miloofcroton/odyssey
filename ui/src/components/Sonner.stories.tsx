import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';
import { toast, Toaster } from 'sonner';

import { Button } from './Button';

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 24rem;
`;

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;

export const Default = () => (
  <>
    <div className={wrapperStyles}>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          });
        }}
      >
        Show Success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.error('Event has not been created', {
            description: 'Please try again later',
          });
        }}
      >
        Show Error Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.promise(
            () =>
              new Promise((resolve) => {
                setTimeout(resolve, 2000);
              }),
            {
              loading: 'Loading...',
              success: 'Success!',
              error: 'Error!',
            }
          );
        }}
      >
        Show Promise Toast
      </Button>
    </div>
    <Toaster />
  </>
);
