'use client';

import { ShoppingCard } from '@/components/shopping-cart/card';

import styles from './shopping-cart.module.scss';

export default function ShoppingCart() {
  // const [products, setProducts] = useLocalStorage<
  //   Pick<IProduct, 'sku' | 'quantity'>[]
  // >(LOCAL_STORAGE_CART_KEY, []);

  // const handleIncreaseQuantity = (id: number) => {
  //   const result = products.map((product) => {
  //     if (product.sku === id) {
  //       return { ...product, quantity: product.quantity + 1 };
  //     }

  //     return product;
  //   });

  //   setProducts(result);
  // };

  // const handleDecreaseQuantity = (id: number) => {
  //   const result = products.map((product) => {
  //     if (product.sku === id) {
  //       return { ...product, quantity: product.quantity - 1 };
  //     }

  //     return product;
  //   });

  //   setProducts(result);
  // };

  return (
    <div>
      <h1 className={styles.title}>Корзина</h1>

      {/* {products.map((product) => (
        <ShoppingCard
          key={product.sku}
          sku={product.sku}
          quantity={product.quantity}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      ))} */}

      <ShoppingCard
        sku={1}
        quantity={1}
        onIncreaseQuantity={() => {}}
        onDecreaseQuantity={() => {}}
      />
    </div>
  );
}
