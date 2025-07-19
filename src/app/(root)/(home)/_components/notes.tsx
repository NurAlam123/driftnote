"use client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Post } from "@prisma/client";

import useSWR, { SWRResponse } from "swr";
import { fetcher } from "@/lib/utils";

// import { AtSign, Ghost } from "lucide-react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const Notes = () => {
  dayjs.extend(relativeTime);

  const url = "/api/posts";

  const {
    data,
    error,
    isLoading,
  }: SWRResponse<{ count: number; notes: Post[] }> = useSWR(url, fetcher, {
    refreshInterval: 120 * 1000,
  });

  if (!data) return <div>No data found</div>;
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Notes.DataTable columns={columns} data={data.notes} />
    </div>
  );
};

const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "title",
  },
  {
    accessorKey: "createdAt",
    header: "posted on",
  },
];

Notes.DataTable = function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Notes;
