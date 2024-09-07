import { FacebookIcon } from '@/shared/icons/facebook';
import { InstagramIcon } from '@/shared/icons/instagram';
import { LinkedinIcon } from '@/shared/icons/linkedin';
import { TwitterIcon } from '@/shared/icons/twitter';
import Link from 'next/link';

import styles from './footer.module.scss';
import { Form as FooterForm } from './form';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.links}>
          <li className={styles.item}>
            <Link href='/contacts' className={styles.link}>
              Контакты
            </Link>
          </li>
          <li>
            <Link href='/terms-purchase' className={styles.link}>
              Условия покупки
            </Link>
          </li>
          <li>
            <Link href='/delivery-return' className={styles.link}>
              Доставка и возврат
            </Link>
          </li>
        </ul>

        <FooterForm />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.logo}>© 2024 Shoppe</p>

        <ul className={styles.socialNetworks}>
          <li>
            <LinkedinIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
};
