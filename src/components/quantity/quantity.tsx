'use client';

import { Button } from '@/shared/ui/button';
import cn from 'classnames';

import styles from './quantity.module.scss';
import { QuantityProps } from './quantity.props';

export const Quantity = ({
  quantity,
  onDecrease,
  onIncrease,
  className,
  ...props
}: QuantityProps) => {
  return (
    <div className={cn(styles.quantity, className)} {...props}>
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
