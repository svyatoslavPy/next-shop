import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import styles from './input.module.scss';
import { InputProps } from './input.props';

export const Input = forwardRef(
  (
    { error, appearance = 'gray', className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          className={cn(styles.input, className, {
            [styles.gray]: appearance === 'gray',
            [styles.white]: appearance === 'white',
          })}
          {...props}
        />

        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
