import { Breadcrumb, Link } from 'react-aria-components';
import type { Meta } from '@storybook/react';

// import { Breadcrumbs } from '~/ui/Breadcrumbs/Breadcrumbs';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <Breadcrumbs {...args}>
    <Breadcrumb>
      <Link href="/">Home</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link href="/react-aria/">React Aria</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link>Breadcrumbs</Link>
    </Breadcrumb>
  </Breadcrumbs>
);
