"use client";

import { Product } from "@/types";

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: Product & { quantity: number };
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemove?: (id: number) => void;
}) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      onRemove?.(item.id);
      return;
    }
    onUpdateQuantity?.(item.id, newQuantity);
  };

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

        <div className='flex items-center mt-2'>
          <button
            className='w-8 h-8 flex items-center justify-center border border-border rounded-l-lg'
            onClick={() => handleQuantityChange(item.quantity - 1)}>
            -
          </button>
          <span className='w-12 h-8 flex items-center justify-center border-t border-b border-border'>
            {item.quantity}
          </span>
          <button
            className='w-8 h-8 flex items-center justify-center border border-border rounded-r-lg'
            onClick={() => handleQuantityChange(item.quantity + 1)}>
            +
          </button>

          <button
            className='ml-4 text-danger hover:text-red-700'
            onClick={() => onRemove?.(item.id)}>
            Remove
          </button>
        </div>
      </div>

      <div className='font-bold text-foreground'>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
