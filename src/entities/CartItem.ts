import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from "typeorm"
import { Product } from "./Product"
import { Cart } from "./Cart"

@Entity()
export class CartItem {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
    cart: Cart

    @OneToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn()
    product: Product

}
