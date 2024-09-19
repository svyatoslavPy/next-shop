import { client } from '@/api';

export async function generateStaticParams() {
  const { products } = await client.getProducts();

  return products.map((product) => ({
    id: product.sku.toString(),
  }));
}

export default async function Product({ params }: { params: { id: string } }) {
  return <h1>Продукт {params.id} </h1>;
}
