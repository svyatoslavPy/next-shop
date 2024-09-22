import Image from 'next/image';

import styles from './examples.module.scss';

export const ProductExamples = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.wrapper}>
      {images.map((imageUrl) => (
        <Image
          key={imageUrl}
          className={styles.picture}
          width={120}
          height={120}
          src={imageUrl}
          alt='product'
        />
      ))}
    </div>
  );
};
