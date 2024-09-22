import { ArrowPrimaryIcon, CartIcon, FavoriteIcon } from '@/shared/icons';
import cn from 'classnames';

import styles from './button.module.scss';
import { ButtonProps, RequireAtLeastOne } from './button.props';

export const Button = ({
  children,
  className,
  appearance,
  arrow = 'none',
  isFullWidth = false,
  icon,
  ...props
}: RequireAtLeastOne<ButtonProps>) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.black]: appearance === 'black',
        [styles.white]: appearance === 'white',
        [styles.ghost]: appearance === 'ghost',
        [styles.none]: appearance === 'none',
        [styles.fullWidth]: isFullWidth,
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
