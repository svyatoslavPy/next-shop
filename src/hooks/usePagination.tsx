'use client';

import { defaultPage, perPage } from '@/shared/constants';
import { getPaginatedItems } from '@/utils/pagination';
import { useState } from 'react';

export function usePagination<Type>(data: Type[]) {
  // добавить url search params query
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const pageCount = Math.ceil(data.length / perPage);
  const paginatedItems = getPaginatedItems(data, currentPage, perPage);

  const handleChangePage = (page: number) => {
    if (page < defaultPage || page > pageCount) return;
    setCurrentPage(page);
  };

  return { currentPage, pageCount, handleChangePage, paginatedItems };
}
