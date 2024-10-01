'use server';

import { client } from '@/api';
import { Quantity } from '@/components/quantity';
import { ClosePrimaryIcon } from '@/shared/icons/close/primary';
import Image from 'next/image';

import styles from './item.module.scss';
import { CartItemProps } from './item.props';

export const CartItem = async ({ sku, quantity }: CartItemProps) => {
  const product = await client.getProduct(sku);

  const { name, price, images } = product;

  return (
    <div className={styles.cartItem}>
      <Image
        className={styles.image}
        src={images[0]}
        width={135}
        height={135}
        alt='product'
      />

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>$ {price}</p>
      </div>

      <Quantity
        className={styles.quantity}
        quantity={quantity}
        onIncrease={() => {}}
        onDecrease={() => {}}
      />

      <span className={styles.icon}>
        <ClosePrimaryIcon />
      </span>
    </div>
  );
};
