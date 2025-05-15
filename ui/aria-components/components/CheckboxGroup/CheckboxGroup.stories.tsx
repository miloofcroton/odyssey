import type { Meta } from '@storybook/react';

import { Checkbox } from '~/ui/Checkbox/Checkbox';
import { CheckboxGroup } from '~/ui/CheckboxGroup/CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <CheckboxGroup {...args}>
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
);

Example.args = {
  label: 'Favorite sports',
};
