import type { Meta } from '@storybook/react';

import { Button } from '~/ui/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onPress: () => alert('Hello world!'),
  },
};

export default meta;

export const Example = (args: any) => <Button {...args}>Press me</Button>;
