import type { Meta } from '@storybook/react';

import { ColorField } from '~/ui/ColorField/ColorField';

const meta: Meta<typeof ColorField> = {
  component: ColorField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <ColorField {...args} />;

Example.args = {
  label: 'Color',
};
