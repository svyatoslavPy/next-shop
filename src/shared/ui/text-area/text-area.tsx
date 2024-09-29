import cn from 'classnames';
import { DM_Sans } from 'next/font/google';
import { ForwardedRef, forwardRef } from 'react';

import styles from './text-area.module.scss';
import { TextAreaProps } from './text-area.props';

const font = DM_Sans({ subsets: ['latin'] });

export const TextArea = forwardRef(
  (
    { className, error, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <div className={styles.textareaWrapper}>
        <textarea
          ref={ref}
          className={cn(styles.textarea, font.className, className)}
          {...props}></textarea>

        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
