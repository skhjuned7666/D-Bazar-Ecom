"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartContext } from "@/context";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCartContext();

  return (
    <header className='sticky top-0 z-50 bg-white shadow-soft'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <button
              className='md:hidden mr-2 p-2 rounded-lg hover:bg-light'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle menu'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            <Link href='/' className='text-2xl font-bold text-primary'>
              🛍️D-Bazar
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className='hidden md:flex flex-1 max-w-md lg:max-w-xl mx-4'>
            <div className='relative w-full'>
              <input
                type='text'
                placeholder='Search for products, brands and more'
                className='w-full px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm lg:text-base'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
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
            </div>
          </div>

          {/* Icons */}
          <div className='flex items-center space-x-4'>
            <Link
              href='/wishlist'
              className='p-2 rounded-full hover:bg-light relative'
              aria-label='Wishlist'>
              <svg
                className='w-6 h-6 text-foreground'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
              <span className='absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                5
              </span>
            </Link>

            <Link
              href='/cart'
              className='p-2 rounded-full hover:bg-light relative'
              aria-label='Cart'>
              <svg
                className='w-6 h-6 text-foreground'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01'
                />
              </svg>
              {totalItems > 0 && (
                <span className='absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className='p-2 rounded-full hover:bg-light'
              aria-label='Profile'>
              <svg
                className='w-6 h-6 text-foreground'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className='md:hidden pb-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search for products, brands and more'
              className='w-full px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
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
          </div>
        </div>
      </div>
    </header>
  );
}
