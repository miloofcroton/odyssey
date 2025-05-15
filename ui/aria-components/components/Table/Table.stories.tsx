import type { Meta } from '@storybook/react';
import { Cell, TableBody } from 'react-aria-components';

import { Column, Row, Table, TableHeader } from '~/ui/Table/Table';

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onRowAction: undefined,
    selectionMode: 'multiple',
  },
};

export default meta;

export const Example = (args: any) => (
  <Table aria-label="Files" {...args}>
    <TableHeader>
      <Column isRowHeader>Name</Column>
      <Column>Type</Column>
      <Column>Date Modified</Column>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>Games</Cell>
        <Cell>File folder</Cell>
        <Cell>6/7/2020</Cell>
      </Row>
      <Row>
        <Cell>Program Files</Cell>
        <Cell>File folder</Cell>
        <Cell>4/7/2021</Cell>
      </Row>
      <Row>
        <Cell>bootmgr</Cell>
        <Cell>System file</Cell>
        <Cell>11/20/2010</Cell>
      </Row>
    </TableBody>
  </Table>
);
