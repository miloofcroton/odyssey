import type { Meta } from '@storybook/react';
import { Menu } from 'react-aria-components';

import { MenuButton, MenuItem } from '~/ui/Menu/Menu';

const meta: Meta<typeof Menu> = {
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <MenuButton label="Edit">
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </MenuButton>
);
