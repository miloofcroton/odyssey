import type { Meta } from '@storybook/react';

import { SearchField } from '~/ui/SearchField/SearchField';

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => <SearchField {...args} />;

Example.args = {
  label: 'Search',
};
