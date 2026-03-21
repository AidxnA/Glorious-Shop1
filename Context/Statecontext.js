// store/cartStore.js
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addItem: (product) => {
        const existing = get().cart.find(item => item.id === product.id);
        if (existing) {
          set(state => ({
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          set(state => ({ cart: [...state.cart, { ...product, quantity: 1 }] }));
        }
        toast.success(`${product.name} added to cart!`,);
      },

      removeItem: (id) =>
        set(state => ({ cart: state.cart.filter(item => item.id !== id) })),

      updateQuantity: (id, quantity) =>
        set(state => ({
          cart: state.cart.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),

      clearCart: () => set({ cart: [] }),

      totalItems: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),

      totalPrice: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

    }),
    { name: "cart-storage" } // persists to localStorage automatically
  )
);

export default useCartStore;

