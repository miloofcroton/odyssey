import React from 'react';
import { css, cx } from '@linaria/core';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

const breadcrumbListStyles = css`
  color: var(--muted-foreground);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  word-break: break-word;

  @media (min-width: 640px) {
    gap: 0.625rem;
  }
`;

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cx(breadcrumbListStyles, className)}
      {...props}
    />
  );
}

const breadcrumbItemStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
`;

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cx(breadcrumbItemStyles, className)}
      {...props}
    />
  );
}

const breadcrumbLinkStyles = css`
  &:hover {
    color: var(--foreground);
  }
  transition: color 150ms;
`;

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cx(breadcrumbLinkStyles, className)}
      {...props}
    />
  );
}

const breadcrumbPageStyles = css`
  color: var(--foreground);
  font-weight: normal;
`;

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cx(breadcrumbPageStyles, className)}
      {...props}
    />
  );
}

const breadcrumbSeparatorStyles = css`
  & > svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cx(breadcrumbSeparatorStyles, className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

const breadcrumbEllipsisStyles = css`
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
`;

const ellipsisIconStyles = css`
  width: 1rem;
  height: 1rem;
`;

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cx(breadcrumbEllipsisStyles, className)}
      {...props}
    >
      <MoreHorizontal className={ellipsisIconStyles} />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
