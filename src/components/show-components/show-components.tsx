'use client';

import { RangeSlider } from '@/shared/ui/range-slider';
import { Select } from '@/shared/ui/select';
import { Toggle } from '@/shared/ui/toggle';
import { useState } from 'react';

export const ShowComponents = () => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [isDiscount, setIsDiscount] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 40, max: 180 });

  const handleChangeCategory = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <>
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
    </>
  );
};
