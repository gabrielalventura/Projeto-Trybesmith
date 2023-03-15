import jwt, { SignOptions } from 'jsonwebtoken';
import { User, Ilogin } from '../interfaces';
import userModel from '../models/userModel';
import HttpException from '../shared/http.exception';

const JWT_SECRET = process.env.JWT_SECRET || 'aerosmith';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '20m',
};

const generateToken = (payload: User) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
// funções para criação do token desenvolvida a partir do código da aula 8.3 do módulo de back-end disponivel em: https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/8.3/src/services/user.service.ts;

const insertUser = async (user: User): Promise<string> => {
  await userModel.createUser(user);
  const token = generateToken(user);
  return token;
};

const toLogin = async (login: Ilogin) => {
  const users = await userModel.toLogin(login);
  if (users.length === 0 || users[0].password !== login.password) {
    throw new HttpException(401, 'Username or password invalid');
  }
  return generateToken(users[0]);
};

const userService = {
  insertUser,
  toLogin,
};

export default userService;