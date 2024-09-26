import { IReview } from '@/shared/interfaces/review.interface';

import { Review } from './review/review';
import styles from './reviews.module.scss';

export const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div className={styles.wrapper}>
      {reviews.map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          name={review.name}
          rating={review.rating}
          date={review.date}
          description={review.description}
        />
      ))}
    </div>
  );
};
