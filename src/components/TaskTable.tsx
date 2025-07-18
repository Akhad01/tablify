import { useState } from "react";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type ColumnDef, type ColumnFiltersState, type FilterFn, type Row } from "@tanstack/react-table";

import EditableCell from "./EditableCell";

import DATA from "../data";
import StatusCell from "./StatusCell";
import DataCell from "./DataCell";
import Filters from "./Filters";
import SortIcon from "./icons/SortIcon";
import type { Status, Task } from "../types";
import { useTasks } from "../hooks/useTasks";

const statusFilterFn: FilterFn<Task> = (
  row: Row<Task>,
  columnId: string,
  filterStatuses: string[]
) => {
  if (filterStatuses.length === 0) return true;
  const status = row.getValue(columnId) as Status | null;
  
  return status ? filterStatuses.includes(String(status?.id)) : false;
};

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: 'includesString'
  },
  {
    accessorKey: 'inn',
    header: 'Inn',
    cell: EditableCell
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: StatusCell,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: statusFilterFn
  },
  {
    accessorKey: 'registrationDate',
    header: 'RegistrationDate',
    size: 225,
    cell: DataCell
  },
  
]

const TaskTable = () => {
  // const [data, setData] = useState(DATA)
  const { tasks, statuses, loading, error, updateTask } = useTasks();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const table = useReactTable({
    data: tasks,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: 'onChange',
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => updateTask(
        prev => prev.map(
          (row, index) => 
            index === rowIndex 
              ? {
                ...prev[rowIndex],
                [columnId]: value,
                } 
              : row
        )
      )
    }
  })

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>Error: {error}</Box>;


  return <Box>
    <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
    <Box className="table" w={table.getTotalSize()}>
      {table.getHeaderGroups().map(headerGroup => <Box className="tr" key={headerGroup.id}>
      {headerGroup.headers.map(header => (
        <Box className="th" w={header.getSize()} key={header.id}>
          {flexRender(
            header.column.columnDef.header,
            header.getContext()
          )}
          {header.column.getCanSort() && (
            <Icon
              as={SortIcon}
              mx={3}
              fontSize={14}
              onClick={header.column.getToggleSortingHandler()}
            />
          )}
          {{
            asc: ' 🔼',
            desc: ' 🔽'
          }[header.column.getIsSorted() as string]}
          <Box
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
            className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
          />
        </Box>
      ))}
      </Box>)}
      {
        table.getRowModel().rows.map(row => <Box className="tr" key={row.id}>
          {row.getVisibleCells().map(cell => {
            
            return (
            <Box className="td" w={cell.column.getSize()} key={cell.id}>
              {
                flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )
              }
            </Box>)
          })}
        </Box>)
      }
    </Box>
    <br />
    <Text mb={2}> 
      Page {' '}
      { table.getState().pagination.pageIndex + 1} of{' '}
      { table.getPageCount() }
    </Text>
    <ButtonGroup size='sm' isAttached variant='outline'>
      <Button onClick={
        () => table.previousPage()
      }
        isDisabled={
          !table.getCanPreviousPage()
        }
      >
        {'<'}
      </Button>
      <Button onClick={
        () => table.nextPage()
      }
        isDisabled={
          !table.getCanNextPage()
        }>
        {'>'}
      </Button>
    </ButtonGroup>
  </Box>;
};
export default TaskTable;
