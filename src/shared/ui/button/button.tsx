import { ArrowPrimaryIcon } from '@/shared/icons';
import cn from 'classnames';

import styles from './button.module.scss';
import { ButtonProps } from './button.props';

export const Button = ({
  children,
  className,
  appearance,
  arrow = 'none',
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.black]: appearance === 'black',
        [styles.white]: appearance === 'white',
        [styles.small]: size === 'small',
      })}
      {...props}>
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.icon, {
            [styles['icon--left']]: arrow === 'left',
            [styles['icon--right']]: arrow === 'right',
          })}>
          <ArrowPrimaryIcon />
        </span>
      )}
    </button>
  );
};
