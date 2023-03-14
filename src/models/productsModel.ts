import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProductToInsert, Product } from '../interfaces';

const createProduct = async (product: IProductToInsert): Promise<Product> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
};

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & Product[]>(query);
  return result;
}; // função montada com base no código da mentoria invertida do dia 8.3 realizada as 13hrs do dia 14/03/2023;

const productsModel = {
  createProduct,
  getAll,
};

export default productsModel;
