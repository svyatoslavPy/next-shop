export default function Product({ params }: { params: { slug: string } }) {
  return <h1>Продукт {params.slug} </h1>;
}
