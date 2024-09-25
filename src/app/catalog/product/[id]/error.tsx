'use client';

import { StatusCodes } from '@/shared/enums/status-codes.enum';
import { ErrorMessage } from '@/shared/ui/error-message';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <ErrorMessage
      statusCode={StatusCodes.BAD_REQUEST}
      message={'Продукт не найден'}
    />
  );
}
