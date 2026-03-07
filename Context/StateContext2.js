import { toast } from "sonner";

import { create } from "zustand";

import { persist } from "zustand/middleware";



export const useCartStore = create(

    persist(

        (set, get) => ({

            showCart: false,

            setShowCart: (value) => set({ showCart: value }),

            cartItems: [],

            qty: 1,



            get totalPrice() {

                return get().cartItems.reduce(

                    (sum, item) => sum + item.price * item.quantity,

                    0

                );

            },

            get totalQuantities() {

                return get().cartItems.reduce((sum, item) => sum + item.quantity, 0);

            },

            incQty: () => set((state) => ({ qty: state.qty + 1 })),

            decQty: () =>

                set((state) => ({ qty: state.qty > 1 ? state.qty - 1 : 1 })),

            onAdd: (product, quantity) => {

                const items = get().cartItems;

                const existing = items.find((item) => item.id === product.id);

                if (existing) {

                    const updatedItems = items.map((item) =>

                        item.id === product.id

                            ? { ...item, quantity: item.quantity + quantity }

                            : item

                    );

                    set({ cartItems: updatedItems });

                } else {

                    set({ cartItems: [...items, { ...product, quantity }] });

                }

                toast(`${product.name} added to cart.`);

            },

            onRemove: (product) => {

                const items = get().cartItems;

                const updatedItems = items.filter((i) => i.id !== product.id);

                set({ cartItems: updatedItems });

            },

            toggleCartItemQuantity: (id, type) => {

                const items = get().cartItems;

                const updatedItems = items.map((item) => {

                    if (item.id !== id) return item;

                    const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;

                    if (newQty < 1) return item;

                    return { ...item, quantity: newQty };

                });

                set({ cartItems: updatedItems });

            },

            clearCart: () => set({ cartItems: [] }),

        }),

        {

            name: "cart-storage",



            partialize: (state) => ({ cartItems: state.cartItems }),

        }

    )

);