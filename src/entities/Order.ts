import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { OrderItem } from "./OrderItem"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column("timestamptz")
    timeStamp: Date;
 
    @Column("text",{nullable: true })
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
 *         details: 
 *           type: string 
 *           default: some details provided
 * 
 *     usersOrderOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           default: 1
 *         timestamp:
 *           type: string
 *         details:
 *           type: string
 *           default: some details for order provided
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/orderItem'
 * 
 * 
 *     updateOrder:
 *       type: object
 *       properties:
 *         newDetails: 
 *           type: string 
 *           default: new details
 * 
 *     order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         user:
 *           $ref: '#/components/schemas/userSimplified'
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/orderItem'
 */
