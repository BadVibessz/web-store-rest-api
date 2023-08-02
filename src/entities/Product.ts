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
 *         id:
 *           type: integer
 *         description:
 *           type: string
 *         price:
 *           type: number
 * 
 *  */
