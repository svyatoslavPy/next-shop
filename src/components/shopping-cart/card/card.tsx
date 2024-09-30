import { client } from '@/api';
import { Quantity } from '@/components/quantity';
import Image from 'next/image';

import styles from './card.module.scss';
import { ShoppingCardProps } from './card.props';

export const ShoppingCard = async ({
  sku,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: ShoppingCardProps) => {
  const product = await client.getProduct(sku);

  return (
    <div className={styles.card}>
      <Image src={product.images[0]} width={135} height={135} alt='product' />

      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>$ {product.price}</p>
      </div>

      <Quantity
        quantity={quantity}
        onIncrease={() => onIncreaseQuantity(sku)}
        onDecrease={() => onDecreaseQuantity(sku)}
      />
    </div>
  );
};
