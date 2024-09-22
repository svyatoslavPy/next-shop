import { Button } from '@/shared/ui/button';

import { Rating } from '../rating';
import styles from './product-details.module.scss';
import { ProductDetailsProps } from './product-details.props';

export const ProductDetails = ({
  name,
  price,
  description,
  countReviews,
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
    </div>
  );
};
