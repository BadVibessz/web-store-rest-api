import { Cart } from "../entities/Cart";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";
import { DatabaseService } from "./DatabaseService";


export class OrderService{

    private readonly _db = new DatabaseService()

    async getAll(){
        return this._db.getAll("Order") as Promise<Order[]>
    }

    async get(id: number) {
        return this._db.getById("Order", id) as Promise<Order>
    }

    async create(cartId: number, details: string){

        const cart = await this._db.getById("Cart", cartId) as Cart

        // todo: provide adress
        const order = new Order()
        order.details = details

        const orderItems: OrderItem[] = []

        cart.items.forEach(item => {
            const orderItem = new OrderItem()
            orderItem.product = item.product
            orderItem.order = order
            
            orderItems.push(orderItem)
        })

        order.items = orderItems
        order.user = cart.user
        order.timeStamp = new Date()

        this._db.saveOrder(order)
        return true
    }

    async update(){

    }

    async delete(id: number){

        let orderToRemove = await this._db.getById("Order", id) as Order

        if (!orderToRemove) 
            return false

        this._db.deleteOrder(orderToRemove)
        return true
    }

}