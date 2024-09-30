'use client';

import { ShoppingCard } from '@/components/shopping-cart/card';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LOCAL_STORAGE_CART_KEY } from '@/shared/constants';
import { IProduct } from '@/shared/interfaces/product.interface';

import styles from './shopping-cart.module.scss';

export default function ShoppingCart() {
  const [products, setProducts] = useLocalStorage<
    Pick<IProduct, 'sku' | 'quantity'>[]
  >(LOCAL_STORAGE_CART_KEY, []);

  const handleIncreaseQuantity = (id: number) => {
    const result = products.map((product) => {
      if (product.sku === id) {
        return { ...product, quantity: product.quantity++ };
      }

      return product;
    });

    setProducts(result);
  };

  const handleDecreaseQuantity = (id: number) => {
    const result = products.map((product) => {
      if (product.sku === id) {
        return { ...product, quantity: product.sku-- };
      }

      return product;
    });

    setProducts(result);
  };

  return (
    <div>
      <h1 className={styles.title}>Корзина</h1>

      {products.map((product) => (
        <ShoppingCard
          sku={product.sku}
          quantity={product.quantity}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      ))}
    </div>
  );
}
