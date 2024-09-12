'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { Input } from '../input';
import { Controls } from './controls/controls';
import styles from './range-slider.module.scss';
import { RangeSliderProps } from './range-slider.props';

export const RangeSlider = ({
  min,
  max,
  step,
  value,
  onChange,
}: RangeSliderProps) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const newMinVal = Math.min(value, maxValue + step);

    if (newMinVal > maxValue) return;
    if (!value) setMinValue(newMinVal);

    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const newMaxVal = Math.max(value, minValue - step);

    if (newMaxVal < minValue) return;
    if (!value) setMaxValue(newMaxVal);

    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <>
      <p>
        Цена: - ${minValue} - ${maxValue}
      </p>
      <div className={styles.wrapper}>
        <div tabIndex={0} className={styles.inputWrapper}>
          <Input
            tabIndex={0}
            onChange={handleMinChange}
            className={styles.input}
            step={step}
            min={min}
            max={max}
            value={minValue}
            type='range'
          />
          <Input
            tabIndex={0}
            type='range'
            className={styles.input}
            onChange={handleMaxChange}
            step={step}
            min={min}
            max={max}
            value={maxValue}
          />
        </div>
        <Controls maxPos={maxPos} minPos={minPos} />
      </div>
    </>
  );
};
