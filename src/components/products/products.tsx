import { ProductCard } from '../product-card';
import { ProductsProps } from './products.props';

export const Products = ({
  products,
  isHaveOldPrice = false,
  isHaveDiscount = false,
  className,
  ...props
}: ProductsProps) => {
  return (
    <section className={className} {...props}>
      {products.map((product) => (
        <ProductCard
          key={product.sku}
          id={product.sku}
          name={product.name}
          price={product.price}
          imageUrl={product.images[0]}
          discount={product.discount}
          isHaveOldPrice={isHaveOldPrice}
          isHaveDiscount={isHaveDiscount}
        />
      ))}
    </section>
  );
};
