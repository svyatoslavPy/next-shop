'use server';

import { client } from '@/api';
import { Gallery } from '@/components/gallery';
import { ProductDetails } from '@/components/product-details';
import { Tabs } from '@/components/tabs';
import { PRODUCT_TABS } from '@/shared/constants';
import { ProductTabs } from '@/shared/enums/product-tabs.enum';
import {
  getIdFromProductTabs,
  getRatingByReviews,
  getTabsWithCountReviews,
} from '@/utils';
import { Metadata } from 'next';

import styles from '../product.module.scss';

export const generateMetadata = async ({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> => {
  const product = await client.getProduct(params.id);

  return {
    title: `Купить товар ${product.name} в магазине Shoppe`,
    description: `${product.name} - ${product.description}`,
  };
};

export async function generateStaticParams() {
  const { products } = await client.getProducts();

  return products.map((product) => ({
    id: product.sku.toString(),
  }));
}

export default async function Product({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tabId: number };
}) {
  const product = await client.getProduct(+params.id);
  const { images, reviews, price, name, description, categoryId } = product;

  const { categories } = await client.getFilters();
  const category = categories.find((item) => item.id === categoryId);

  const productsImages = images.slice(0, images.length - 1);
  const rating = await getRatingByReviews(reviews);

  const initialTabId = getIdFromProductTabs(ProductTabs.Description);
  const currentTabId = +searchParams.tabId || initialTabId;
  const currentTab = PRODUCT_TABS.find((item) => item.id === currentTabId);

  const tabsWithCountReviews = getTabsWithCountReviews(
    PRODUCT_TABS,
    reviews.length,
  );

  return (
    <>
      <section className={styles.product}>
        <Gallery images={productsImages} />

        <ProductDetails
          name={name}
          price={price}
          description={description}
          rating={rating}
          id={+params.id}
          category={category?.name || ''}
          countReviews={reviews.length}
        />
      </section>

      <Tabs tabs={tabsWithCountReviews} tabName={ProductTabs.Description} />

      {currentTab?.name === ProductTabs.Description && (
        <p className={styles.description}>{description}</p>
      )}

      {currentTab?.name === ProductTabs.Reviews && (
        <section>
          <p>Reviews</p>
        </section>
      )}
    </>
  );
}
