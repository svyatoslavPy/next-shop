import { CloseIcon as close, SuccessIcon as success } from '@/shared/icons';

export const icons = {
  success,
  close,
};

type Icon = keyof typeof icons;

export interface NotificationProps {
  message: string;
  icon: Icon;
}
