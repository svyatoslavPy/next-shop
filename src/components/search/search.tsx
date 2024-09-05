import { GlassIcon } from '@/shared/icons/glass';
import { Input } from '@/shared/ui/input';

import styles from './search.module.scss';

export const Search = () => {
  return (
    <div className={styles.search}>
      <Input className={styles.searchInput} placeholder='Поиск' />

      <span className={styles.searchIcon}>
        <GlassIcon />
      </span>
    </div>
  );
};
