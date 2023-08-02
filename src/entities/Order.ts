import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { OrderItem } from "./OrderItem"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column("timestamptz")
    timeStamp: Date;
 
    @Column("text")
    details: string

    @ManyToOne(() => User, (user) => user.orders, { onDelete: 'CASCADE' })
    user: User

    @OneToMany(() => OrderItem, (item) => item.order)
    items: OrderItem[]

}

/**
 * @openapi
 * components:
 *   schemas:
 *     createOrder:
 *       type: object
 *       required:
 *         - cartId
 *       properties:
 *         cartId: 
 *           type: integer 
 *           default: 1
 * 
 *     usersOrderOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         timestamp:
 *           type: string
 *         details:
 *           type: string
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/orderItem'
 */
