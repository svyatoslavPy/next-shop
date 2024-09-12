'use client';

import { Products } from '@/components/products';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { usePagination } from '@/hooks/usePagination';
import { Pagination } from '@/shared/ui/pagination';

import styles from './catalog.module.scss';

export default async function Catalog() {
  const { products, loading } = useFetchProducts();

  const { currentPage, handleChangePage, pageCount, paginatedItems } =
    usePagination(products.products, products.totalProducts);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className={styles.title}>Каталог товаров</h1>

      <Products products={paginatedItems} />
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onChangePage={handleChangePage}
      />
    </>
  );
}
