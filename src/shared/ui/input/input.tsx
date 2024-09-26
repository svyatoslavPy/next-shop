import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import styles from './input.module.scss';
import { InputProps } from './input.props';

export const Input = forwardRef(
  (
    { appearance = 'gray', className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={cn(styles.input, className, {
          [styles.gray]: appearance === 'gray',
          [styles.white]: appearance === 'white',
        })}
        {...props}
      />
    );
  },
);
