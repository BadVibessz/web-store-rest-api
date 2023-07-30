import { type } from "os";
import { AppDataSource } from "../db-context";
import { User } from "../entities/User"
import { Product } from "../entities/Product";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";
import { Cart } from "../entities/Cart";
import { CartItem } from "../entities/CartItem";

export class DatabaseService{

    private readonly _userRepository = AppDataSource.getRepository(User)
    private readonly _productRepository = AppDataSource.getRepository(Product)
    private readonly _orderRepository = AppDataSource.getRepository(Order)
    private readonly _orderItemRepository = AppDataSource.getRepository(OrderItem)
    private readonly _cartRepository = AppDataSource.getRepository(Cart)
    private readonly _cartItemRepository = AppDataSource.getRepository(CartItem)



    getRepository(entityName: string){

        switch(entityName) { 
            case "User": return this._userRepository
            case "Product": return this._productRepository
            case "Order": return this._orderRepository
            case "OrderItem": return this._orderItemRepository
            case "Cart": return this._cartRepository
            case "CartItem": return this._cartItemRepository

            default: return null
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
    async getAllUsers(){
        return this._userRepository.find({ 
            relations: 
            ['orders',
            'orders.items',
            'orders.items.product',
            'carts',
            'carts.items',
            'carts.items.product',
            ] 
         }) 
    }

    async getUserById(id: number){
        return (await this.getAllUsers()).find(user => user.id == id)
    }

    async getUserByEmail(email: string){
        return (await this.getAllUsers()).find(user => user.email == email)
    }

    async saveUser(user: User){
        this._orderRepository.save(user.orders)
        return this._userRepository.save(user)
    }

    async updateUser(user: User){
        return this.saveUser(user)
    }

    async deleteUser(user: User){ // todo: try generic
        return this._userRepository.remove(user)
    }

    // order
    async getAllOrders(){
        return this._orderRepository.find({ 
            relations: 
            ['user',
            'items',
            'items.product'
            ] 
         }) 
    }

    async getOrder(id: number){
        return (await this.getAllOrders()).find(order => order.id == id)
    }

    async saveOrder(order: Order){
        this._orderItemRepository.save(order.items)
        return this._orderRepository.save(order)
    }

    async updateOrder(order: Order){
        return this.saveOrder(order)
    }

    async deleteOrder(order: Order){ // todo: try generic
        return this._orderRepository.remove(order)
    }

    // product
    async saveProduct(product: Product){
        return this._productRepository.save(product)
    }

    async updateProduct(product: Product){
        return this.saveProduct(product)    
    }

    async deleteProduct(product: Product){
        return this._productRepository.remove(product)
    }

    // cart
    async getAllCarts(){
        return this._cartRepository.find({ 
            relations: ['user','items', 'items.product'] 
         })
    }

    async getCart(id: number){
        return (await this.getAllCarts()).find(cart => cart.id == id)
    }

    async saveCart(cart: Cart){
        this._cartItemRepository.save(cart.items)
        return this._cartRepository.save(cart)
    }

    async updateCart(cart: Cart){ // typeorm provides updating by repo.save
        return this.saveCart(cart)
    }

    async deleteCart(cart: Cart){
        return this._cartRepository.remove(cart)
    }
}