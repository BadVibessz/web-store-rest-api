import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Order } from "./entities/Order"
import { Product } from "./entities/Product"
import { OrderItem } from "./entities/OrderItem"
import { Cart } from "./entities/Cart"
import { CartItem } from "./entities/CartItem"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "gunna",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [User, Order, Product, OrderItem, Cart, CartItem],
    migrations: [],
    subscribers: [],
})
