'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { DEFAULT_PAGE } from '@/shared/constants';
import { ArrowPrimaryIcon } from '@/shared/icons';
import cn from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

import styles from './select.module.scss';
import { SelectProps } from './select.props';

export const Select = ({ options, className, urlQuery }: SelectProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentOption = searchParams.get(urlQuery) || '';
  const { createQueryString } = useCreateQueryString();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    const params = createQueryString(urlQuery, newValue);

    params.delete('page');
    params.set('page', DEFAULT_PAGE.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn(styles.selectWrapper, className)}>
      <select
        className={styles.select}
        value={currentOption}
        onChange={handleChange}>
        {options.map((optionValue) => (
          <option key={optionValue.id} value={optionValue.id}>
            {optionValue.name}
          </option>
        ))}
      </select>

      <span
        className={cn(styles.icon, {
          [styles['icon--up']]: currentOption,
          [styles['icon--down']]: !currentOption,
        })}>
        <ArrowPrimaryIcon />
      </span>
    </div>
  );
};
