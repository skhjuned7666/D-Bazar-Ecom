# ShopKart - Modern E-commerce Platform

A fully functional e-commerce website built with Next.js 16, featuring a modern UI with real product images from Unsplash.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── profile/
│   │   └── orders/
│   ├── components/        # Reusable components
│   │   ├── auth/          # Authentication components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── products/      # Product-related components
│   │   └── ui/            # Generic UI components
│   ├── cart/              # Shopping cart functionality
│   ├── categories/        # Product categories
│   ├── products/          # Product pages
│   ├── wishlist/          # Wishlist functionality
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── data/                  # Mock data
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── types/                 # TypeScript types
└── app/globals.css        # Global styles
```

## Features

- Modern, responsive design with mobile-first approach
- Authentication system (login, signup, profile, orders)
- Product browsing with categories
- Shopping cart and wishlist functionality
- Flash sales with countdown timer
- Real product images from Unsplash
- Fully accessible UI components

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js.
