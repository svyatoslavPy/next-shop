import { ProductsCounter } from '@/components/products/counter';
import { mobileMenuRoutes } from '@/shared/constants/navigation';
import { AccountIcon } from '@/shared/icons/account';
import { LogoutIcon } from '@/shared/icons/logout';
import Link from 'next/link';

import styles from './navigation.module.scss';

export const MobileMenuNav = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        {mobileMenuRoutes.map((route) => (
          <>
            <li key={route.id} className={styles.item}>
              <Link href={route.href} className={styles.link}>
                {route.name}
              </Link>
            </li>
          </>
        ))}
      </ul>
      <ul className={styles.links}>
        <li className={styles.item}>
          <Link href='/account' className={styles.link}>
            <AccountIcon />
            Мой аккаунт
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/catalog/favorites' className={styles.link}>
            <ProductsCounter icon='favorite' count={2} />
            Избранное
          </Link>
        </li>
        <li className={styles.item}>
          <LogoutIcon />
          Выход
        </li>
      </ul>
    </nav>
  );
};
