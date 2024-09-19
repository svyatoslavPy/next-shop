'use client';

import { IProduct } from '@/shared/interfaces/product.interface';
import cn from 'classnames';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../styles/swiper.scss';
import styles from './banners.module.scss';

export const Banners = ({ products }: { products: IProduct[] }) => {
  const firstFourProducts = products.slice(0, 4);
  const swiperParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
    <div className={styles.banners}>
      <Swiper pagination={pagination} modules={[Pagination]} {...swiperParams}>
        {firstFourProducts.map((product) => (
          <SwiperSlide
            className={cn(styles.banner, {
              [styles['banner--primary']]: product.sku % 2 === 0,
            })}>
            <p className={styles.title}>{product.name}</p>
            <p className={styles.price}>$ {product.price}</p>
            <Link
              href={`/catalog/product/${product.sku}`}
              className={styles.link}>
              Смотреть
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
