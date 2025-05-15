import type { Meta } from '@storybook/react';

import { DateRangePicker } from '~/ui/DateRangePicker/DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <DateRangePicker {...args} />;

Example.args = {
  label: 'Event date',
};
