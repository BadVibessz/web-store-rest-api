import { OrderItemDTO } from "./OrderItemDTO";
import { UserDTO } from "./UserDTO";

export class OrderDTO {
    constructor(
        public details: string,
        public user: UserDTO,
        public items: OrderItemDTO
        ) {}
  }