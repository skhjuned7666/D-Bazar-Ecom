"use client";

import { categories } from "@/data/categories";
import CategoryCard from "@/app/components/ui/CategoryCard";

export default function CategoriesPage() {
  return (
    <div className='min-h-screen bg-background py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl font-bold text-foreground mb-6'>
          Shop by Category
        </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
