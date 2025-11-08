"use client";

import { Category } from "@/types";
import Link from "next/link";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.id}?name=${encodeURIComponent(
        category.name
      )}`}
      className='flex flex-col items-center p-4 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300'>
      <span className='text-3xl mb-2'>{category.icon}</span>
      <span className='text-sm text-center text-foreground'>
        {category.name}
      </span>
    </Link>
  );
}
