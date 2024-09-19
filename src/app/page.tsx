import { client } from '@/api';
import { Products } from '@/components/products';
import { Banners } from '@/components/products/banners';
import { MIN_LIMIT_PRODUCTS } from '@/shared/constants/api';
import Link from 'next/link';

import styles from './page.module.scss';

export default async function Home() {
  const { products } = await client.getProducts(MIN_LIMIT_PRODUCTS);

  return (
    <>
      <Banners products={products} />
      <div className={styles.heading}>
        <p className={styles.title}>Последние поступления</p>
        <Link href='/catalog' className={styles.link}>
          Все
        </Link>
      </div>
      <Products className={styles.products} products={products} />
    </>
  );
}
