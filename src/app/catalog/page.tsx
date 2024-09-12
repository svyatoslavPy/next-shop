'use server';

import { client } from '@/api';
import { Products } from '@/components/products';
import { DEFAULT_PAGE, PER_PAGE } from '@/shared/constants';
import { MAX_LIMIT_PRODUCTS } from '@/shared/constants/api';
import { Pagination } from '@/shared/ui/pagination';
import { getPaginatedItems } from '@/utils/pagination';

import styles from './catalog.module.scss';

export default async function Catalog({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const { products, totalProducts } =
    await client.getProducts(MAX_LIMIT_PRODUCTS);

  const currentPage = Number(searchParams.page) || DEFAULT_PAGE;
  const pageCount = Math.ceil(totalProducts / PER_PAGE);
  const paginatedItems = getPaginatedItems(products, currentPage, PER_PAGE);

  return (
    <>
      <h1 className={styles.title}>Каталог товаров</h1>

      <Products products={paginatedItems} />
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </>
  );
}
