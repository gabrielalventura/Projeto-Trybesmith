export interface IProductToInsert {
  name: string;
  amount: string;
}

export interface Product extends IProductToInsert {
  id: number,
  orderId?: Array<number>,
}

export interface User {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface ILogin {
  username: string;
  password: string;
}