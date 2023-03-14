import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.insertProduct);
productsRouter.get('/', productsController.getAll);

export default productsRouter;