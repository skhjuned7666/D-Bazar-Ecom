"use client";

import { useState, useEffect } from "react";
import { Header, Footer } from "@/app/components/layout";

import { ProductCard } from "@/app/components/products";
import { categories } from "@/data/categories";
import {
  flashDeals,
  trendingProducts,
  electronicsProducts,
  fashionProducts,
  beautyProducts,
  homeProducts,
  allProducts,
} from "@/data/products";
import { useCountdown } from "@/hooks/useCountdown";
import { useCartContext } from "@/context";
import { MobileNav } from "@/app/components/shared";
import ColorBends from "@/app/components/shared/ColorBends";

export default function Home() {
  const { addToCart } = useCartContext();
  const [activeCategory, setActiveCategory] = useState("All");
  const timeLeft = useCountdown({ hours: 12, minutes: 45, seconds: 30 });
  // State for tracking which sections should show all products
  const [showAllFlashDeals, setShowAllFlashDeals] = useState(false);
  const [showAllTrending, setShowAllTrending] = useState(false);
  const [showAllElectronics, setShowAllElectronics] = useState(false);
  const [showAllFashion, setShowAllFashion] = useState(false);
  const [showAllBeauty, setShowAllBeauty] = useState(false);
  const [showAllHome, setShowAllHome] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Product images for rotation
  const productImages = [
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1734383524180-3c6f9b21e8e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  ];

  // Rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % productImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [productImages.length]);

  const handleAddToCart = (productId: number) => {
    // Find the product and add to cart
    const product = [...flashDeals, ...trendingProducts].find(
      (p) => p.id === productId
    );
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className='min-h-screen  flex flex-col'>
      {/* Top Notification Bar */}
      <div className='bg-secondary text-white text-center py-2 text-sm font-medium'>
        Free shipping on orders over Rs 500! 🚚
      </div>

      {/* Header */}
      <Header />

      {/* Category Menu - Mobile */}
      {/* We'll implement this in the Header component */}

      {/* Main Content */}
      <main className='grow'>
        {/* Hero Slider */}
        <section className='relative text-black overflow-hidden '>
          <div className='absolute inset-0 -z-10'>
            <ColorBends
              colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
              rotation={30}
              speed={0.3}
              scale={1.2}
              frequency={1.4}
              warpStrength={1.2}
              mouseInfluence={0.8}
              parallax={0.6}
              noise={0.08}
              transparent
            />
          </div>
          <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
              <div className='z-10'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                  Summer Sale
                </h1>
                <p className='text-xl mb-6'>
                  Up to 70% OFF on latest fashion & electronics
                </p>
                <button className='bg-secondary text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105'>
                  Shop Now
                </button>
              </div>
              <div className='flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <img
                      src={productImages[currentImageIndex]}
                      alt='Featured Product'
                      className='w-full h-full object-cover transition-opacity duration-1000'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent'></div>
                  </div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='flex justify-between items-end'>
                      <div>
                        <h3 className='text-white text-3xl font-bold'>
                          Premium Collection
                        </h3>
                      </div>
                      <div className='flex space-x-2'>
                        {productImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sale Timer */}
        <section className='py-2 bg-linear-to-r from-blue-800 to-gray-400 text-accent border border-amber-300 rounded-lg mx-4 md:mx-20 lg:mx-40 bg-card-blur'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <div className='flex items-center mb-4 md:mb-0'>
                <svg
                  className='w-6 h-6 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <h2 className='text-xl font-bold'>Flash Sale Ends In</h2>
              </div>
              <div className='flex space-x-2'>
                <div className='bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]'>
                  <div className='text-2xl font-bold'>
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className='text-xs'>Hours</div>
                </div>
                <div className='bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]'>
                  <div className='text-2xl font-bold'>
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className='text-xs'>Mins</div>
                </div>
                <div className='bg-white/20 rounded-lg px-3 py-2 text-center min-w-[60px]'>
                  <div className='text-2xl font-bold'>
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className='text-xs'>Secs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Deals */}
        <section className='py-8 bg-section-blur'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-foreground'>
                Flash Deals
              </h2>
              <button
                className='text-secondary font-medium'
                onClick={() => setShowAllFlashDeals(!showAllFlashDeals)}>
                {showAllFlashDeals ? "Show Less" : "View All"}
              </button>
            </div>
            <div className='relative'>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                {flashDeals.map((product) => (
                  <div key={product.id} className='shrink-0 w-64'>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Explore by Category */}
        <section className='py-8 bg-section-blur'>
          <div className='container mx-auto px-4'>
            <h2 className='text-2xl font-bold text-foreground mb-6'>
              Explore by Category
            </h2>
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3'>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className='flex flex-col items-center p-3 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300'
                  onClick={() => setActiveCategory(category.name)}>
                  <span className='text-2xl mb-1'>{category.icon}</span>
                  <span className='text-xs text-center text-foreground'>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Category Products Display */}
            {activeCategory !== "All" && (
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-foreground mb-4'>
                  {activeCategory} Products
                </h3>
                <div className='relative'>
                  <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                    {allProducts
                      .filter((product) => {
                        // Map category names to match product categories
                        const categoryMap: Record<string, string> = {
                          Furniture: "Home",
                          Grocery: "General",
                          Sports: "General",
                        };
                        const mappedCategory =
                          categoryMap[activeCategory] || activeCategory;
                        return product.category === mappedCategory;
                      })
                      .map((product) => (
                        <div key={product.id} className='shrink-0 w-64'>
                          <ProductCard
                            product={product}
                            onAddToCart={handleAddToCart}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trending Products */}
        <section className='py-8 bg-section-blur'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-foreground'>
                Trending Now
              </h2>
              <button
                className='text-secondary font-medium'
                onClick={() => setShowAllTrending(!showAllTrending)}>
                {showAllTrending ? "Show Less" : "View All"}
              </button>
            </div>
            <div className='relative'>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                {trendingProducts.map((product) => (
                  <div key={product.id} className='shrink-0 w-64'>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Electronics Products */}
        <section className='py-8 bg-background'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-foreground'>
                Electronics
              </h2>
              <button
                className='text-secondary font-medium'
                onClick={() => setShowAllElectronics(!showAllElectronics)}>
                {showAllElectronics ? "Show Less" : "View All"}
              </button>
            </div>
            <div className='relative'>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                {electronicsProducts.map((product) => (
                  <div key={product.id} className='shrink-0 w-64'>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fashion Products */}
        <section className='py-8 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-foreground'>Fashion</h2>
              <button
                className='text-secondary font-medium'
                onClick={() => setShowAllFashion(!showAllFashion)}>
                {showAllFashion ? "Show Less" : "View All"}
              </button>
            </div>
            <div className='relative'>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                {fashionProducts.map((product) => (
                  <div key={product.id} className='shrink-0 w-64'>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beauty Products */}
        <section className='py-8 bg-background'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-foreground'>Beauty</h2>
              <button
                className='text-secondary font-medium'
                onClick={() => setShowAllBeauty(!showAllBeauty)}>
                {showAllBeauty ? "Show Less" : "View All"}
              </button>
            </div>
            <div className='relative'>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                {beautyProducts.map((product) => (
                  <div key={product.id} className='shrink-0 w-64'>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Home Products */}
        <section className='py-8 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-foreground'>
                Home & Kitchen
              </h2>
              <button
                className='text-secondary font-medium'
                onClick={() => setShowAllHome(!showAllHome)}>
                {showAllHome ? "Show Less" : "View All"}
              </button>
            </div>
            <div className='relative'>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
                {homeProducts.map((product) => (
                  <div key={product.id} className='shrink-0 w-64'>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Limited Time Offers */}
        <section className='py-8 bg-linear-to-r from-secondary to-blue-700 text-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold'>Limited Time Offers</h2>
              <p className='mt-2'>Exclusive deals for our valued customers</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <div className='text-4xl font-bold mb-2'>25%</div>
                <div className='text-lg mb-1'>OFF Everything</div>
                <div className='text-blue-100 text-sm mb-4'>Ends in 3 days</div>
                <button className='w-full py-2 bg-white text-secondary font-bold rounded-full hover:bg-gray-100 transition'>
                  Shop Sale
                </button>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <div className='text-4xl font-bold mb-2'>FREE</div>
                <div className='text-lg mb-1'>Shipping Worldwide</div>
                <div className='text-blue-100 text-sm mb-4'>
                  On orders over $50
                </div>
                <button className='w-full py-2 bg-white text-secondary font-bold rounded-full hover:bg-gray-100 transition'>
                  Explore
                </button>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <div className='text-4xl font-bold mb-2'>BUY 2</div>
                <div className='text-lg mb-1'>GET 1 FREE</div>
                <div className='text-blue-100 text-sm mb-4'>
                  Select items only
                </div>
                <button className='w-full py-2 bg-white text-secondary font-bold rounded-full hover:bg-gray-100 transition'>
                  See Items
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <MobileNav />

      {/* Add padding for mobile bottom nav */}
      <div className='md:hidden h-16'></div>
    </div>
  );
}
