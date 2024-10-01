import { TCartProduct } from '@/shared/interfaces/product.interface';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
  productsCart: TCartProduct[];
}

interface Actions {
  removeProduct: (id: number) => void;
  addProduct: (product: TCartProduct) => void;
}

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      productsCart: [],
      removeProduct: (id: number) => {
        const updatedProducts = get().productsCart.filter(
          (item) => item.sku !== id,
        );

        set({ productsCart: updatedProducts });
      },

      addProduct: (product: TCartProduct) => {
        const cartItem = get().productsCart.find(
          (item) => item.sku === product.sku,
        );

        if (cartItem) {
          const updatedCart = get().productsCart.map((item) => {
            if (item.sku === product.sku) {
              return { ...item, quantity: item.quantity + product.quantity };
            }

            return item;
          });

          set({ productsCart: updatedCart });
        } else {
          set({
            productsCart: [...get().productsCart, { ...product, quantity: 1 }],
          });
        }
      },
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
