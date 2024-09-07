'use client';

import { ProductsCounter } from '@/components/products-counter';
import { Search } from '@/components/search';
import { AccountIcon } from '@/shared/icons/account';
import { GlassIcon } from '@/shared/icons/glass';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

import styles from './navigation.module.scss';

export const HeaderNav = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

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
      <motion.ul
        initial='hidden'
        animate={isOpenSearch ? 'visible' : 'hidden'}
        variants={containerVariants}
        className={cn(styles.links, styles['links--primary'])}
      >
        <li className={styles.linksItem}>
          <Search
            ref={searchRef}
            initial='hidden'
            variants={searchVariants}
            animate={isOpenSearch ? 'visible' : 'hidden'}
          />
        </li>

        <motion.li
          onClick={handleToVisibleSearch}
          initial='visible'
          animate={isOpenSearch ? 'hidden' : 'visible'}
          variants={glassVariants}
          style={{ pointerEvents: isOpenSearch ? 'none' : 'all' }}
          className={styles.linksItem}
        >
          <GlassIcon />
        </motion.li>
        <li className={styles.linksItem}>
          <Link href='/shopping-cart' className={styles.link}>
            <ProductsCounter icon='cart' count={1} />
          </Link>
        </li>
        <li className={styles.linksItem}>
          <Link href='/catalog/favorites' className={styles.link}>
            <ProductsCounter icon='favorite' />
          </Link>
        </li>
        <li className={styles.linksItem}>
          <Link href='/account' className={styles.link}>
            <AccountIcon />
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};
