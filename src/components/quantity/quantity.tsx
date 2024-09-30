'use client';

import { Button } from '@/shared/ui/button';

import styles from './quantity.module.scss';
import { QuantityProps } from './quantity.props';

export const Quantity = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityProps) => {
  return (
    <div className={styles.quantity}>
      <Button
        onClick={onDecrease}
        className={styles.quantityButton}
        appearance='none'>
        -
      </Button>
      <p>{quantity}</p>
      <Button
        onClick={onIncrease}
        className={styles.quantityButton}
        appearance='none'>
        +
      </Button>
    </div>
  );
};
