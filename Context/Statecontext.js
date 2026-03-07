import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(persist(
    (set, get) => ({
        showCart: false,
        setShowCart: (value) => set({ showCart: value }),

        cartItems: [],
        onAdd: (product, quantity) => {
            const Items = get().cartItems
            const existing = Items.find((item) => item.id === product.id)
            if (existing) {
                const updatedItems = Items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                )
                set({ cartItems: updatedItems });
            } else {
                set({ cartItems: [...get().cartItems, { ...product, quantity }] });
            }
        },
        onRemove: (product) => {
            set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !== product.id),
            }));
        }
    }),
    {
        name: 'cart-storage',
    }
));

/*{
    onRemove: (product) => {
        const items = get().cartItems;
        const updatedItems = items.filter((i) => i.id !== product.id);
        set({ cartItems: updatedItems });
      },
}*/