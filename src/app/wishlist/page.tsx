"use client";

import { useWishlistContext } from "@/context";
import WishlistItem from "@/app/components/products/WishlistItem";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlistContext();

  if (wishlistItems.length === 0) {
    return (
      <div className='min-h-screen bg-background py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold text-foreground mb-6'>
            Your Wishlist
          </h1>
          <div className='bg-white rounded-xl shadow-soft p-8 text-center'>
            <div className='text-4xl mb-4'>❤️</div>
            <h2 className='text-xl font-bold text-foreground mb-2'>
              Your wishlist is empty
            </h2>
            <p className='text-gray mb-6'>
              Looks like you haven't added anything to your wishlist yet
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
          Your Wishlist ({wishlistItems.length} items)
        </h1>

        <div className='bg-white rounded-xl shadow-soft p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-lg font-bold text-foreground'>
              Wishlist Items
            </h2>
            <button
              className='text-danger hover:text-red-700'
              onClick={() => {
                // In a real app, you would clear the wishlist here
                alert("Clear wishlist functionality would go here");
              }}>
              Clear Wishlist
            </button>
          </div>

          <div>
            {wishlistItems.map((item) => (
              <WishlistItem
                key={item.id}
                item={item}
                onAddToCart={() => {
                  // In a real app, you would add to cart here
                  alert(`Added ${item.name} to cart`);
                }}
                onRemove={removeFromWishlist}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
