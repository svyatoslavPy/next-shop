import { CartProducts } from '@/components/shopping-cart/products';

import styles from './shopping-cart.module.scss';

export default function ShoppingCart() {
  return (
    <div>
      <h1 className={styles.title}>Корзина</h1>

      <CartProducts />
    </div>
  );
}
