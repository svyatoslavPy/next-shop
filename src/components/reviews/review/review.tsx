import { Rating } from '@/components/rating';
import { IReview } from '@/shared/interfaces/review.interface';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './review.module.scss';

export const Review = ({ name, rating, date, description }: IReview) => {
  const formattedDate = format(new Date(date), 'd MMMM yyyy', { locale: ru });

  return (
    <article className={styles.review}>
      <div className={styles.wrapper}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.date}>{formattedDate}</p>
      </div>

      <Rating className={styles.rating} rating={rating} />

      <p className={styles.description}>{description}</p>
    </article>
  );
};
