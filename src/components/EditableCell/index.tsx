import React, { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import type { CellContext, TableMeta } from '@tanstack/react-table';

interface CustomTableMeta<TData> extends TableMeta<TData> {
  updateData: (rowIndex: number, columnId: string, value: unknown) => void;
}

type EditableCellProps<TData, TValue> = CellContext<TData, TValue>

const EditableCell = <TData, TValue>({ getValue, row, column, table }: EditableCellProps<TData, TValue>) => {
  const initialValue = getValue()
  const [value, setValue] = useState(String(initialValue ?? ''))

  const onBlur = () => {
    const meta = table.options.meta as CustomTableMeta<TData>
    meta?.updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(String(initialValue ?? ''))
  }, [initialValue])

  return (
    <Input 
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={onBlur}
      variant='filled' 
      size='sm' 
      w='85%' 
      overflow='hidden' 
      textOverflow='ellipsis' 
      whiteSpace='nowrap'
    />
  )
}

export default EditableCell



