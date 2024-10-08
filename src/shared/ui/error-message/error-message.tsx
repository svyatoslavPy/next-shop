import Link from 'next/link';

import styles from './error-message.module.scss';
import { ErrorMessageProps } from './error-message.props';

export const ErrorMessage = ({ statusCode, message }: ErrorMessageProps) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{statusCode} ошибка</h2>
      <p className={styles.description}>
        {message}, попробуйте перейти на главную страницу
      </p>

      <Link className={styles.link} href='/'>
        Главная страница
      </Link>
    </div>
  );
};
