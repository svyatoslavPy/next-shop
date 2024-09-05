import cn from 'classnames';

import styles from './input.module.scss';
import { InputProps } from './input.props';

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn(className, styles.input)} {...props} />;
};
