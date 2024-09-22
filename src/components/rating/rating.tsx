'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { LENGTH_RATING } from '@/shared/constants';
import { StarIcon } from '@/shared/icons';
import cn from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { KeyboardEvent, useEffect, useState } from 'react';

import styles from './rating.module.scss';
import { RatingProps } from './rating.props';

export const Rating = ({ initialRating, isEditable = false }: RatingProps) => {
  const searchParams = useSearchParams();
  const rating = Number(searchParams.get('rating')) || initialRating;

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(LENGTH_RATING).fill(<StarIcon />),
  );

  const pathname = usePathname();
  const router = useRouter();
  const { createQueryString } = useCreateQueryString();

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
    if (e.code !== 'Enter' || !isEditable) {
      return;
    }

    router.push(`${pathname}?${createQueryString('rating', i.toString())}`);
  };

  const handleChangeRating = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const handleClickRating = (i: number) => {
    if (!isEditable) return;

    router.push(`${pathname}?${createQueryString('rating', i.toString())}`);
  };

  return (
    <div className={styles.rating}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
