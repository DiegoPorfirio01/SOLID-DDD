export class Order {
  public total: number;
  public createdAt: Date;
  public customerDocument: string;

  constructor(total: number, customerDocument:string) {
    this.total;
    this.createdAt = new Date();
    this.customerDocument
  }
}