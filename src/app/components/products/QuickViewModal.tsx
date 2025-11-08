"use client";

import { useState } from "react";
import type { Product } from "@/types";

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleAddToCartClick = () => {
    // Call onAddToCart with just the product ID, as that's what the parent component expects
    onAddToCart(product);
    onClose();
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 '>
      <div className='bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold text-foreground'>
              {product.name}
            </h2>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700'
              aria-label='Close'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-96 object-contain'
              />
            </div>

            <div>
              <div className='flex items-center mb-4'>
                <div className='flex text-accent'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 fill-current ${
                        i < Math.floor(product.rating)
                          ? "text-accent"
                          : "text-gray-300"
                      }`}
                      viewBox='0 0 24 24'>
                      <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                    </svg>
                  ))}
                </div>
                <span className='ml-2 text-gray'>{product.rating}</span>
              </div>

              <div className='mb-6'>
                <span className='text-3xl font-bold text-foreground'>
                  Rs {product.price.toFixed(2)}
                </span>
                {product.originalPrice &&
                  product.originalPrice > product.price && (
                    <span className='ml-3 text-xl text-gray line-through'>
                      Rs {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                {product.discount && (
                  <span className='ml-3 bg-danger text-white text-sm font-bold px-2 py-1 rounded-full'>
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              <p className='text-gray mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <div className='mb-6'>
                <h3 className='text-lg font-semibold mb-2'>
                  Quantity: {quantity}
                </h3>
                <p className='text-gray-600 text-sm'>
                  Adjust quantity in cart after adding
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={handleAddToCartClick}
                  className='bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition flex-1'>
                  Add to Cart
                </button>
                <button
                  onClick={onClose}
                  className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex-1'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
