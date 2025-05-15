import * as React from 'react';
import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type Cell,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type Header,
  type HeaderGroup,
  type Row,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const payments: Array<Payment> = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '9a7b6c45',
    amount: 75,
    status: 'success',
    email: 'test@example.com',
  },
  {
    id: '6d4e3f21',
    amount: 150,
    status: 'failed',
    email: 'demo@example.com',
  },
];

const columns: Array<ColumnDef<Payment>> = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }: { row: Row<Payment> }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return formatted;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid hsl(var(--border));
  border-radius: 0.5rem;
  overflow: hidden;
`;

const headerStyles = css`
  background-color: hsl(var(--muted));
  border-bottom: 1px solid hsl(var(--border));
`;

const headerCellStyles = css`
  padding: 0.75rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--muted-foreground));
`;

const rowStyles = css`
  &:nth-child(even) {
    background-color: hsl(var(--muted) / 0.5);
  }

  &:hover {
    background-color: hsl(var(--muted));
  }
`;

const cellStyles = css`
  padding: 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
`;

const DataTableDemo = () => {
  const table = useReactTable({
    data: payments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className={tableStyles}>
      <TableHeader className={headerStyles}>
        {table.getHeaderGroups().map((headerGroup: HeaderGroup<Payment>) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header: Header<Payment, unknown>) => (
              <TableHead key={header.id} className={headerCellStyles}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row: Row<Payment>) => (
          <TableRow key={row.id} className={rowStyles}>
            {row.getVisibleCells().map((cell: Cell<Payment, unknown>) => (
              <TableCell key={cell.id} className={cellStyles}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

type DataTableProps = React.ComponentProps<typeof Table>;

const meta = {
  title: 'Components/DataTable',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: DataTableProps) => <DataTableDemo {...args} />,
};
