'use client';

import { useFromStore } from '@/hooks/useFromStore';
import { useCartStore } from '@/store/cart-store';

import { CartItem } from '../item';
import styles from './products.module.scss';

export const CartProducts = () => {
  const store = useFromStore(useCartStore, (state) => state);

  return (
    <div className={styles.products}>
      {store?.productsCart.map((product) => (
        <CartItem
          key={product.sku}
          sku={product.sku}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};
