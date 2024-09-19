'use client';

import { client } from '@/api';
import { DEFAULT_LIMIT_PRODUCTS } from '@/shared/constants/api';
import { IProducts } from '@/shared/interfaces/products.interface';
import { useEffect, useState } from 'react';

export function useFetchProducts() {
  const [products, setProducts] = useState<IProducts>({
    totalProducts: 0,
    products: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);

    client
      .getProducts(DEFAULT_LIMIT_PRODUCTS)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof Error) {
          console.log(e.message);
        }
      });
  };

  return { products, loading };
}
