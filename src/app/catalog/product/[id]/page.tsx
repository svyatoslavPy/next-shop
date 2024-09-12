import { client } from '@/api';
import { MAX_LIMIT_PRODUCTS } from '@/shared/constants/api';

export async function generateStaticParams() {
  const { products } = await client.getProducts(MAX_LIMIT_PRODUCTS);

  return products.map((product) => ({
    id: product.sku.toString(),
  }));
}

export default async function Product({ params }: { params: { id: string } }) {
  return <h1>Продукт {params.id} </h1>;
}
