import React from 'react';
import { HStack, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import type { ColumnFiltersState } from '@tanstack/react-table';
import SearchIcon from './icons/SearchIcon';
import FilterPopover from './FilterPopover';

interface FiltersProps {
  columnFilters: ColumnFiltersState
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}

const Filters: React.FC<FiltersProps> = ({ columnFilters, setColumnFilters }) => {
  const taskName = columnFilters.find((f) => f.id === 'name')?.value || '';

  const onFilterChange = (id: string, value: unknown) => {
    setColumnFilters((prevFilters: ColumnFiltersState) => {
      const newFilters = prevFilters.filter((f) => f.id !== id);
      if (value !== '' && value !== null && value !== undefined) {
        newFilters.push({ id, value });
      }
      return newFilters;
    });
  };

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size='sm' maxW='12rem'>
        <InputLeftElement pointerEvents='none'>
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type='text'
          variant='filled'
          placeholder='Search by names'
          borderRadius={5}
          value={taskName as string}
          onChange={(e) => onFilterChange('name', e.target.value)}
        />
      </InputGroup>
      <FilterPopover 
        columnFilters={columnFilters} 
        setColumnFilters={setColumnFilters} 
      />
    </HStack>
  );
};

export default Filters;

