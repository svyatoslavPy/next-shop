'use client';

import { Rating } from '@/components/rating';
import { IReviewForm } from '@/shared/interfaces/review-form.interface';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { TextArea } from '@/shared/ui/text-area';
import { useForm } from 'react-hook-form';

import styles from './form.module.scss';

export const ReviewForm = ({ productId }: { productId: number }) => {
  const { register, handleSubmit } = useForm<IReviewForm>({
    defaultValues: {
      name: '',
      email: '',
      review: '',
    },
  });

  const onSubmit = async (reviewData: IReviewForm) => {
    console.log(reviewData);

    // const testData = { ...reviewData, rating: 5 };
    // await client.createReview(productId, testData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p className={styles.title}>Добавить отзыв</p>
      <p className={styles.warning}>
        Ваш email не будет опубликован. Обязательные поля помечены *
      </p>

      <TextArea
        {...register('review', { required: true })}
        className={styles.textArea}
        placeholder='Отзыв*'
      />

      <Input
        {...register('name', { required: true })}
        className={styles.input}
        appearance='white'
        placeholder='Ваше имя*'
      />

      <Input
        {...register('email', { required: true })}
        className={styles.input}
        appearance='white'
        placeholder='Ваш email*'
      />

      <div className={styles.checkboxWrapper}>
        <Input className={styles.checkbox} type='checkbox' />
        <p className={styles.checkboxText}>
          Сохранить данные для следующих отзывов
        </p>
      </div>

      <p className={styles.rateHeading}>Рейтинг*</p>

      <Rating className={styles.rating} initialRating={0} isEditable />

      <Button type='submit' appearance='black' className={styles.button}>
        Отправить
      </Button>
    </form>
  );
};
