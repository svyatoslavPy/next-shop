'use client';

import { LogoIcon } from '@/shared/icons/logo';
import { BurgerMenu } from '@/shared/ui/burger-menu';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from './header.module.scss';
import { MobileMenu } from './mobile-menu';
import { HeaderNav } from './navigation';

export const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMobileMenu(false);
  }, [pathname]);

  const handleToogleMobileMenu = () => {
    setIsOpenMobileMenu((currentIsOpen) => !currentIsOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Link href='/' className={cn(styles.link, styles.logo)}>
            <LogoIcon />
          </Link>

          <HeaderNav />
          <BurgerMenu
            onToogleMenu={handleToogleMobileMenu}
            isOpenMenu={isOpenMobileMenu}
          />
        </div>
      </header>

      <MobileMenu
        onToogleMenu={handleToogleMobileMenu}
        isOpenMenu={isOpenMobileMenu}
      />
    </>
  );
};
