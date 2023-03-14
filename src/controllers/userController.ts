import { Request, Response } from 'express';
import { User } from '../interfaces';
import userService from '../services/userService';

const insertUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const token = await userService.insertUser(user);
  return res.status(200).json({ token });
};

const userController = {
  insertUser,
};

export default userController;