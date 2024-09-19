'use client';

import { ProductsCounter } from '@/components/products/counter';
import { Search } from '@/components/search';
import {
  containerVariants,
  glassVariants,
  searchVariants,
} from '@/shared/constants/framer-motion';
import { NavigationPathnames } from '@/shared/enums/navigation-pathnames.enum';
import { AccountIcon } from '@/shared/icons/account';
import { GlassIcon } from '@/shared/icons/glass';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

import styles from './navigation.module.scss';

export const HeaderNav = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const currentPathname = usePathname();

  const handleToVisibleSearch = () => {
    setIsOpenSearch(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        <li className={styles.item}>
          <Link
            href={NavigationPathnames.CATALOG}
            className={cn(styles.link, {
              [styles['link--active']]:
                currentPathname === NavigationPathnames.CATALOG,
            })}>
            Магазин
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={NavigationPathnames.ABOUT_US}
            className={cn(styles.link, {
              [styles['link--active']]:
                currentPathname === NavigationPathnames.ABOUT_US,
            })}>
            О нас
          </Link>
        </li>
      </ul>
      <motion.ul
        initial='hidden'
        animate={isOpenSearch ? 'visible' : 'hidden'}
        variants={containerVariants}
        className={cn(styles.links, styles['links--primary'])}>
        <li className={styles.item}>
          <Search
            ref={searchRef}
            initial='hidden'
            variants={searchVariants}
            animate={isOpenSearch ? 'visible' : 'hidden'}
            style={{ pointerEvents: isOpenSearch ? 'all' : 'none' }}
          />
        </li>

        <motion.li
          onClick={handleToVisibleSearch}
          initial='visible'
          animate={isOpenSearch ? 'hidden' : 'visible'}
          variants={glassVariants}
          style={{ pointerEvents: isOpenSearch ? 'none' : 'all' }}
          className={styles.item}>
          <GlassIcon />
        </motion.li>
        <li className={styles.item}>
          <Link
            href={NavigationPathnames.SHOPPING_CART}
            className={cn(styles.link, {
              [styles['link--active']]:
                currentPathname === NavigationPathnames.SHOPPING_CART,
            })}>
            <ProductsCounter icon='cart' count={1} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={NavigationPathnames.FAVORITES}
            className={cn(styles.link, {
              [styles['link--active']]:
                currentPathname === NavigationPathnames.FAVORITES,
            })}>
            <ProductsCounter icon='favorite' />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={NavigationPathnames.ACCOUNT}
            className={cn(styles.link, {
              [styles['link--active']]:
                currentPathname === NavigationPathnames.ACCOUNT,
            })}>
            <AccountIcon />
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};
