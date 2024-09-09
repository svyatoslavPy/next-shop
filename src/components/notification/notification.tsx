import styles from './notification.module.scss';
import { NotificationProps, icons } from './notification.props';

export const Notification = ({ message, icon }: NotificationProps) => {
  const Icon = icons[icon];

  return (
    <div className={styles.notification}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
