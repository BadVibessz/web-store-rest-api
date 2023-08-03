import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from "typeorm"
import { Product } from "./Product"
import { Cart } from "./Cart"

@Entity()
export class CartItem {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
    cart: Cart

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn()
    product: Product
}

/**
 * @openapi
 * components:
 *   schemas:
 *     cartItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         product:
 *           $ref: '#/components/schemas/product'
 *     createCartItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           default: 1
 * 
 *     deleteCartItem:
 *       type: object
 *       properties:
 *         itemId:
 *           type: integer
 *           default: 1
 * 
 */
