import type { ColumnDef, FilterFn, Row } from "@tanstack/react-table";
import type { Status, Task } from "../../types";
import EditableCell from "../EditableCell";
import DataCell from "../DataCell";
import StatusCell from "../StatusCell/StatusCell";

const statusFilterFn: FilterFn<Task> = (
  row: Row<Task>,
  columnId: string,
  filterStatuses: string[]
) => {
  if (filterStatuses.length === 0) return true;
  const status = row.getValue(columnId) as Status | null;
  
  return status ? filterStatuses.includes(String(status?.id)) : false;
};


export const columns: ColumnDef<Task>[] = [
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