'use client';

import { SimpleFooter } from './components/Footer';
import { Display } from './components/Display';
import { FilterOptions } from './components/FilterOptions';
import { Filter } from './components/Filter';
import { FilterHolder } from './components/FilterHolder';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState<FilterOptions>(FilterOptions.All);
  const [displayKey, setDisplayKey] = useState<number>(0); // State to trigger re-render

  useEffect(() => {
    setDisplayKey(prevKey => prevKey + 1); // Increment the key to refresh displays
  }, [filter]);  // Dependency array ensures this effects reruns when the filter changes

  return (
    <div className="flex-col flex items-center mt-20 min-h-screen h-full">
      <div>
        <Filter onSelect={setFilter} />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <Display key={`${displayKey}-0`} filter={filter} data={FilterHolder} />
        <Display key={`${displayKey}-1`} filter={filter} data={FilterHolder} />
        <Display key={`${displayKey}-2`} filter={filter} data={FilterHolder} />
        <Display key={`${displayKey}-3`} filter={filter} data={FilterHolder} />
        <Display key={`${displayKey}-4`} filter={filter} data={FilterHolder} />
        <Display key={`${displayKey}-5`} filter={filter} data={FilterHolder} />
      </div>
      <div className="flex min-h-screen">
        <SimpleFooter />
      </div>
    </div>
  );
}
