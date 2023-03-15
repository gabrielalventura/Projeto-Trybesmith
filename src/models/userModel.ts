import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User, Ilogin } from '../interfaces';

const createUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  const insert = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return insert;
};

const toLogin = async (login: Ilogin): Promise<User[]> => {
  const { username } = login;

  const [rows] = await connection.execute<RowDataPacket[] & User[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?;',
    [username],
  );
  return rows;
};

const userModel = {
  createUser,
  toLogin,
};

export default userModel;
