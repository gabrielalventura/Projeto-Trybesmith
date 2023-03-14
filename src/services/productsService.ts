import { IProductToInsert } from '../interfaces';
import productsModel from '../models/productsModel';

const insertProduct = async (product: IProductToInsert) => {
  const insertedProduct = await productsModel.createProduct(product);
  return insertedProduct;
};

const getAll = async (): Promise<Product[]> => {
  const products = await productsModel.getAll();
  return products;
};

const productsService = {
  insertProduct,
  getAll,
};

export default productsService;
