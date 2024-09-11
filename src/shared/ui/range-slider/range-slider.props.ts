type Range = { min: number; max: number };

export interface RangeSliderProps {
  max: number;
  min: number;
  value: Range;
  step: number;
  onChange: (value: Range) => void;
}
