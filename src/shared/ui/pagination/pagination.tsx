'use client';

import { defaultPage } from '@/shared/constants';
import { generatePageNumbers } from '@/utils/pagination';

import { Button } from '../button/button';
import styles from './pagination.module.scss';
import { PaginationProps } from './pagination.props';

export const Pagination = ({
  pageCount,
  currentPage = defaultPage,
  onChangePage,
}: PaginationProps) => {
  const pages = generatePageNumbers(pageCount);

  return (
    <div className={styles.pagination}>
      <Button
        size='small'
        appearance='white'
        arrow='left'
        onClick={() => onChangePage(currentPage - 1)}
      />
      {pages.map((page) => (
        <>
          <Button
            size='small'
            appearance={currentPage === page ? 'black' : 'white'}
            onClick={() => onChangePage(page)}>
            {page}
          </Button>
        </>
      ))}
      <Button
        size='small'
        appearance='white'
        arrow='right'
        onClick={() => onChangePage(currentPage + 1)}
      />
    </div>
  );
};
