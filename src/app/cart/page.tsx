"use client";

import { useState } from "react";
import { useCartContext } from "@/context";
import CartItem from "@/app/components/products/CartItem";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

export default function CartPage() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCartContext();
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    // In a real app, you would validate the coupon code here
    alert(`Coupon "${couponCode}" applied!`);
  };

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-background py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold text-foreground mb-6'>Your Cart</h1>
          <div className='bg-white rounded-xl shadow-soft p-8 text-center'>
            <div className='text-4xl mb-4'>🛒</div>
            <h2 className='text-xl font-bold text-foreground mb-2'>
              Your cart is empty
            </h2>
            <p className='text-gray mb-6'>
              Looks like you haven't added anything to your cart yet
            </p>
            <Link href='/'>
              <Button variant='primary'>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl font-bold text-foreground mb-6'>
          Your Cart ({totalItems} items)
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-xl shadow-soft p-6'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg font-bold text-foreground'>
                  Cart Items
                </h2>
                <button
                  className='text-danger hover:text-red-700'
                  onClick={clearCart}>
                  Clear Cart
                </button>
              </div>

              <div>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='bg-white rounded-xl shadow-soft p-6 sticky top-24'>
              <h2 className='text-lg font-bold text-foreground mb-6'>
                Order Summary
              </h2>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between'>
                  <span className='text-foreground'>Subtotal</span>
                  <span className='font-bold text-foreground'>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-foreground'>Shipping</span>
                  <span className='font-bold text-foreground'>Free</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-foreground'>Tax</span>
                  <span className='font-bold text-foreground'>
                    ${(totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>
                <div className='border-t border-border pt-4 flex justify-between'>
                  <span className='text-foreground font-bold'>Total</span>
                  <span className='font-bold text-accent text-xl'>
                    ${(totalPrice * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className='mb-6'>
                <div className='flex'>
                  <input
                    type='text'
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder='Enter coupon code'
                    className='flex-1 px-4 py-2 border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary'
                  />
                  <button
                    className='bg-gray px-4 py-2 rounded-r-lg hover:bg-gray-300 transition'
                    onClick={handleApplyCoupon}>
                    Apply
                  </button>
                </div>
              </div>

              <Button variant='primary' className='w-full mb-4'>
                Proceed to Checkout
              </Button>

              <Link href='/'>
                <Button variant='outline' className='w-full'>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
