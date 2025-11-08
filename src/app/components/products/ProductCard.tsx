"use client";

import { useState } from "react";
import type { Product } from "@/types";
import QuickViewModal from "./QuickViewModal";

export default function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart?: (id: number) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <div
      className='bg-card-bg rounded-xl shadow-soft overflow-hidden hover:shadow-hover transition-all duration-300 group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='relative'>
        <div className='bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-square flex items-center justify-center overflow-hidden'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover'
          />
        </div>
        {product.discount && (
          <span className='absolute top-2 left-2 bg-danger text-white text-xs font-bold px-2 py-1 rounded-full'>
            {product.discount}% OFF
          </span>
        )}
        {isHovered && (
          <div className='absolute inset-0 bg-black/50 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {/* <button
              className='bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition mr-2'
              onClick={() => onAddToCart?.(product.id)}>
              Add to Cart
            </button> */}
            <button
              className='bg-primary/50 text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition'
              onClick={() => setIsQuickViewOpen(true)}>
              Quick View
            </button>
          </div>
        )}
        <QuickViewModal
          product={product}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          onAddToCart={(product) => onAddToCart?.(product.id)}
        />
      </div>
      <div className='p-4'>
        <h3 className='font-semibold text-foreground text-sm line-clamp-2'>
          {product.name}
        </h3>
        <div className='mt-2 flex items-center'>
          <div className='flex text-accent'>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 fill-current ${
                  i < Math.floor(product.rating)
                    ? "text-accent"
                    : "text-gray-300"
                }`}
                viewBox='0 0 24 24'>
                <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
              </svg>
            ))}
          </div>
          <span className='ml-1 text-xs text-gray'>{product.rating}</span>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <div>
            <span className='font-bold text-foreground'>
              Rs {product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className='ml-2 text-sm text-gray line-through'>
                Rs {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className='p-1 rounded-full hover:bg-light'
            onClick={() => onAddToCart?.(product.id)}
            aria-label='Add to cart'>
            <svg
              className='w-5 h-5 text-gray'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
