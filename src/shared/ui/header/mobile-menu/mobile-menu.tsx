import { ProductsCounter } from '@/components/products-counter';
import { Search } from '@/components/search';
import { LogoIcon } from '@/shared/icons/logo';
import { IMenu } from '@/shared/interfaces/menu.interface';
import { BurgerMenu } from '@/shared/ui/burger-menu';
import cn from 'classnames';
import Link from 'next/link';

import styles from './mobile-menu.module.scss';
import { MobileMenuNav } from './navigation';

export const MobileMenu = ({ onToogleMenu, isOpenMenu }: IMenu) => {
  return (
    <aside
      className={cn(styles.aside, {
        [styles.active]: isOpenMenu,
      })}
    >
      <div className={styles.asideHeader}>
        <Link href='/' className={styles.link}>
          <LogoIcon />
        </Link>

        <div className={styles.wrapper}>
          <ProductsCounter icon='cart' />
          <BurgerMenu onToogleMenu={onToogleMenu} isOpenMenu={isOpenMenu} />
        </div>
      </div>

      <Search className={styles.search} />
      <MobileMenuNav />
    </aside>
  );
};
