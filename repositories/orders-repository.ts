import { Order } from "../domain/purcheses/order";

export interface OrdersRepository {
  create(order:Order): Promise<void>;
}