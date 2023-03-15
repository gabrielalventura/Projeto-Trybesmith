import { Request, Response } from 'express';
import { ILogin, User } from '../interfaces';
import userService from '../services/userService';

const insertUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const token = await userService.insertUser(user);
  return res.status(201).json({ token });
};

const toLogin = async (
  req: Request,
  res: Response,
) => {
  const login = req.body as ILogin;
  const { status, data } = await userService.toLogin(login);

  return res.status(status).json(data);
};

const userController = {
  insertUser,
  toLogin,
};

export default userController;