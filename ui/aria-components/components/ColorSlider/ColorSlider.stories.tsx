import type { Meta } from '@storybook/react';

import { ColorSlider } from '~/ui/ColorSlider/ColorSlider';

const meta: Meta<typeof ColorSlider> = {
  component: ColorSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <ColorSlider {...args} />;

Example.args = {
  label: 'Red Opacity',
  defaultValue: '#f00',
  channel: 'alpha',
};
