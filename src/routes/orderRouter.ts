import { Router } from 'express';
import orderController from '../controllers/orderController';

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;