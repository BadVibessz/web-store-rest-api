import { OrderDTO } from "./OrderDTO";
import { ProductDTO } from "./ProductDTO";


export class OrderItemDTO {
    constructor(
        public order: OrderDTO,
        public product: ProductDTO,
        ) {}
  }