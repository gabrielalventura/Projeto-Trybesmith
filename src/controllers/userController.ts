import { Request, Response } from 'express';
import { Ilogin, User } from '../interfaces';
import userService from '../services/userService';

const insertUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const token = await userService.insertUser(user);
  return res.status(201).json({ token });
};

const toLogin = async (
  req: Request<object, object, Ilogin>,
  res: Response,
) => {
  const { body } = req;
  const token = await userService.toLogin(body);
  return res.status(200).json({ token });
};

const userController = {
  insertUser,
  toLogin,
};

export default userController;