"use client"
import { useState } from 'react';

interface Filter {
  label: string;
  query: string;
}

interface SortOption {
  label: string;
  query: string;
}

interface FilterSortComponentProps {
  filters: Filter[];
  sortOptions: SortOption[];
  onFilterChange: (filter: string) => void;
  onSortChange: (sortOption: string) => void;
}

const FilterSortComponent: React.FC<FilterSortComponentProps> = ({ filters, sortOptions, onFilterChange, onSortChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const handleSortClick = (sortOption: string) => {
    setSelectedSort(sortOption);
    onSortChange(sortOption);
  };

  return (
    <div className="bg-white p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
        {filters.map((filter) => (
          <button
            key={filter.label}
            className={`flex items-center gap-2 px-6 py-3 border rounded ${selectedFilter === filter.query ? 'bg-gray-200' : 'bg-white border-gray-200'}`}
            onClick={() => handleFilterClick(filter.query)}
          >
            <span className="font-satoshi-light text-dark-primary">{filter.label}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
        <span className="font-satoshi-light text-dark-primary hidden md:block">Sorting by:</span>
        {sortOptions.map((option) => (
          <button
            key={option.label}
            className={`flex items-center gap-2 px-6 py-3 border rounded ${selectedSort === option.query ? 'bg-gray-200' : 'bg-white border-gray-200'}`}
            onClick={() => handleSortClick(option.query)}
          >
            <span className="font-satoshi-light text-dark-primary">{option.label}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSortComponent;
