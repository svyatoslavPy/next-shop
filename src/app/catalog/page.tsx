'use server';

import { client } from '@/api';
import { Products } from '@/components/products';
import { Search } from '@/components/search';
import { DEFAULT_PAGE, PER_PAGE } from '@/shared/constants';
import { DEFAULT_LIMIT_PRODUCTS } from '@/shared/constants/api';
import { Pagination } from '@/shared/ui/pagination';
import { RangeSlider } from '@/shared/ui/range-slider';
import { Select } from '@/shared/ui/select';
import { Toggle } from '@/shared/ui/toggle';
import { getPaginatedItems } from '@/utils/pagination';

import styles from './catalog.module.scss';

export default async function Catalog({
  searchParams,
}: {
  searchParams: {
    page: number;
    categoryId: number;
    search: string;
    priceMin: number;
    priceMax: number;
    discounted: string;
  };
}) {
  const { categories, minPrice, maxPrice } = await client.getFilters();

  const currentMinPrice = searchParams.priceMin || minPrice;
  const currentMaxPrice = searchParams.priceMax || maxPrice;
  const currentCategoryId = searchParams.categoryId;
  const currentIsDiscounted = searchParams.discounted;
  const currentSearchQuery = searchParams.search;

  const { products, totalProducts } = await client.getProducts(
    DEFAULT_LIMIT_PRODUCTS,
    currentCategoryId,
    { priceMin: currentMinPrice, priceMax: currentMaxPrice },
    currentIsDiscounted,
    currentSearchQuery,
  );

  const currentPage = Number(searchParams.page) || DEFAULT_PAGE;
  const pageCount = Math.ceil(totalProducts / PER_PAGE);
  const paginatedItems = getPaginatedItems(products, currentPage, PER_PAGE);

  return (
    <>
      <h1 className={styles.title}>Каталог товаров</h1>

      <div className={styles.wrapper}>
        <Search
          appearance='white'
          directionIcon='right'
          placeholder='Поиск...'
        />

        <Select
          className={styles.select}
          options={categories}
          urlQuery='categoryId'
        />

        <div className={styles.priceFilters}>
          <RangeSlider min={minPrice} max={maxPrice} step={1} />
          <p className={styles.price}>
            Цена: ${currentMinPrice} - ${currentMaxPrice}
          </p>

          <div className={styles.toogleDiscount}>
            <p>Cо скидкой</p>
            <Toggle urlQuery='discounted' />
          </div>
        </div>

        <div className={styles.content}>
          <Products
            className={styles.products}
            products={paginatedItems}
            isHaveDiscount
            isHaveOldPrice
          />
          <Pagination pageCount={pageCount} />
        </div>
      </div>
    </>
  );
}
