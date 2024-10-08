import { ErrorMessage } from '@/shared/ui/error-message';

export default function NotFound() {
  return <ErrorMessage statusCode={404} message='Страница не найдена' />;
}
