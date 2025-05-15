import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRight, Home } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './Breadcrumb';

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumb>;

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: BreadcrumbProps) => (
    <Breadcrumb className={css`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `} {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className={css`
          display: flex;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          color: hsl(var(--foreground));
          font-size: 0.875rem;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: hsl(var(--foreground) / 0.8);
          }
        `}>
          <Home className={css`
            height: 1rem;
            width: 1rem;
          `} />
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className={css`
          height: 1rem;
          width: 1rem;
          color: hsl(var(--muted-foreground));
        `} />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components" className={css`
          text-decoration: none;
          color: hsl(var(--foreground));
          font-size: 0.875rem;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: hsl(var(--foreground) / 0.8);
          }
        `}>
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className={css`
          height: 1rem;
          width: 1rem;
          color: hsl(var(--muted-foreground));
        `} />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage className={css`
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
        `}>
          Breadcrumb
        </BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};
