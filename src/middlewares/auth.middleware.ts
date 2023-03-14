import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../shared/http.exception';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) throw new HttpException(401, 'Token não encontrado');
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = payload;
    return next();
  } catch (error) {
    throw new HttpException(401, 'Não autorizada');
  }
};

export default authMiddleware;