import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/shared/icons';
import Link from 'next/link';

import styles from './social-networks.module.scss';

export const SocialNetworks = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.logo}>© 2024 Shoppe</p>

      <ul className={styles.socialNetworks}>
        <li className={styles.item}>
          <Link href='#' className={styles.link}>
            <LinkedinIcon />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='#' className={styles.link}>
            <FacebookIcon />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='#' className={styles.link}>
            <InstagramIcon />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='#' className={styles.link}>
            <TwitterIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};
