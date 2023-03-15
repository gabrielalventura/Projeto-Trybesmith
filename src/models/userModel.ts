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

const findByUsername = async (username: string): Promise<User | null> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?;';
  const values = [username];

  const [data] = await connection.execute(query, values);
  const [user] = data as User[];

  return user || null;
};
// requisito elaborado com auxilio da atividade realizada no dia 8.3, repositorio: https://github.com/tryber/praticando-typescript-express/blob/main/atividade-1/src/models/userModel.ts;

const userModel = {
  createUser,
  findByUsername,
};

export default userModel;
