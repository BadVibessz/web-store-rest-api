import { type } from "os";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User"
import { Product } from "../entities/Product";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";

export class DatabaseService{

    private readonly _userRepository = AppDataSource.getRepository(User)
    private readonly _productRepository = AppDataSource.getRepository(Product)
    private readonly _orderRepository = AppDataSource.getRepository(Order)
    private readonly _orderItemRepository = AppDataSource.getRepository(OrderItem)


    getRepository(entityName: string){

        switch(entityName) { 
            case "User": return this._userRepository
            case "Product": return this._productRepository
            case "Order": return this._orderRepository
            case "OrderItem": return this._orderItemRepository

            //case "User": return AppDataSource.getRepository(User)
            //case "Product": return AppDataSource.getRepository(Product)
            // case "Order": return AppDataSource.getRepository(Order)
            // case "OrderItem": return AppDataSource.getRepository(OrderItem)

            

            default: { 
               //statements; 
               break; 
            } 
         }

    }

    // todo: try using generic types for 'get', 'getall', 'save', 'delete'
    async getAll(entityName: string){
        return this.getRepository(entityName).find()
    }

    async getById(entityName: string, id: number){
        return this.getRepository(entityName).findOneBy({id: id})
    }


    // user
    async getUserByEmail(email: string){
        return this._userRepository.findOneBy({email: email})
    }

    async saveUser(user: User){
        this._orderRepository.save(user.orders)
        this._userRepository.save(user)
    }

    async updateUser(user: User){
        // todo
    }

    async deleteUser(user: User){ // todo: try generic
        this._userRepository.remove(user)
    }

    // order
    async saveOrder(order: Order){
        this._orderRepository.save(order)
    }

    async updateOrder(order: Order){
        // todo
    }

    async deleteOrder(order: Order){ // todo: try generic
        this._orderRepository.remove(order)
    }

    // product
    async saveProduct(product: Product){
        this._productRepository.save(product)
    }

    async updateProduct(product: Product){
        // todo
    }

    async deleteProduct(product: Product){
        this._productRepository.remove(product)
    }

}