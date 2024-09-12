'use client';

import { DEFAULT_PAGE, PER_PAGE } from '@/shared/constants';
import { getPaginatedItems } from '@/utils/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useCreateQueryString } from './useCreateQueryString';

export function usePagination<Type>(data: Type[], totalItems: number) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || DEFAULT_PAGE;

  const pageCount = Math.ceil(totalItems / PER_PAGE);
  const paginatedItems = getPaginatedItems(data, currentPage, PER_PAGE);

  const { createQueryString } = useCreateQueryString();

  const createPageURL = (page: number) => {
    router.push(`${pathname}?${createQueryString('page', page.toString())}`);
  };

  const handleChangePage = (page: number) => {
    if (page < DEFAULT_PAGE || page > pageCount) return;
    createPageURL(page);
  };

  return { currentPage, pageCount, handleChangePage, paginatedItems };
}
