import { Order } from "@/types";

export const orders: Order[] = [
  {
    id: "ORD-001",
    date: "2023-06-15",
    status: "Delivered",
    total: 124.99,
    items: 3,
    products: [
      {
        id: 1,
        name: "Wireless Bluetooth Earbuds",
        price: 49.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 59.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 3,
        name: "Phone Case",
        price: 15.01,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    id: "ORD-002",
    date: "2023-05-22",
    status: "Shipped",
    total: 89.99,
    items: 1,
    products: [
      {
        id: 4,
        name: "Gaming Headset with Microphone",
        price: 89.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    id: "ORD-003",
    date: "2023-04-10",
    status: "Delivered",
    total: 149.97,
    items: 3,
    products: [
      {
        id: 5,
        name: "Designer Sunglasses",
        price: 49.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 6,
        name: "Fitness Tracker Band",
        price: 49.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      }
    ]
  }
];