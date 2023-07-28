import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { OrderItem } from "./OrderItem"


@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.orders, { onDelete: 'CASCADE' })
    user: User

    @OneToMany(() => OrderItem, (item) => item.order)
    items: OrderItem[]

    
}