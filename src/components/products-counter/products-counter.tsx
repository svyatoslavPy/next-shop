import styles from './products-counter.module.scss';
import { ProductsCounterProps, icons } from './products-counter.props';

export const ProductsCounter = ({ icon, count }: ProductsCounterProps) => {
  const Icon = icons[icon];

  return (
    <div className={styles.wrapper}>
      <Icon />

      {count && <span className={styles.counter}>{count}</span>}
    </div>
  );
};
