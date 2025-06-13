'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Search({ placeholder, onFilterChange }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');

  useEffect(() => {
    if (typeof onFilterChange === 'function') {
      onFilterChange({ query, year, branch });
    }
  }, [query, year, branch]);

  function handleSearch(term){
    setQuery(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleYearChange(selectedYear) {
    console.log("selected year:", selectedYear);
    setYear(selectedYear);
  }

  function handleBranchChange(selectedBranch) {
    console.log("selected branch:", selectedBranch);
    setBranch(selectedBranch);
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-white shadow-md rounded-lg">
      <div className="relative w-full md:w-auto">
        <input
          type="text"
          className="text-black w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          onChange={(e) => handleSearch(e.target.value)}
          value={query}
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute top-1/2 right-3 transform -translate-y-1/2" />
      </div>
      <div className="flex gap-4">
        <select
          name="year"
          id="year"
          className="text-black  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value="">All Years</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <select
          name="branch"
          id="branch"
          className="text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={branch}
          onChange={(e) => handleBranchChange(e.target.value)}
        >
          <option value="">All Branches</option>
          <option value="CSE">CSE</option>
          <option value="AIML">AIML</option>
          <option value="ECE">ECE</option>
          <option value="IT">IT</option>
          <option value="CSDS">CSDS</option>
          <option value="CSCYS">CSCYS</option>
          <option value="MECHANICAL">Mechanical</option>
          <option value="AUTOMOBILE">Automobile</option>
        </select>
      </div>
    </div>
  );
}