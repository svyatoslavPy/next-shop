'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import cn from 'classnames';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './gallery.module.scss';

export const Gallery = ({ images }: { images: string[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentImageIndex = Number(searchParams.get('imageIndex'));

  const { createQueryString } = useCreateQueryString();

  const handleChangePhoto = (imageIndex: number) => {
    const params = createQueryString('imageIndex', imageIndex.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {images.map((imageUrl, imageIndex) => (
          <Image
            onClick={() => handleChangePhoto(imageIndex)}
            key={imageUrl}
            className={cn(styles.picture, {
              [styles['picture--active']]: currentImageIndex === imageIndex,
            })}
            width={120}
            height={120}
            priority
            quality={100}
            src={imageUrl}
            alt='product'
          />
        ))}
      </div>
      <div className={styles.generalPicture}>
        <Image
          src={images[currentImageIndex]}
          width={540}
          height={600}
          quality={100}
          alt='product'
        />
      </div>
    </>
  );
};
