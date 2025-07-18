import React from 'react'
import {
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack
} from '@chakra-ui/react'
import type { ColumnFilter } from '@tanstack/react-table'

import FilterIcon from './icons/FilterIcon'
import { STATUSES } from '../data'
import { ColorIcon } from './StatusCell'
import type { Status } from '../types'

interface StatusItemProps {
  status: Status
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFilter[]>>
  isActive: boolean
}

const StatusItem: React.FC<StatusItemProps> = ({ status, setColumnFilters, isActive }) => (
  <Flex
    align="center"
    cursor="pointer"
    borderRadius={5}
    fontWeight="bold"
    p={1.5}
    bg={isActive ? 'gray.800' : 'transparent'}
    _hover={{ bg: 'gray.800' }}
    onClick={() => {
      setColumnFilters(prev => {
        const statusFilter = prev.find(f => f.id === 'status')
        const statuses: string[] = Array.isArray(statusFilter?.value)
          ? statusFilter!.value.map(String)
          : []

        return statusFilter
          ? prev.map(f =>
              f.id === 'status'
                ? {
                    ...f,
                    value: isActive
                      ? statuses.filter(s => s !== String(status.id))
                      : [...statuses, String(status.id)]
                  }
                : f
            )
          : [...prev, { id: 'status', value: [String(status.id)] }]
      })
    }}

  >
    <ColorIcon color={status.color} mr={3} />
    {status.name}
  </Flex>
)

interface FilterPopoverProps {
  columnFilters: ColumnFilter[]
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFilter[]>>
}

const FilterPopover: React.FC<FilterPopoverProps> = ({ columnFilters, setColumnFilters }) => {
  const rawStatusFilter = columnFilters.find(f => f.id === 'status')?.value
const filterStatuses: string[] = Array.isArray(rawStatusFilter)
  ? rawStatusFilter.map(String)
  : []

  console.log('rawStatusFilter', rawStatusFilter);
  

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button size="sm" leftIcon={<Icon as={FilterIcon} fontSize={18} />}>
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Фильтр</PopoverHeader>
        <PopoverBody>
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Фильтр по:
          </Text>
          <Text fontWeight="bold" color="gray.400" mb={1}>
            Статус
          </Text>
          <VStack align="flex-start" spacing={1}>
            {STATUSES.map(status => (
              <StatusItem
                key={status.id}
                status={status}
                isActive={filterStatuses.includes(String(status.id))}
                setColumnFilters={setColumnFilters}
              />
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default FilterPopover
