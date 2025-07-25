import React from 'react'
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { STATUSES } from '../../data';
import type { CellContext } from '@tanstack/react-table';
import type { Status, Task } from '../../types';

interface ColorIconProps {
  color: string;
  [key: string]: string | number;
}

export const ColorIcon: React.FC<ColorIconProps> = ({color, ...props}) => (
  <Box w="12px" h="12px" bg={color} borderRadius="3px" { ...props } />
)

const StatusCell = ({ getValue, row, column, table }: CellContext<Task, Status | null>) => {
  const { name, color } = getValue() || {}

  const updateData = (table.options.meta as { updateData: (rowIndex: number, columnId: string, value: Status | null) => void }).updateData;

  return (
    <Menu 
      isLazy 
      offset={[
        0, 0
      ]} 
      flip={false} 
      autoSelect={false}
    >
      <MenuButton 
        h='100%' 
        w='100%' 
        textAlign='left' 
        p={1.5} 
        bg={color || "transparent"} 
        color='gray.900'
      >
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem 
            onClick={
              () => updateData(
                row.index, column.id, null
              )
            } 
          >
            <ColorIcon color='red.400' mr={3} />
            None
        </MenuItem>
        {STATUSES.map(status => 
          <MenuItem 
            onClick={
              () => updateData(
                row.index, column.id, status
              )
            } 
            key={status.id}
          >
            <ColorIcon color={status.color} mr={3} />
            { status.name }
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default StatusCell

