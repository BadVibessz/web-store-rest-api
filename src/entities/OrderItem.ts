import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from "typeorm"
import { Order } from "./Order"
import { Product } from "./Product"

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
    order: Order

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn()
    product: Product

}

/**
 * @openapi
 * components:
 *   schemas:
 *     orderItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         product:
 *           $ref: '#/components/schemas/product'
 */
