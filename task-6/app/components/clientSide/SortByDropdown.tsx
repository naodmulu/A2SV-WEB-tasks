import React, { useState } from 'react';

type SortOption = 'Most relevant' | 'Newest' | 'Oldest';

const SortByDropdown: React.FC = () => {
  const [sortOption, setSortOption] = useState<SortOption>('Most relevant');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return (
    <div className="inline-flex items-center space-x-2 text-sm text-gray-700">
      <label htmlFor="sortBy" className="font-medium">Sort by:</label>
      <select
        id="sortBy"
        value={sortOption}
        onChange={handleSortChange}
        className="text-sm font-semibold text-[#25324B] bg-transparent cursor-pointer focus:outline-none"
      >
        <option value="Most relevant">Most relevant</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortByDropdown;
