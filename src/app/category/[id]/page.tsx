"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/app/components/products/ProductCard";
import {
  flashDeals,
  trendingProducts,
  electronicsProducts,
  fashionProducts,
  beautyProducts,
  homeProducts,
} from "@/data/products";
import { categories } from "@/data/categories";

export default function CategoryPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("name") || "Category";

  // Determine which products to show based on category
  let categoryProducts: any[] = [];
  switch (params.id) {
    case "1": // Electronics
      categoryProducts = electronicsProducts;
      break;
    case "2": // Fashion
      categoryProducts = [
        ...fashionProducts,
        ...flashDeals.filter(
          (p) =>
            p.name.includes("T-Shirt") ||
            p.name.includes("Dress") ||
            p.name.includes("Shoes") ||
            p.name.includes("Bag")
        ),
      ];
      break;
    case "3": // Beauty
      categoryProducts = beautyProducts;
      break;
    case "4": // Home
      categoryProducts = homeProducts;
      break;
    case "5": // Furniture
      categoryProducts = [
        ...homeProducts,
        ...flashDeals.filter(
          (p) =>
            p.name.includes("Cookware") ||
            p.name.includes("Bedding") ||
            p.name.includes("Lamp")
        ),
      ];
      break;
    case "6": // Grocery
      categoryProducts = trendingProducts.filter((p) =>
        p.name.includes("Coffee")
      );
      break;
    case "7": // Sports
      categoryProducts = fashionProducts.filter((p) =>
        p.name.includes("Shoes")
      );
      break;
    case "8": // Accessories
      categoryProducts = [
        ...fashionProducts.filter(
          (p) =>
            p.name.includes("Bag") ||
            p.name.includes("Hat") ||
            p.name.includes("Wallet")
        ),
        ...trendingProducts.filter((p) => p.name.includes("Sunglasses")),
      ];
      break;
    default:
      categoryProducts = [...flashDeals, ...trendingProducts];
  }

  const [sortOption, setSortOption] = useState("featured");

  // Sort products based on selected option
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className='min-h-screen bg-background py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
          <h1 className='text-2xl font-bold text-foreground mb-4 md:mb-0'>
            {categoryName}
          </h1>
          <div className='flex items-center space-x-4'>
            <span className='text-foreground'>Sort by:</span>
            <select
              className='border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-secondary focus:border-secondary'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              aria-label='Sort products by'>
              <option value='featured'>Featured</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
              <option value='rating'>Top Rated</option>
            </select>
          </div>
        </div>

        {sortedProducts.length === 0 ? (
          <div className='bg-white rounded-xl shadow-soft p-8 text-center'>
            <h2 className='text-xl font-bold text-foreground mb-2'>
              No products found
            </h2>
            <p className='text-gray mb-6'>
              There are no products in this category yet
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(productId) => {
                  // In a real app, you would add to cart here
                  alert(`Added product ${productId} to cart`);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
