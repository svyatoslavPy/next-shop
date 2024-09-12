import { client } from '@/api';
import { Products } from '@/components/products';

export default async function Home() {
  const { products } = await client.getProducts();

  return (
    <>
      <Products products={products} />
    </>
  );
}
