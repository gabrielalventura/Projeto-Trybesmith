import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces';

const createUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  const insert = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return insert;
};

const userModel = {
  createUser,
};

export default userModel;
