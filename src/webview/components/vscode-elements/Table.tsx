import React from 'react';


interface ITableProps {
  zebra?: boolean;
  borderedRows?: boolean;
  borderedColumns?: boolean;
  responsive?: boolean;
  breakpoint?: string;
  resizable?: boolean;
  delayedResizing?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Table: React.FC<ITableProps> = ({ zebra, borderedRows, borderedColumns, responsive, breakpoint, resizable, delayedResizing, className, children }) => {
  const tableClasses = [
    'vscode-table',
    zebra ? 'zebra' : '',
    borderedRows ? 'bordered-rows' : '',
    borderedColumns ? 'bordered-columns' : '',
    responsive ? 'responsive' : '',
    resizable ? 'resizable' : '',
    delayedResizing ? 'delayed-resizing' : '',
    className || ''
  ].join(' ');

  return <table className={tableClasses} style={responsive ? { maxWidth: breakpoint } : {}}>{children}</table>;
};

export { Table };

interface ITableHeaderProps {
  slot: 'header';
  children: React.ReactNode;
}

const TableHeader: React.FC<ITableHeaderProps> = ({ children }) => {
  return <thead slot="header">{children}</thead>;
};

export { TableHeader };

interface ITableHeaderCellProps {
  children: React.ReactNode;
}

const TableHeaderCell: React.FC<ITableHeaderCellProps> = ({ children }) => {
  return <th className="vscode-table-header-cell">{children}</th>;
};

export { TableHeaderCell };

interface ITableBodyProps {
  slot: 'body';
  children: React.ReactNode;
}

const TableBody: React.FC<ITableBodyProps> = ({ children }) => {
  return <tbody slot="body">{children}</tbody>;
};

export { TableBody };

interface ITableRowProps {
  children: React.ReactNode;
}

const TableRow: React.FC<ITableRowProps> = ({ children }) => {
  return <tr className="vscode-table-row">{children}</tr>;
};

export { TableRow };

interface ITableCellProps {
  children: React.ReactNode;
}

const TableCell: React.FC<ITableCellProps> = ({ children }) => {
  return <td className="vscode-table-cell">{children}</td>;
};

export { TableCell };
