import Link from 'next/link';

import styles from './footer.module.scss';
import { Form as FooterForm } from './form';
import { SocialNetworks } from './social-networks';

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

      <SocialNetworks />
    </footer>
  );
};
