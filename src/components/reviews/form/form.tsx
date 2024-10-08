'use client';

import { client } from '@/api';
import { Notification } from '@/components/notification';
import { Rating } from '@/components/rating';
import { IReviewForm } from '@/shared/interfaces/review-form.interface';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { TextArea } from '@/shared/ui/text-area';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import styles from './form.module.scss';

const ReviewSchema = yup
  .object({
    review: yup.string().required('Заполните отзыв'),
    name: yup.string().required('Заполните имя'),
    email: yup.string().email(' ').required('Заполните почту'),
    rating: yup.number().positive('').integer().required('Укажите рейтинг'),
  })
  .required();

export const ReviewForm = ({ productId }: { productId: number }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<IReviewForm>({
    resolver: yupResolver(ReviewSchema),
  });

  const onSubmit = async (reviewData: IReviewForm) => {
    const data = await client.createReview(productId, reviewData);

    toast.custom(<Notification icon='success' message={data.message} />, {
      position: 'bottom-center',
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p className={styles.title}>Добавить отзыв</p>
      <p className={styles.warning}>
        Ваш email не будет опубликован. Обязательные поля помечены *
      </p>

      <label htmlFor='review' className={styles.label}>
        Отзыв*
      </label>

      <TextArea
        {...register('review')}
        id='review'
        error={errors.review}
        className={styles.textArea}
      />

      <Input
        {...register('name')}
        error={errors.name}
        className={styles.input}
        appearance='white'
        placeholder='Ваше имя*'
      />

      <Input
        {...register('email')}
        className={styles.input}
        error={errors.email}
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

      <Controller
        control={control}
        name='rating'
        render={({ field }) => (
          <Rating
            className={styles.rating}
            isEditable
            rating={field.value}
            ref={field.ref}
            setRating={field.onChange}
            error={errors.rating}
          />
        )}
      />

      <Button type='submit' appearance='black' className={styles.button}>
        Отправить
      </Button>
    </form>
  );
};
