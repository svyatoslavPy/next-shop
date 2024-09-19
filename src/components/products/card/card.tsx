import { FavoritePrimaryIcon } from '@/shared/icons';
import { EyeIcon } from '@/shared/icons/eye';
import { Button } from '@/shared/ui/button/button';
import { getOldPrice } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.scss';
import { ProductCardProps } from './card.props';

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  discount,
  isHaveOldPrice,
  isHaveDiscount,
}: ProductCardProps) => {
  const isFavorite = false;
  const isSold = false;

  return (
    <article className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image
          layout='responsive'
          width={380}
          height={380}
          src={imageUrl}
          quality={100}
          alt='product'
        />
        {discount && !isSold && isHaveDiscount && (
          <p className={styles.text}>- {discount}%</p>
        )}
        {isSold && <p className={styles.text}>Продано</p>}
        {isFavorite && (
          <span className={styles.icon}>
            <FavoritePrimaryIcon />
          </span>
        )}
        <div className={styles.preview}>
          <div className={styles.inner}>
            <Button className={styles.button} appearance='none' icon='cart' />
            <Link href={`/catalog/product/${id}`}>
              <EyeIcon />
            </Link>
            <Button
              className={styles.button}
              appearance='none'
              icon='favorite'
            />
          </div>
        </div>
      </div>

      <h2 className={styles.name}>{name}</h2>

      <div className={styles.info}>
        {isHaveOldPrice && discount && (
          <p className={styles.oldPrice}>$ {getOldPrice(price, discount)}</p>
        )}

        <p className={styles.price}>$ {price}</p>
      </div>
    </article>
  );
};
