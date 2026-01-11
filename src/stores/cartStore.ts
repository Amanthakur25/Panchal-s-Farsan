import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';
import { CartItem } from './types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
}

const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product, quantity: number) => {
        set((state: CartState) => {
          const existingItem = state.items.find(item => item.product.id === product.id);
          
          if (existingItem) {
            return {
              ...state,
              items: state.items.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          } else {
            return {
              ...state,
              items: [...state.items, { product, quantity }],
            };
          }
        });
      },
      
      removeItem: (productId: string) => {
        set((state: CartState) => ({
          ...state,
          items: state.items.filter(item => item.product.id !== productId),
        }));
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set((state: CartState) => ({
          ...state,
          items: state.items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        }));
      },
      
      clearCart: () => {
        set((state: CartState) => ({
          ...state,
          items: []
        }));
      },
      
      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getSubtotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      
      getTax: () => {
        return get().getSubtotal() * 0.05; // 5% tax
      },
      
      getTotal: () => {
        return get().getSubtotal() + get().getTax();
      },
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
    }
  )
);

export default useCartStore;