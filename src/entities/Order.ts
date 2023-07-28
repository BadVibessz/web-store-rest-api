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
