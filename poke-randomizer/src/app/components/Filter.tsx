'use client';

import React, { useState } from 'react';
import { Menu, MenuItem, MenuList, MenuHandler, Button, Typography } from '@material-tailwind/react';
import { FilterOptions } from './FilterOptions';

export const Filter: React.FC<{ onSelect: (filter: FilterOptions) => void }> = ({ onSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>(FilterOptions.All);

  const handleSelect = (filter: FilterOptions) => {
    setSelectedFilter(filter);
    onSelect(filter);
  };

  return (
    <Menu>
      <MenuHandler>
        <Button>Generation Select</Button>
      </MenuHandler>
      <MenuList>
        {Object.values(FilterOptions).map(option => (
          <MenuItem key={option} onClick={() => handleSelect(option)} className="flex justify-between">
            {option}
            {option === selectedFilter && <Typography className="ml-4">✔️</Typography>}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
