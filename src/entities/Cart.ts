import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { OrderItem } from "./OrderItem"
import { CartItem } from "./CartItem"


@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.orders, { onDelete: 'CASCADE' })
    user: User

    @OneToMany(() => CartItem, (item) => item.cart)
    items: CartItem[]
}


/**
 * @openapi
 * components:
 *   schemas:
 *     createCart:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId: 
 *           type: integer 
 *           default: 1
 * 
 *     usersCartOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/cartItem'
 */