import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS 'productsIds'
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id;`,
  );
  return orders;
};
// função elaborada com auxilio da Maria Luiza Suhadolnik;

const orderModel = {
  getAllOrders,
};

export default orderModel;