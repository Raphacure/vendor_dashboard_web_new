import React, { useMemo } from "react";
import { Table, TableProps } from "antd";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import { StyledTableContainer } from "./CustomTable.styled";
import CustomPagination from "./Pagination/CustomPagination";
import { ColumnProps } from 'antd/es/table';

type TableData = Record<string, any>;

export interface CustomTableColumn<T = TableData> {
  key?: string;
  label: string;
  headerRender?: () => React.ReactNode;
  render?: (value: T[keyof T], row: T, rowIndex: number) => React.ReactNode;
  width?: string | number;
  align?: "left" | "right" | "center";
  sorter?: boolean | ((a: T, b: T) => number);
  dataIndex?: ColumnProps<T>['dataIndex'];
  fixed?: boolean | 'left' | 'right';
}

export type CustomTableColumnType<T> = Array<CustomTableColumn<T>>

interface WithPagination<T> {
  pagination: true;
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number, pageSize: number) => void;
  columns: Array<CustomTableColumn<T>>;
  data: T[];
  isLoading?: boolean;
  rowKey?: string | ((record: T) => React.Key);
  className?: string;
  onRow?: TableProps<T>["onRow"];
  scroll?: TableProps<T>["scroll"];
  headerCellClassName?: string;
  bodyCellClassName?: string;
  rowClassName?: string;
  showingName: string;
  expandable?: TableProps<T>["expandable"];
}

// When pagination is disabled
interface WithoutPagination<T> {
  pagination?: false;
  page?: never;
  pageSize?: never;
  total?: number;
  onPageChange?: never;
  columns: Array<CustomTableColumn<T>>;
  data: T[];
  isLoading?: boolean;
  rowKey?: string | ((record: T) => React.Key);
  className?: string;
  onRow?: TableProps<T>["onRow"];
  scroll?: TableProps<T>["scroll"];
  headerCellClassName?: string;
  bodyCellClassName?: string;
  rowClassName?: string;
  showingName: string;
  expandable?: TableProps<T>["expandable"];
}

export type CustomTableProps<T = TableData> =
  | WithPagination<T>
  | WithoutPagination<T>;

const getRowKey = <T extends TableData>(
  rowKey: CustomTableProps<T>["rowKey"]
): TableProps<T>["rowKey"] => {
  if (typeof rowKey === "function") return rowKey;
  if (typeof rowKey === "string")
    return (record: T) =>
      record[rowKey] ?? record.id ?? record.key ?? String(Math.random());
  return (record: T, idx?: number) =>
    record.id ?? record.key ?? idx?.toString() ?? String(Math.random());
};

const CustomTable = <T extends TableData = TableData>({
  columns,
  data,
  page,
  pageSize,
  total,
  onPageChange,
  isLoading = false,
  rowKey,
  className = "",
  onRow,
  scroll={ x: "max-content" },
  headerCellClassName = "h-[50px] py-0 px-1 !text-center",
  bodyCellClassName = "h-[60px] !text-center",
  rowClassName,
  pagination = true,
  showingName = "Data",
  expandable,
}: CustomTableProps<T>) => {
  // Convert columns to AntD Table columns with proper typing
  const antdColumns = useMemo(
    () =>
      columns.map(
        ({ key, label, headerRender, render, width, align, sorter,dataIndex,fixed }) => ({
          title: headerRender ? headerRender() : label,
          dataIndex: dataIndex,
          key,
          width,
          align,
          sorter,
          fixed,
          render: render
            ? (value: any, record: T, rowIndex: number) =>
                render(value, record, rowIndex)
            : undefined,
          onCell: (_record: T, _index?: number) => ({
            className: bodyCellClassName,
          }),
          onHeaderCell: (_column: any, _index?: number) => ({
            className: headerCellClassName,
          }),
        })
      ),
    [columns, bodyCellClassName, headerCellClassName]
  );

  return (
    <>
      <div>
        <p className="mb-3 mt-3">
          Showing {data?.length ?? 0} of {pagination ? (total ?? "0") : (data?.length ?? "0")}{" "}
          {showingName}
        </p>
      </div>
      <StyledTableContainer className={`table-container ${className}`}>
        <CustomSpinLoader size="large" spinning={isLoading}>
          <Table
            columns={antdColumns}
            dataSource={data}
            pagination={false}
            rowKey={getRowKey(rowKey)}
            className="min-w-full text-sm custom-ant-table"
            onRow={(record, index) => ({
              ...(onRow ? onRow(record, index) : {}),
              className: rowClassName,
            })}
            scroll={scroll}
            locale={{ emptyText: `No ${showingName} Available` }}
            expandable={expandable}
          />
        </CustomSpinLoader>
      </StyledTableContainer>
      {pagination && (
        <CustomPagination
          onPageChange={onPageChange}
          page={page}
          pageSize={pageSize}
          total={total}
        />
      )}
    </>
  );
};

export default CustomTable;
