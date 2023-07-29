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