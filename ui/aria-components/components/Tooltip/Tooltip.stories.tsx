import type { Meta } from '@storybook/react';
import { Button, TooltipTrigger } from 'react-aria-components';

import { Tooltip } from '~/ui/Tooltip/Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <TooltipTrigger>
    <Button>💾</Button>
    <Tooltip {...args}>Save</Tooltip>
  </TooltipTrigger>
);
