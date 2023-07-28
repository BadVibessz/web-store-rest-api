import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from "typeorm"
import { Order } from "./Order"
import { Product } from "./Product"

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
    order: Order

    @OneToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn()
    product: Product

}
