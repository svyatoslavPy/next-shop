'use client';

import { GALLERY_WIDTH } from '@/shared/constants';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import styles from './gallery.module.scss';
import { GalleryProps } from './gallery.props';

export const Gallery = ({ images, className, ...props }: GalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChangeImageIndex = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
  };

  const controlWidthPixels = GALLERY_WIDTH / images.length;
  const activeImagePosition = currentImageIndex * controlWidthPixels;

  return (
    <div className={cn(styles.gallery, className)} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.pictures}>
          {images.map((imageUrl, imageIndex) => (
            <Image
              onClick={() => handleChangeImageIndex(imageIndex)}
              key={imageUrl}
              className={cn(styles.picture, {
                [styles['picture--active']]: currentImageIndex === imageIndex,
              })}
              width={120}
              height={120}
              src={imageUrl}
              alt='product'
            />
          ))}
        </div>
        <div className={styles.generalPicture}>
          <Image
            src={images[currentImageIndex]}
            width={GALLERY_WIDTH}
            height={600}
            quality={100}
            alt='product'
          />

          <div className={styles.controls}>
            <span
              className={cn(styles.control, styles['control--active'])}
              style={{
                left: `${activeImagePosition}px`,
                width: `${controlWidthPixels}px`,
              }}></span>
            <span
              className={styles.control}
              style={{ width: `${GALLERY_WIDTH}px` }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
