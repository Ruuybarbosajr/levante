import { NextFunction, Request, Response } from 'express';
import { IAppError } from '../../shared/handleError/IAppError';
import { AppError } from '../../shared/handleError';

export default (
  error: Error | IAppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  console.log(error);
  return res.status(500).json({ message: 'Internal server error ' });
};
