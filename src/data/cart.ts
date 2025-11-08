import { Product } from "@/types";

export interface CartItem extends Product {
  quantity: number;
}

export const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    quantity: 1
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 89.99,
    originalPrice: 149.99,
    discount: 40,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    quantity: 2
  }
];