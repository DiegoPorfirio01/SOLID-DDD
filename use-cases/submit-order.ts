import { Order } from "../domain/purcheses/order";
import { OrdersRepository } from "../repositories/orders-repository";

interface SubmitOrderRequest {
  customerDocument: string;
  total:number;
}

export class SubmitOrder {
  //aqui vamos usar o conceito de inversão de depêndencia
  constructor(
    private ordersRepository: OrdersRepository)//ele cria a varíavel ao receber o parâmetro
  {
    //poderia usar o this.ordersRepository
    //mas vamos usar uma sintaxe sugar do ts, que é só colcoar o privite
  }

  async execute({customerDocument, total}: SubmitOrderRequest) {
    const order = new Order(total,customerDocument)

    //persistir no banco de dados
    await this.ordersRepository.create(order)
  }
}