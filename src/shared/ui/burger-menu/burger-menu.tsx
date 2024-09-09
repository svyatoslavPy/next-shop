'use client';

import { IMenu } from '@/shared/interfaces/menu.interface';
import cn from 'classnames';

import styles from './burger-menu.module.scss';

export const BurgerMenu = ({ onToogleMenu, isOpenMenu }: IMenu) => {
  return (
    <div
      onClick={onToogleMenu}
      className={cn(styles.icon, styles['burger-menu'], {
        [styles.open]: isOpenMenu,
      })}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
