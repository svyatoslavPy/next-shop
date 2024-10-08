'use client';

import { DEFAULT_PRODUCT_QUANTITY } from '@/shared/constants';
import { productSocialNetworksRoutes } from '@/shared/constants/navigation';
import { FavoriteIcon } from '@/shared/icons';
import { EmailIcon } from '@/shared/icons/email';
import { Button } from '@/shared/ui/button';
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import { Rating } from '../rating';
import styles from './product-details.module.scss';
import { ProductDetailsProps } from './product-details.props';

export const ProductDetails = ({
  name,
  price,
  description,
  countReviews,
  category,
  id,
  rating,
}: ProductDetailsProps) => {
  const [productQuantity, setProductQuantity] = useState(
    DEFAULT_PRODUCT_QUANTITY,
  );

  const handleIncrease = () => {
    setProductQuantity((currentQuantity) => currentQuantity + 1);
  };

  const handleDecrease = () => {
    if (productQuantity === DEFAULT_PRODUCT_QUANTITY) return;

    setProductQuantity((currentQuantity) => currentQuantity - 1);
  };

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.price}>$ {price}</p>

      <div className={styles.ratingWrapper}>
        <Rating rating={rating} />
        <p className={styles.statistics}>{countReviews} отзыва</p>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.actionsWrapper}>
        <div className={styles.quantity}>
          <Button
            onClick={handleDecrease}
            className={styles.quantityButton}
            appearance='none'>
            -
          </Button>
          <p>{productQuantity}</p>
          <Button
            onClick={handleIncrease}
            className={styles.quantityButton}
            appearance='none'>
            +
          </Button>
        </div>

        <Button
          className={styles.addToCartButton}
          appearance='ghost'
          isFullWidth>
          Добавить в корзину
        </Button>
      </div>

      <div className={styles.wrapperIcons}>
        <div className={styles.favoriteInner}>
          <span
            className={cn(styles.icon, {
              [styles.active]: false,
            })}>
            <FavoriteIcon />
          </span>

          <span className={styles.line}></span>
        </div>

        <ul className={styles.socialNetworks}>
          <li className={styles.item}>
            <EmailIcon />
          </li>

          {productSocialNetworksRoutes.map((route) => (
            <li className={styles.item} key={route.id}>
              <Link href={route.href}>{<route.icon />}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.infoWrapper}>
        <p className={styles.info}>
          SKU: <span>{id}</span>
        </p>

        <p className={styles.info}>
          Категория: <span>{category}</span>
        </p>
      </div>
    </div>
  );
};
