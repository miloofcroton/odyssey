import type { Meta } from '@storybook/react';

import { ListBox, ListBoxItem } from '~/ui/ListBox/ListBox';

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onAction: undefined,
    selectionMode: 'single',
  },
};

export default meta;

export const Example = (args: any) => (
  <ListBox aria-label="Ice cream flavor" {...args}>
    <ListBoxItem>Chocolate</ListBoxItem>
    <ListBoxItem>Mint</ListBoxItem>
    <ListBoxItem>Strawberry</ListBoxItem>
    <ListBoxItem>Vanilla</ListBoxItem>
  </ListBox>
);
