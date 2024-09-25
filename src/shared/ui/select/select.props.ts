import { Option } from '@/shared/interfaces/option.interface';

export interface SelectProps {
  options: Option[];
  initialOption: string;
  urlQuery: string;
  className?: string;
}
