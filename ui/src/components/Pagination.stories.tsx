import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from 'lucide-react';

import { Button } from './Button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './Pagination';

const contentStyles = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const itemStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background-color: hsl(var(--muted));
  }

  &[data-active="true"] {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
`;

const iconStyles = css`
  width: 1rem;
  height: 1rem;
`;

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

export const Default = () => (
  <Pagination>
    <PaginationContent className={contentStyles}>
      <PaginationItem>
        <PaginationPrevious href="#" className={itemStyles}>
          <ChevronLeft className={iconStyles} />
          Previous
        </PaginationPrevious>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className={itemStyles}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis>
          <MoreHorizontal className={iconStyles} />
        </PaginationEllipsis>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className={itemStyles} data-active={true}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className={itemStyles}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className={itemStyles}>
          6
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" className={itemStyles}>
          Next
          <ChevronRight className={iconStyles} />
        </PaginationNext>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export const WithoutLinks = () => (
  <Pagination>
    <PaginationContent className={contentStyles}>
      <PaginationItem>
        <Button variant="outline" size="icon" className={itemStyles}>
          <ChevronLeft className={iconStyles} />
        </Button>
      </PaginationItem>
      <PaginationItem>
        <Button variant="outline" size="icon" className={itemStyles}>
          1
        </Button>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis>
          <MoreHorizontal className={iconStyles} />
        </PaginationEllipsis>
      </PaginationItem>
      <PaginationItem>
        <Button variant="outline" size="icon" className={itemStyles} data-active={true}>
          4
        </Button>
      </PaginationItem>
      <PaginationItem>
        <Button variant="outline" size="icon" className={itemStyles}>
          5
        </Button>
      </PaginationItem>
      <PaginationItem>
        <Button variant="outline" size="icon" className={itemStyles}>
          6
        </Button>
      </PaginationItem>
      <PaginationItem>
        <Button variant="outline" size="icon" className={itemStyles}>
          <ChevronRight className={iconStyles} />
        </Button>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);
