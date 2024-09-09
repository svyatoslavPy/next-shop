'use client';

import { ProductsCounter } from '@/components/products-counter';
import { Search } from '@/components/search';
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

  const containerVariants = {
    visible: { paddingLeft: '22px' },
    hidden: { paddingLeft: '0px' },
  };

  const glassVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const searchVariants = {
    visible: { opacity: 1, width: 288, marginRight: -50 },
    hidden: { opacity: 0, width: 0, marginRight: 0 },
  };

  const handleToVisibleSearch = () => {
    setIsOpenSearch(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        <li className={styles.item}>
          <Link
            href='/catalog'
            className={cn(styles.link, {
              [styles['link--active']]: currentPathname === '/catalog',
            })}
          >
            Магазин
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href='/about-us'
            className={cn(styles.link, {
              [styles['link--active']]: currentPathname === '/about-us',
            })}
          >
            О нас
          </Link>
        </li>
      </ul>
      <motion.ul
        initial='hidden'
        animate={isOpenSearch ? 'visible' : 'hidden'}
        variants={containerVariants}
        className={cn(styles.links, styles['links--primary'])}
      >
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
          className={styles.item}
        >
          <GlassIcon />
        </motion.li>
        <li className={styles.item}>
          <Link
            href='/shopping-cart'
            className={cn(styles.link, {
              [styles['link--active']]: currentPathname === '/shopping-cart',
            })}
          >
            <ProductsCounter icon='cart' count={1} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href='/catalog/favorites'
            className={cn(styles.link, {
              [styles['link--active']]:
                currentPathname === '/catalog/favorites',
            })}
          >
            <ProductsCounter icon='favorite' />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href='/account'
            className={cn(styles.link, {
              [styles['link--active']]: currentPathname === '/account',
            })}
          >
            <AccountIcon />
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};
