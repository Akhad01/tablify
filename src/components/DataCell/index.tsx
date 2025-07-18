import React, { forwardRef } from 'react'
import { Box, Center, Icon } from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import type { CellContext } from '@tanstack/react-table';

import CalendarIcon from '../icons/CalendarIcon';
import "react-datepicker/dist/react-datepicker.css";

type DateCustomInputProps = {
  value?: string;
  onClick?: () => void;
  clearDate: () => void;
};

const DateCustomInput = forwardRef<HTMLDivElement, DateCustomInputProps>(({ value, onClick, clearDate }, ref) => (
  <Center 
    ref={ref}
    onClick={onClick} 
    cursor='pointer'
  >
    { value ? ( 
      <> {value}
      <Box
        pos='absolute'
        right={3}
        fontSize='md'
        color='red.300'
        onClick={
          (e) => {
            e.stopPropagation()
            clearDate()
          }
        }
      >
        &times;
      </Box>
    </> 
  ) : ( 
  <Icon as={CalendarIcon} fontSize='xl' /> )}
  </Center>
))

interface ClientRow {
  [key: string]: any;
  registrationDate?: Date | null;
}

type Props = CellContext<ClientRow, Date | null>;

const DataCell = ({
  getValue, row, column, table
}: Props) => {
  const date = getValue()
  const { updateData } = table.options.meta as {
    updateData: (rowIndex: number, columnId: string, value: Date | null) => void;
  }

  return (
    <DatePicker 
      wrapperClassName="date-wrapper" 
      dateFormat='MMMM d, yyyy' 
      selected={
        date
      }
      onChange={
        (date) => updateData(
          row.index, column.id, date
        )
      } 
      customInput={<DateCustomInput clearDate={
        () => updateData(
          row.index, column.id, null
        )
      } />}
    />
  )
}

export default DataCell