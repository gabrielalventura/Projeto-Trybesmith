import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProductToInsert, Product } from '../interfaces';

const createProduct = async (product: IProductToInsert): Promise<Product> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
};

const productsModel = {
  createProduct,
};

export default productsModel;
