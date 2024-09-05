'use client';

import { ProductsCounter } from '@/components/products-counter';
import { Search } from '@/components/search';
import { GlassIcon } from '@/shared/icons/glass';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import styles from './navigation.module.scss';

export const Navigation = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  // -- добавить анимацию с шириной
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleToVisibleSearch = () => {
    setIsOpenSearch(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        <li className={styles.linksItem}>
          <Link
            href='/catalog'
            className={cn(styles.link, styles['link--primary'])}
          >
            Магазин
          </Link>
        </li>
        <li className={styles.linksItem}>
          <Link
            href='/about-us'
            className={cn(styles.link, styles['link--primary'])}
          >
            О нас
          </Link>
        </li>
      </ul>
      <ul className={cn(styles.links, styles['links--primary'])}>
        <motion.li
          initial='hidden'
          animate={isOpenSearch ? 'visible' : 'hidden'}
          variants={variants}
          className={styles.linksItem}
        >
          <Search />
        </motion.li>
        <motion.li
          onClick={handleToVisibleSearch}
          initial='visible'
          animate={isOpenSearch ? 'hidden' : 'visible'}
          variants={variants}
          className={styles.linksItem}
        >
          <GlassIcon />
        </motion.li>
        <li className={styles.linksItem}>
          <Link href='/shopping-cart' className={styles.link}>
            <ProductsCounter icon='cart' />
          </Link>
        </li>
        <li className={styles.linksItem}>
          <Link href='/catalog/favorites' className={styles.link}>
            <ProductsCounter icon='favorite' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
