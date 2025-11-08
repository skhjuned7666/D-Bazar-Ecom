"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
  placeholder = "Search products...",
}: {
  onSearch?: (query: string) => void;
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className='relative w-full'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className='w-full px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
      />
      <button
        type='submit'
        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray'
        aria-label='Search'>
        <svg
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </form>
  );
}
