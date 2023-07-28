import { OrderDTO } from "../dtos/OrderDTO";
import { Order } from "../entities/Order";
import { DatabaseService } from "./DatabaseService";


export class OrderService{

    private readonly _db = new DatabaseService()

    async getAll(){
        return this._db.getAll("Order")
    }

    async get(id: number){
        return this._db.getById("Order", id)
    }

    async create(order: Order){
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