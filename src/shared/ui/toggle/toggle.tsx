'use client';

import cn from 'classnames';

import styles from './toggle.module.scss';
import { ToggleProps } from './toggle.props';

export const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <button className={styles.toggle} onClick={onChange}>
      <span
        className={cn(styles.circle, {
          [styles['circle--active']]: checked,
        })}></span>
    </button>
  );
};
