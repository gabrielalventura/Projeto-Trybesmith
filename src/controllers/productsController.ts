import { Request, Response } from 'express';
import { IProductToInsert } from '../interfaces';
import productsService from '../services/productsService';

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body as IProductToInsert;
  const newProduct = await productsService.insertProduct(product);
  return res.status(201).json(newProduct);
};

const productsController = {
  insertProduct,
};

export default productsController;
