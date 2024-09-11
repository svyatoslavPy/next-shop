'use client';

import { ArrowPrimaryIcon } from '@/shared/icons';
import { SelectProps } from '@/shared/ui/select/select.props';
import cn from 'classnames';
import { ChangeEvent } from 'react';

import styles from './select.module.scss';

export const Select = ({
  onChange,
  options,
  selectedOption,
  arrow = 'none',
}: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        value={selectedOption}
        onChange={handleChange}>
        {options.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>

      {arrow !== 'none' && (
        <span
          className={cn(styles.icon, {
            [styles['icon--up']]: arrow === 'up',
            [styles['icon--down']]: arrow === 'down',
          })}>
          <ArrowPrimaryIcon />
        </span>
      )}
    </div>
  );
};
