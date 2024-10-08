import styles from './counter.module.scss';
import { ProductsCounterProps, icons } from './counter.props';

export const ProductsCounter = ({ icon, count }: ProductsCounterProps) => {
  const Icon = icons[icon];

  return (
    <div className={styles.wrapper}>
      <Icon />

      {count && <span className={styles.counter}>{count}</span>}
    </div>
  );
};
