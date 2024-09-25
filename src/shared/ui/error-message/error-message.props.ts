import { StatusCodes } from '@/shared/enums/status-codes.enum';

export interface ErrorMessageProps {
  statusCode: StatusCodes;
  message: string;
}
