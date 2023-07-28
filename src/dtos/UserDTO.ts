import { OrderDTO } from "./OrderDTO";

export class UserDTO {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public orders: OrderDTO[]
        ) {}
  }