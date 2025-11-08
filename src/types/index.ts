export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Delivered' | 'Shipped' | 'Processing';
  total: number;
  items: number;
  products: OrderItem[];
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}