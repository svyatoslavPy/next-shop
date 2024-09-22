import { productSocialNetworksRoutes } from '@/shared/constants/navigation';
import { FavoriteIcon } from '@/shared/icons';
import { EmailIcon } from '@/shared/icons/email';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

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
  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.price}>$ {price}</p>

      <div className={styles.ratingWrapper}>
        <Rating initialRating={rating} />
        <p className={styles.statistics}>{countReviews} отзыва</p>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.actionsWrapper}>
        <div className={styles.quantity}>
          <Button className={styles.quantityButton} appearance='none'>
            -
          </Button>
          <p>1</p>
          <Button className={styles.quantityButton} appearance='none'>
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
          <span className={styles.icon}>
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
