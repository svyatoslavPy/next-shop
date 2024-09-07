'use client';

import { ArrowIcon } from '@/shared/icons/arrow';
import { Input } from '@/shared/ui/input';
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';

import styles from './form.module.scss';

export const Form = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = (e: KeyboardEvent) => {
    if (!query) return;

    if (e.key === 'Enter') {
      console.log('Подписка сделана');
    }
  };

  const reset = () => {
    setQuery('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formInputWrapper}>
        <Input
          onChange={handleChangeQuery}
          onKeyDown={handleClick}
          value={query}
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
