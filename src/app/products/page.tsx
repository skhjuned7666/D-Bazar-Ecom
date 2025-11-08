"use client";

import { useState } from "react";
import {
  flashDeals,
  trendingProducts,
  electronicsProducts,
  fashionProducts,
  beautyProducts,
  homeProducts,
} from "@/data/products";
import ProductCard from "@/app/components/products/ProductCard";
import SearchBar from "@/app/components/ui/SearchBar";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // In a real app, you would filter products based on search query
  const allProducts = [
    ...flashDeals,
    ...trendingProducts,
    ...electronicsProducts,
    ...fashionProducts,
    ...beautyProducts,
    ...homeProducts,
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-background py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
          <h1 className='text-2xl font-bold text-foreground mb-4 md:mb-0'>
            All Products
          </h1>
          <div className='w-full md:w-1/3'>
            <SearchBar
              placeholder='Search products...'
              onSearch={setSearchQuery}
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className='bg-white rounded-xl shadow-soft p-8 text-center'>
            <h2 className='text-xl font-bold text-foreground mb-2'>
              No products found
            </h2>
            <p className='text-gray mb-6'>Try adjusting your search query</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {filteredProducts.map((product) => (
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
