import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column("text")
    description: string

    @Column("real")
    price: number

}

/**
 * @openapi
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           default: product's title
 *         id:
 *           type: integer
 *           default: 1
 *         description:
 *           type: string
 *           default: product's description
 *         price:
 *           type: number
 *           default: 100
 * 
 *     createProduct:
 *       type: object
 * 
 *       required:
 *         - title
 *         - description
 *         - price
 * 
 *       properties:
 *         title:
 *           type: string
 *           default: product's title
 *         description:
 *           type: string
 *           default: product's description
 *         price:
 *           type: number
 *           default: 100
 * 
 *     updateProduct:
 *       type: object
 *       properties:
 *         newTitle:
 *           type: string
 *           default: new product's title
 *         newDescription:
 *           type: string
 *           default: new product's description
 *         newPrice:
 *           type: number
 *           default: 50
 *  */
