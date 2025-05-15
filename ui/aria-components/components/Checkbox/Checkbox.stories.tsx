import type { Meta } from '@storybook/react';

import { Checkbox } from '~/ui/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <Checkbox {...args}>Unsubscribe</Checkbox>
);
