import { ArrowPrimaryIcon, CartIcon, FavoriteIcon } from '@/shared/icons';
import cn from 'classnames';

import styles from './button.module.scss';
import { ButtonProps, RequireAtLeastOne } from './button.props';

export const Button = ({
  children,
  className,
  appearance,
  arrow = 'none',
  size,
  icon,
  ...props
}: RequireAtLeastOne<ButtonProps>) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.black]: appearance === 'black',
        [styles.white]: appearance === 'white',
        [styles.hidden]: appearance === 'hidden',
        [styles.normal]: size === 'full',
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

      {icon === 'cart' && <CartIcon />}
      {icon === 'favorite' && <FavoriteIcon />}
    </button>
  );
};
