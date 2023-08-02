import { Cart } from "../entities/Cart";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";
import { DatabaseService } from "./DatabaseService";


export class OrderService{

    private readonly _db = new DatabaseService()

    async getAll(){
        return this._db.getAllOrders() as Promise<Order[]>
    }

    async get(id: number) {
        return this._db.getOrder(id) as Promise<Order>
    }

    async create(cartId: number, details: string){

        const cart = await this._db.getCart(cartId) as Cart
        if(!cart) return null

        // todo: provide adress
        var order = new Order()
        order.details = details
        order.user = cart.user
        order.timeStamp = new Date()
        order.items = []

        order = await this._db.saveOrder(order)

        cart.items.forEach(item => {

            const orderItem = new OrderItem()
            orderItem.product = item.product
            orderItem.order = order
            
            order.items.push(orderItem)
        })

        order = await this._db.updateOrder(order);
        order.items.forEach( item =>{ // avoid circular dependency (json.stringify error)
            item.order = null
        })

        // delete cart
        await this._db.deleteCart(await this._db.getById("Cart", cartId) as Cart)

        return order
    }

    async update(id: number, newDetails: string){

        const order = await this._db.getOrder(id)
        if(!order) return null

        order.details = newDetails ?? order.details

        return this._db.updateOrder(order)
    }

    async delete(id: number){

        let orderToRemove = await this._db.getOrder(id)

        if (!orderToRemove) 
            return null

        orderToRemove = await this._db.deleteOrder(orderToRemove)
        orderToRemove.items.forEach( item =>{
            item.order = null
        })

        return orderToRemove
    }

}