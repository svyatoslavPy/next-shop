'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { DEFAULT_PAGE } from '@/shared/constants';
import { generatePageNumbers } from '@/utils/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '../button/button';
import styles from './pagination.module.scss';

export const Pagination = ({ pageCount }: { pageCount: number }) => {
  const searchParams = useSearchParams();
  const pages = generatePageNumbers(pageCount);
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get('page')) || DEFAULT_PAGE;

  const { createQueryString } = useCreateQueryString();

  const handleChangePage = (page: number) => {
    if (page < DEFAULT_PAGE || page > pageCount) return;
    const params = createQueryString('page', page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.pagination}>
      <Button
        className={styles.button}
        appearance='white'
        arrow='left'
        onClick={() => handleChangePage(currentPage - 1)}
      />
      {pages.map((page) => (
        <>
          <Button
            className={styles.button}
            appearance={currentPage === page ? 'black' : 'white'}
            onClick={() => handleChangePage(page)}>
            {page}
          </Button>
        </>
      ))}
      <Button
        className={styles.button}
        appearance='white'
        arrow='right'
        onClick={() => handleChangePage(currentPage + 1)}
      />
    </div>
  );
};
