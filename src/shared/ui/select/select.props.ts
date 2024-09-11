export interface SelectProps {
  onChange: (option: string) => void;
  options: string[];
  selectedOption: string;
  arrow?: 'up' | 'down' | 'none';
}
