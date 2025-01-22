'use client';

import React, { useState } from 'react';
import { Menu, MenuItem } from '@material-tailwind/react';
import { FilterOptions } from "./FilterOptions";

export const Filter: React.FC<{ onSelect: (filter: FilterOptions) => void }> = ({ onSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>(FilterOptions.All);

  const handleSelect = (filter: FilterOptions) => {
    setSelectedFilter(filter);
    onSelect(filter);
  };

  return (
    <Menu>
      {Object.values(FilterOptions).map(option => (
        <MenuItem key={option} onClick={() => handleSelect(option)}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};
