import type { Meta } from '@storybook/react';

import { GridList, GridListItem } from '~/ui/GridList/GridList';

const meta: Meta<typeof GridList> = {
  component: GridList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onAction: undefined,
    selectionMode: 'multiple',
  },
};

export default meta;

export const Example = (args: any) => (
  <GridList aria-label="Ice cream flavors" {...args}>
    <GridListItem>Chocolate</GridListItem>
    <GridListItem>Mint</GridListItem>
    <GridListItem>Strawberry</GridListItem>
    <GridListItem>Vanilla</GridListItem>
  </GridList>
);
