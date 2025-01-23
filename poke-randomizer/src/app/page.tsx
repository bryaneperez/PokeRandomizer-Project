'use client';

import { SimpleFooter } from './components/Footer';
import { Display } from './components/Display';
import { FilterOptions } from './components/FilterOptions'; // Adjust as necessary
import { Filter } from './components/Filter';
import { FilterHolder} from './components/FilterHolder';
import React, { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState<FilterOptions>(FilterOptions.All);

  return (
    <div className="flex-col flex items-center mt-20 min-h-screen h-full">
      <div>
        <Filter onSelect={setFilter} />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <Display filter={filter} data = {FilterHolder} />
        <Display filter={filter} data = {FilterHolder}/>
        <Display filter={filter} data = {FilterHolder}/>
        <Display filter={filter} data = {FilterHolder}/>
        <Display filter={filter} data = {FilterHolder}/>
        <Display filter={filter} data = {FilterHolder}/>
      </div>
      <div className="flex min-h-screen">
        <SimpleFooter />
      </div>
    </div>
  );
}
