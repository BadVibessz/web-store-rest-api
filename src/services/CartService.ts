import { DatabaseService } from "./DatabaseService"
import { Cart } from "../entities/Cart"
import { OrderItem } from "../entities/OrderItem"
import { it } from "node:test"
import { Order } from "../entities/Order"


export class CardService{

    private readonly _db = new DatabaseService()

    async getAll(){
        return this._db.getAll("Cart")
    }

    async get(id: number){
        return this._db.getById("Cart", id)
    }

    async create(cart: Cart){
        this._db.saveCart(cart)
        return true
    }

    async update(cart: Cart){
        this._db.updateCart(cart)
        return true
    }

    async addItem(cart: Cart, item: OrderItem){
        cart.items.push(item)
        this.update(cart)
        return true
    }

    async makeOrder(cart: Cart, details: string){ //todo: ???

        // todo: provide adress
        const order = new Order()
        order.details = details
        order.items = cart.items
        order.user = cart.user
        order.timeStamp = new Date()

        return order
    }

    async delete(id: number){

        let cartToRemove = await this._db.getById("Cart", id) as Cart

        if (!cartToRemove) 
            return false

        this._db.deleteCart(cartToRemove)
        return true
    }
}