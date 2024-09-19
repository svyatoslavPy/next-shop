import { Option } from '@/shared/interfaces/option.interface';

export interface SelectProps {
  options: Option[];
  urlQuery: string;
  className?: string;
}
