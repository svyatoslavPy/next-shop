import cn from 'classnames';

import styles from './input.module.scss';
import { InputProps } from './input.props';

export const Input = ({
  appearance = 'gray',
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={cn(styles.input, className, {
        [styles.gray]: appearance === 'gray',
        [styles.white]: appearance === 'white',
      })}
      {...props}
    />
  );
};
