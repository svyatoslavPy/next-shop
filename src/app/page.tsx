import { client } from '@/api';
import { Products } from '@/components/products';
import { MIN_LIMIT_PRODUCTS } from '@/shared/constants/api';

import styles from './page.module.scss';

export default async function Home() {
  const { products } = await client.getProducts(MIN_LIMIT_PRODUCTS);

  return (
    <>
      <Products className={styles.products} products={products} />
      {/* <ShowComponents /> */}
    </>
  );
}
