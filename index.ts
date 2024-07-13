import { PostgresOrdersRepository } from "./repositories/postgres/postgres-orders-repository";
import { SubmitOrder } from "./use-cases/submit-order";

const submitOrder = new SubmitOrder(
  new PostgresOrdersRepository(),
)

submitOrder.execute


//exemplo , a submit order vai saber que precisa usar a camada de persistência do postgres