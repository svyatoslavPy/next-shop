import styles from './controls.module.scss';
import { ControlsProps } from './controls.props';

export const Controls = ({ minPos, maxPos }: ControlsProps) => {
  return (
    <div className={styles.controlWrapper}>
      <div className={styles.control} style={{ left: `${minPos}%` }} />
      <div className={styles.rail}>
        <div
          className={styles.innerRail}
          style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
        />
      </div>
      <div className={styles.control} style={{ left: `${maxPos}%` }} />
    </div>
  );
};
