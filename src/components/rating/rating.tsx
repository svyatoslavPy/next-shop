'use client';

import { LENGTH_RATING } from '@/shared/constants';
import { StarIcon } from '@/shared/icons';
import cn from 'classnames';
import {
  ForwardedRef,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import styles from './rating.module.scss';
import { RatingProps } from './rating.props';

export const Rating = forwardRef(
  (
    {
      rating,
      isEditable = false,
      className,
      setRating,
      error,
      ...props
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(LENGTH_RATING).fill(<StarIcon />),
    );

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRate: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: index < currentRate,
              [styles.editable]: isEditable,
            })}
            onMouseLeave={() => handleChangeRating(rating)}
            onClick={() => handleClickRating(index + 1)}
            onMouseEnter={() => handleChangeRating(index + 1)}
            onKeyDown={(e: KeyboardEvent) => handleSpace(index + 1, e)}>
            <StarIcon tabIndex={isEditable ? 0 : -1} />
          </span>
        );
      });

      setRatingArray(updatedArray);
    };

    const handleSpace = (i: number, e: KeyboardEvent) => {
      if (e.code !== 'Enter' || !isEditable || !setRating) {
        return;
      }

      setRating(i);
    };

    const handleChangeRating = (i: number) => {
      if (!isEditable) return;

      constructRating(i);
    };

    const handleClickRating = (i: number) => {
      if (!isEditable || !setRating) return;

      setRating(i);
    };

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, className, {
          [styles.error]: error,
        })}>
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}

        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
