'use client';

import { DEFAULT_PAGE } from '@/shared/constants';
import { generatePageNumbers } from '@/utils/pagination';

import { Button } from '../button/button';
import styles from './pagination.module.scss';
import { PaginationProps } from './pagination.props';

export const Pagination = ({
  pageCount,
  currentPage = DEFAULT_PAGE,
  onChangePage,
}: PaginationProps) => {
  const pages = generatePageNumbers(pageCount);

  return (
    <div className={styles.pagination}>
      <Button
        className={styles.button}
        appearance='white'
        arrow='left'
        onClick={() => onChangePage(currentPage - 1)}
      />
      {pages.map((page) => (
        <>
          <Button
            className={styles.button}
            appearance={currentPage === page ? 'black' : 'white'}
            onClick={() => onChangePage(page)}>
            {page}
          </Button>
        </>
      ))}
      <Button
        className={styles.button}
        appearance='white'
        arrow='right'
        onClick={() => onChangePage(currentPage + 1)}
      />
    </div>
  );
};
