import { IAppError } from './IAppError';

export class AppError implements IAppError {
  constructor(public message: string, public statusCode = 400) {}
}
