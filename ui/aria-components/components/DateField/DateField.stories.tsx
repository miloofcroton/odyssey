import type { Meta } from '@storybook/react';

import { DateField } from '~/ui/DateField/DateField';

const meta: Meta<typeof DateField> = {
  component: DateField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <DateField {...args} />;

Example.args = {
  label: 'Event date',
};
