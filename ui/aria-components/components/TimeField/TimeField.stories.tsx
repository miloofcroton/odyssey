import type { Meta } from '@storybook/react';

import { TimeField } from '~/ui/TimeField/TimeField';

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <TimeField {...args} />;

Example.args = {
  label: 'Event time',
};
