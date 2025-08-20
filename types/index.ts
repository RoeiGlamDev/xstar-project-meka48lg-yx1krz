import { createContext, useContext } from 'react';

// Define types for products
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

// Define types for user
export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

// Define types for cart
export interface CartItem {
  productId: string;
  quantity: number;
}

// Define types for order
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  orderDate: string;
}

// Create contexts for global state management
export const UserContext = createContext<User | null>(null);
export const CartContext = createContext<CartItem[]>([]);

// Custom hooks to use contexts
export const useUser = () => {
  return useContext(UserContext);
};

export const useCart = () => {
  return useContext(CartContext);
};

export default {
  Product,
  User,
  CartItem,
  Order,
  UserContext,
  CartContext,
  useUser,
  useCart,
};