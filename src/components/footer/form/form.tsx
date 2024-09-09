'use client';

import { Notification } from '@/components/notification';
import { ArrowIcon } from '@/shared/icons/arrow';
import { Input } from '@/shared/ui/input';
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import toast from 'react-hot-toast';

import styles from './form.module.scss';

export const Form = () => {
  const [emailQuery, setEmailQuery] = useState('');
  const [isValidEmail, setEmailValid] = useState(false);
  const [isSumbit, setIsSumbit] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validEmail = emailRegex.test(email);

    setEmailQuery(e.target.value);
    setEmailValid(validEmail);
  };

  const handleSubscribe = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!emailQuery || !isValidEmail) {
        toast.custom(<Notification icon='close' message='Неверная почта' />, {
          position: 'bottom-center',
        });

        setIsSumbit(false);
        return;
      }

      setIsSumbit(true);

      toast.custom(<Notification icon='success' message='Подписка сделана' />, {
        position: 'bottom-center',
      });
    }
  };

  const reset = () => {
    setEmailQuery('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSumbit) return;

    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formInputWrapper}>
        <Input
          onChange={handleEmailChange}
          onKeyDown={handleSubscribe}
          value={emailQuery}
          className={styles.formInput}
          placeholder='Ваш email для акций и предложений'
          appearance='white'
        />

        <span className={styles.formInputIcon}>
          <ArrowIcon />
        </span>
      </div>
    </form>
  );
};
