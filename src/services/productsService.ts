import { IProductToInsert } from '../interfaces';
import productsModel from '../models/productsModel';

const insertProduct = async (product: IProductToInsert) => {
  const insertedProduct = await productsModel.createProduct(product);
  return insertedProduct;
};

const productsService = {
  insertProduct,
};

export default productsService;
