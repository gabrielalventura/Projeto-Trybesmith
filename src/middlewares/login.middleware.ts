import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../interfaces';

const loginMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body as ILogin;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

export default loginMiddleware;