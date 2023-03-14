export interface IProductToInsert {
  name: string;
  amount: string;
}

export interface Product extends IProductToInsert {
  id: number,
}
