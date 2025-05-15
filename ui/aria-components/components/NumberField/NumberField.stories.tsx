import type { Meta } from '@storybook/react';

import { NumberField } from '~/ui/NumberField/NumberField';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <NumberField {...args} />;

Example.args = {
  label: 'Cookies',
};
