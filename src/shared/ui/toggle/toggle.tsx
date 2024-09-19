'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import cn from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './toggle.module.scss';

export const Toggle = ({ urlQuery }: { urlQuery: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { createQueryString } = useCreateQueryString();

  const isSelected = searchParams.get(urlQuery);

  const handleToogle = () => {
    const params = createQueryString(urlQuery, 'true');

    if (isSelected) {
      params.delete(urlQuery);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button className={styles.toggle} onClick={handleToogle}>
      <span
        className={cn(styles.circle, {
          [styles['circle--active']]: isSelected,
        })}></span>
    </button>
  );
};
