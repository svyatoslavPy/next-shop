// 'use client';

// import { type ReactNode, createContext, useContext, useRef } from 'react';
// import { useStore } from 'zustand';

// import { CartStore, createCartStore, initCartStore } from './cart-store';

// export type CartStoreApi = ReturnType<typeof createCartStore>;

// export const CartStoreContext = createContext<CartStoreApi | undefined>(
//   undefined,
// );

// export interface CartStoreProviderProps {
//   children: ReactNode;
// }

// export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
//   const storeRef = useRef<CartStoreApi>();

//   if (!storeRef.current) {
//     storeRef.current = createCartStore(initCartStore());
//   }

//   return (
//     <CartStoreContext.Provider value={storeRef.current}>
//       {children}
//     </CartStoreContext.Provider>
//   );
// };

// export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
//   const cartStoreContext = useContext(CartStoreContext);

//   if (!cartStoreContext) {
//     throw new Error(`useCounterStore must be used within CounterStoreProvider`);
//   }

//   return useStore(cartStoreContext, selector);
// };
