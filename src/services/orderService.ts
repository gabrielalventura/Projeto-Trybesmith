import orderModel from '../models/orderModel';

const getAllOrders = async () => {
  const list = await orderModel.getAllOrders();
  return { status: 200, list };
};

const orderService = {
  getAllOrders,
};

export default orderService;