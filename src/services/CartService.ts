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
        if(!user) return null

        const cart = new Cart()
        cart.user = user
        cart.items = []
        
        return this._db.saveCart(cart)
    }

    async update(cartId: number, newItems: CartItem[]){ // todo:

        const cart = await this.get(cartId)
        if(!cart) return null

        cart.items = newItems

        return this._db.updateCart(cart)
    }

    async addItem(cartId: number, productId: number){
        
        var cart = await this.get(cartId)
        if(!cart) return null

        const product = await this._db.getById("Product", productId) as Product
        if(!product) return null

        const item = new CartItem()
        item.product = product
        item.cart = cart

        cart.items.push(item)
        
        cart = await this._db.updateCart(cart)
        cart = await this._db.getCart(cart.id)

        // cart.items.forEach(item =>{
        //     item.cart = null // avoid circular dependency (json.stringify error)
        // })

        return cart
    }

    async deleteItem(cartId: number, itemId: number){
        
        const cart = await this.get(cartId)
        if(!cart) return null

        const itemIndex = cart.items.findIndex( item => item.id == itemId )
        if(itemIndex == -1) return null

        cart.items.splice(itemIndex, 1) // remove item at index

        return this._db.updateCart(cart)
    }


    async delete(id: number){

        let cartToRemove = await this._db.getCart(id)
        if (!cartToRemove) return null
        
        if(!this._db.deleteCart(cartToRemove)) return null
        return cartToRemove
    }
}