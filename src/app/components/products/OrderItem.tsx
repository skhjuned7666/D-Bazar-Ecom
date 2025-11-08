"use client";

import { OrderItem as OrderItemType } from "@/types";

export default function OrderItem({ item }: { item: OrderItemType }) {
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
        <p className='text-foreground mt-1'>Qty: {item.quantity}</p>
      </div>

      <div className='font-bold text-foreground'>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
