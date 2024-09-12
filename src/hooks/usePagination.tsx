'use server';

import { PER_PAGE } from '@/shared/constants';
import { getPaginatedItems } from '@/utils/pagination';

export function usePagination<Type>(
  data: Type[],
  page: number,
  totalItems: number,
) {
  const pageCount = Math.ceil(totalItems / PER_PAGE);
  const paginatedItems = getPaginatedItems(data, page, PER_PAGE);

  return { page, pageCount, paginatedItems };
}
