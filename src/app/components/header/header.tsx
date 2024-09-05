import { LogoIcon } from '@/shared/icons/logo';
import Link from 'next/link';

import styles from './header.module.scss';
import { Navigation } from './navigation';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href='/' className={styles.link}>
          <LogoIcon />
        </Link>

        <Navigation />
      </div>
    </header>
  );
};
