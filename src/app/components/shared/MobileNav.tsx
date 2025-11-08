"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      id: "search",
      label: "Search",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    { id: "categories", label: "Categories", icon: "M4 6h16M4 12h16m-7 6h7" },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
      id: "account",
      label: "Account",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
  ];

  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border'>
      <div className='grid grid-cols-5'>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.id === "home" ? "/" : `/${item.id}`}
            className={`flex flex-col items-center py-2 ${
              activeTab === item.id ? "text-secondary" : "text-gray"
            }`}
            onClick={() => setActiveTab(item.id)}>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={item.icon}
              />
            </svg>
            <span className='text-xs mt-1'>{item.label}</span>
            {item.id === "wishlist" && (
              <span className='absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                2
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
