"use client";

import { Product } from "@/types";

export default function WishlistItem({
  item,
  onAddToCart,
  onRemove,
}: {
  item: Product;
  onAddToCart?: (id: number) => void;
  onRemove?: (id: number) => void;
}) {
  return (
    <div className='flex items-center py-4 border-b border-border'>
      <div className='bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden'>
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='ml-4 flex-1'>
        <h3 className='font-medium text-foreground'>{item.name}</h3>
        <p className='text-accent font-bold mt-1'>${item.price.toFixed(2)}</p>
      </div>

      <div className='flex space-x-2'>
        <button
          className='px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-700 transition'
          onClick={() => onAddToCart?.(item.id)}>
          Add to Cart
        </button>
        <button
          className='p-2 text-danger hover:text-red-700'
          onClick={() => onRemove?.(item.id)}
          aria-label='Remove from wishlist'>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
