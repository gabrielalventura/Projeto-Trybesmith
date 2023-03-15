import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAllOrders = async (_req: Request, res: Response) => {
  const { status, list } = await orderService.getAllOrders();
  return res.status(status).json(list);
};

const orderController = {
  getAllOrders,
};

export default orderController;