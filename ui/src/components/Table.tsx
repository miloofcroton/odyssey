import React from 'react';
import { css, cx } from '@linaria/core';

const containerStyles = css`
  position: relative;
  width: 100%;
  overflow-x: auto;
`;

const tableStyles = css`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
`;

const headerStyles = css`
  & tr {
    border-bottom: 1px solid var(--border);
  }
`;

const bodyStyles = css`
  & tr:last-child {
    border-bottom: none;
  }
`;

const footerStyles = css`
  background-color: color-mix(in srgb, var(--muted) 50%, transparent);
  border-top: 1px solid var(--border);
  font-weight: 500;

  & > tr:last-child {
    border-bottom: none;
  }
`;

const rowStyles = css`
  border-bottom: 1px solid var(--border);
  transition: colors 150ms;

  &:hover {
    background-color: color-mix(in srgb, var(--muted) 50%, transparent);
  }

  &[data-state="selected"] {
    background-color: var(--muted);
  }
`;

const headStyles = css`
  color: var(--muted-foreground);
  height: 2.5rem;
  padding: 0 0.5rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  white-space: nowrap;

  &:has([role="checkbox"]) {
    padding-right: 0;
  }

  & > [role="checkbox"] {
    transform: translateY(2px);
  }
`;

const cellStyles = css`
  padding: 0.5rem;
  vertical-align: middle;
  white-space: nowrap;

  &:has([role="checkbox"]) {
    padding-right: 0;
  }

  & > [role="checkbox"] {
    transform: translateY(2px);
  }
`;

const captionStyles = css`
  color: var(--muted-foreground);
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const Table = ({ className, ...props }: React.ComponentProps<'table'>) => {
  return (
    <div
      data-slot="table-container"
      className={containerStyles}
    >
      <table
        data-slot="table"
        className={cx(tableStyles, className)}
        {...props}
      />
    </div>
  );
};

const TableHeader = ({ className, ...props }: React.ComponentProps<'thead'>) => {
  return (
    <thead
      data-slot="table-header"
      className={cx(headerStyles, className)}
      {...props}
    />
  );
};

const TableBody = ({ className, ...props }: React.ComponentProps<'tbody'>) => {
  return (
    <tbody
      data-slot="table-body"
      className={cx(bodyStyles, className)}
      {...props}
    />
  );
};

const TableFooter = ({ className, ...props }: React.ComponentProps<'tfoot'>) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cx(footerStyles, className)}
      {...props}
    />
  );
};

const TableRow = ({ className, ...props }: React.ComponentProps<'tr'>) => {
  return (
    <tr
      data-slot="table-row"
      className={cx(rowStyles, className)}
      {...props}
    />
  );
};

const TableHead = ({ className, ...props }: React.ComponentProps<'th'>) => {
  return (
    <th
      data-slot="table-head"
      className={cx(headStyles, className)}
      {...props}
    />
  );
};

const TableCell = ({ className, ...props }: React.ComponentProps<'td'>) => {
  return (
    <td
      data-slot="table-cell"
      className={cx(cellStyles, className)}
      {...props}
    />
  );
};

const TableCaption = ({
  className,
  ...props
}: React.ComponentProps<'caption'>) => {
  return (
    <caption
      data-slot="table-caption"
      className={cx(captionStyles, className)}
      {...props}
    />
  );
};

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
