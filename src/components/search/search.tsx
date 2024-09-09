'use client';

import { GlassIcon } from '@/shared/icons/glass';
import { Input } from '@/shared/ui/input';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

import styles from './search.module.scss';
import { SearchProps } from './search.props';

export const Search = motion(
  forwardRef(
    (
      { className, ...props }: SearchProps,
      ref: ForwardedRef<HTMLDivElement>,
    ) => {
      const router = useRouter();
      const pathname = usePathname();
      const [searchQuery, setSearchQuery] = useState('');

      const handleSearch = () => {
        router.push(`${pathname}?search=${searchQuery}`);
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };

      const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };

      return (
        <div className={cn(styles.search, className)} {...props} ref={ref}>
          <Input
            onKeyDown={handleKeyDown}
            onChange={handleChangeQuery}
            className={styles.searchInput}
            placeholder='Поиск'
          />

          <span onClick={handleSearch} className={styles.searchIcon}>
            <GlassIcon />
          </span>
        </div>
      );
    },
  ),
);
