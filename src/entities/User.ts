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
