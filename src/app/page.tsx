'use client';

import { usePagination } from '@/hooks/usePagination';
import { Pagination } from '@/shared/ui/pagination';
import { RangeSlider } from '@/shared/ui/range-slider';
import { Select } from '@/shared/ui/select';
import { Toggle } from '@/shared/ui/toggle';
import { useState } from 'react';

export default function Home() {
  const data = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
  ];

  const { currentPage, handleChangePage, pageCount, paginatedItems } =
    usePagination(data);
  const [currentCategory, setCurrentCategory] = useState('');
  const [isDiscount, setIsDiscount] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 40, max: 180 });

  const handleChangeCategory = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      <h1>Главная</h1>

      {paginatedItems.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onChangePage={handleChangePage}
      />

      <Select
        arrow={currentCategory ? 'up' : 'down'}
        selectedOption={currentCategory}
        onChange={handleChangeCategory}
        options={['Категория', 'Золото', 'Серебро']}
      />

      <Toggle
        checked={isDiscount}
        onChange={() =>
          setIsDiscount((currentIsDiscount) => !currentIsDiscount)
        }
      />

      <RangeSlider
        min={0}
        max={180}
        value={priceRange}
        step={1}
        onChange={setPriceRange}
      />
    </div>
  );
}
