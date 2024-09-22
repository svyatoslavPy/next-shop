'use server';

import { client } from '@/api';
import { ProductDetails } from '@/components/product-details';
import { getRating } from '@/utils';
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
  const { images, reviews, price, name, description } = product;

  const productImages = images.slice(0, images.length - 1);
  const rating = await getRating(reviews);

  return (
    <section className={styles.product}>
      <div className={styles.productsImages}>
        {productImages.map((imageUrl) => (
          <Image
            key={imageUrl}
            className={styles.productPicture}
            width={120}
            height={120}
            src={imageUrl}
            alt='product'
          />
        ))}
      </div>

      <Image
        className={styles.generalPicture}
        src={images[images.length - 1]}
        width={540}
        height={600}
        alt='product'
      />

      <ProductDetails
        name={name}
        price={price}
        description={description}
        rating={rating}
        countReviews={reviews.length}
      />
    </section>
  );
}
