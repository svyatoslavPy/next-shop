import { Review } from '@/shared/interfaces/review.interface';

export const getOldPrice = (price: number, discount: number) => {
  const percentage = (price / 100) * discount;
  const result = price - percentage;

  return result;
};

export const getRating = async (reviews: Review[]) => {
  let sum = 0;

  for (const review of reviews) {
    sum += review.rating;
  }

  return sum / reviews.length;
};
