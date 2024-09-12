import { socialNetworksRoutes } from '@/shared/constants/navigation';
import Link from 'next/link';

import styles from './social-networks.module.scss';

export const SocialNetworks = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.logo}>© 2024 Shoppe</p>

      <ul className={styles.socialNetworks}>
        {socialNetworksRoutes.map((route) => (
          <li key={route.id} className={styles.item}>
            <Link href={route.href} className={styles.link}>
              {<route.icon />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
