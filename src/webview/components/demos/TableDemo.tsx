import React from 'react';
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '../vscode-elements/Table';

const TableDemo: React.FC = () => {
  return (
    <div>
      <h2>Basic Table Example</h2>
      <Table zebra borderedRows>
        <TableHeader slot="header">
          <TableHeaderCell>First name</TableHeaderCell>
          <TableHeaderCell>Last name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableHeader>
        <TableBody slot="body">
          <TableRow>
            <TableCell>Vincenza</TableCell>
            <TableCell>Lindgren</TableCell>
            <TableCell>Delia21@yahoo.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Clark</TableCell>
            <TableCell>Breitenberg</TableCell>
            <TableCell>Nat_Moore@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fiona</TableCell>
            <TableCell>Wintheiser</TableCell>
            <TableCell>Asa30@gmail.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export { TableDemo };
