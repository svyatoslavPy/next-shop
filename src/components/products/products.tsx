import { ProductCard } from '../product-card';
import styles from './products.module.scss';
import { ProductsProps } from './products.props';

export const Products = ({
  products,
  isHaveOldPrice = false,
  isHaveDiscount = false,
}: ProductsProps) => {
  return (
    <section className={styles.products}>
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
