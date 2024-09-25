'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { getOnlyWord } from '@/utils';
import cn from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './tabs.module.scss';
import { TabsProps } from './tabs.props';

export const Tabs = ({ tabs, tabName }: TabsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { createQueryString } = useCreateQueryString();

  const defaultTab = tabs.find((item) => getOnlyWord(item.name) === tabName);
  const currentTabId = Number(searchParams.get('tabId')) || defaultTab?.id;

  const handleChangeTab = (tabId: number) => {
    const params = createQueryString('tabId', tabId.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tabItem) => (
        <p
          key={tabItem.id}
          onClick={() => handleChangeTab(tabItem.id)}
          className={cn(styles.tab, {
            [styles['tab--active']]: tabItem.id === currentTabId,
          })}>
          {tabItem.name}
        </p>
      ))}
    </div>
  );
};
