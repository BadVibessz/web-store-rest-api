import { DatabaseService } from "./DatabaseService"
import { Cart } from "../entities/Cart"
import { User } from "../entities/User"
import { Product } from "../entities/Product"
import { CartItem } from "../entities/CartItem"


export class CartService{

    private readonly _db = new DatabaseService()

    async getAll(){
        return this._db.getAllCarts() 
    }

    async get(id: number){
        return (await this.getAll()).find(item => item.id == id)
    }

    async create(userId: number){

        const user = await this._db.getById("User", userId) as User
        if(!user) return false

        const cart = new Cart()
        cart.user = user
        cart.items = []

        this._db.saveCart(cart)
        return true
    }

    async update(cartId: number, newItems: CartItem[]){

        const cart = await this.get(cartId)
        if(!cart) return false

        cart.items = newItems

        this._db.updateCart(cart)
        return true
    }

    async addItem(cartId: number, productId: number){
        
        const cart = await this.get(cartId)
        if(!cart) return false

        const product = await this._db.getById("Product", productId) as Product
        if(!product) return false

        const item = new CartItem()
        item.product = product
        item.cart = cart

        cart.items.push(item)
        this._db.updateCart(cart)
        return true
    }

    async deleteItem(cartId: number, itemId: number){
        
        const cart = await this.get(cartId)
        if(!cart) return false

        const itemIndex = cart.items.findIndex( item => item.id == itemId )
        if(itemIndex == -1) return false

        cart.items.splice(itemIndex, 1) // remove item at index

        this._db.updateCart(cart)
        return true
    }


    async delete(id: number){

        let cartToRemove = await this._db.getById("Cart", id) as Cart

        if (!cartToRemove) 
            return false

        this._db.deleteCart(cartToRemove)
        return true
    }
}