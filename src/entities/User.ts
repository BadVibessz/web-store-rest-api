import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Order } from "./Order"
import { Cart } from "./Cart"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column({
        nullable: true
    })
    lastName: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[]
}

/**
 * @openapi
 * components:
 *   schemas:
 *     createUser:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *       properties:
 *         firstName: 
 *           type: string 
 *           default: firstName
 *         lastName: 
 *           type: string 
 *           default: lastName
 *         email: 
 *           type: string 
 *           default: youremail@example.com
 *         password: 
 *           type: string 
 *           default: yourpassword   
 * 
 *     user:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           default: 1
 *         firstName: 
 *           type: string 
 *           default: firstName
 *         lastName: 
 *           type: string 
 *           default: lastName
 *         email: 
 *           type: string 
 *           default: email@example.com
 *         password: 
 *           type: string 
 *           default: hashedpassword
 *         carts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/usersCartOutput'
 *         orders:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/usersOrderOutput'
 * 
 *     updateUser:
 *       type: object
 *       properties:
 *         firstName: 
 *           type: string 
 *           default: newFirstName
 *         lastName: 
 *           type: string 
 *           default: newLastName
 *         email: 
 *           type: string 
 *           default: newemail@example.com
 *         password: 
 *           type: string 
 *           default: newpassword   
 * 
 *     userSimplified:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           default: 1
 *         firstName: 
 *           type: string 
 *           default: firstName
 *         lastName: 
 *           type: string 
 *           default: lastName
 *         email: 
 *           type: string 
 *           default: email@example.com
 *         password: 
 *           type: string 
 *           default: hashedpassword   
 */
