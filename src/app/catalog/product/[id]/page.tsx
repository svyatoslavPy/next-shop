'use server';

import { client } from '@/api';
import { ProductDetails } from '@/components/product-details';
import { ProductExamples } from '@/components/products/examples';
import { getRatingByReviews } from '@/utils';
import Image from 'next/image';

import styles from '../product.module.scss';

export async function generateStaticParams() {
  const { products } = await client.getProducts();

  return products.map((product) => ({
    id: product.sku.toString(),
  }));
}

export default async function Product({ params }: { params: { id: string } }) {
  const product = await client.getProduct(+params.id);
  const { images, reviews, price, name, description, categoryId } = product;

  const { categories } = await client.getFilters();
  const category = categories.find((item) => item.id === categoryId);

  const examplesOfProduct = images.slice(0, images.length - 1);
  const rating = await getRatingByReviews(reviews);

  return (
    <section className={styles.product}>
      <ProductExamples images={examplesOfProduct} />

      <Image
        className={styles.generalPicture}
        src={images[images.length - 1]}
        width={540}
        height={600}
        quality={100}
        alt='product'
      />

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
  );
}
