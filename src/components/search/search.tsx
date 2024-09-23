'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { useKeyDown } from '@/hooks/useKeyDown';
import { GlassIcon } from '@/shared/icons/glass';
import { Input } from '@/shared/ui/input';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

import styles from './search.module.scss';
import { SearchProps } from './search.props';

export const Search = motion(
  forwardRef(
    (
      {
        className,
        appearance = 'gray',
        directionIcon = 'left',
        placeholder = 'Поиск',
        ...props
      }: SearchProps,
      ref: ForwardedRef<HTMLDivElement>,
    ) => {
      const router = useRouter();
      const pathname = usePathname();
      const { createQueryString } = useCreateQueryString();
      const [searchQuery, setSearchQuery] = useState('');

      const handleSearch = () => {
        const params = createQueryString('search', searchQuery);

        if (searchQuery) {
          router.push(`${pathname}?${params.toString()}`);
        } else {
          router.push(`${pathname}`);
        }
      };

      const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };

      useKeyDown('Enter', () => {
        handleSearch();
      });

      return (
        <div
          className={cn(styles.searchWrapper, className, {
            [styles['searchWrapper--white']]: appearance === 'white',
          })}
          {...props}
          ref={ref}>
          <Input
            onChange={handleChangeQuery}
            placeholder={placeholder}
            value={searchQuery}
            className={styles[appearance]}
            appearance={appearance}
          />

          <span
            onClick={handleSearch}
            className={cn(styles.searchIcon, {
              [styles['searchIcon--left']]: directionIcon === 'left',
              [styles['searchIcon--right']]: directionIcon === 'right',
              [styles['searchIcon--gray']]: appearance === 'gray',
              [styles['searchIcon--black']]: appearance === 'white',
            })}>
            <GlassIcon />
          </span>
        </div>
      );
    },
  ),
);
