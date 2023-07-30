import { Product } from "../entities/Product"
import { DatabaseService } from "./DatabaseService"


export class ProductService{

    private readonly _db = new DatabaseService()


    async getAll(){
        return this._db.getAll("Product")
    }

    async get(id: number){
        return this._db.getById("Product", id)
    }

    async create(title: string, description: string, price: number){

        const product = new Product()
        product.title = title
        product.description = description
        product.price = price

        return this._db.saveProduct(product)
    }

    async update(id: number, newTitle: string, newDescription: string, newPrice: number){

        const product = await this.get(id) as Product
        if(!product) return null

        product.title = newTitle ?? product.title
        product.description = newDescription ?? product.description
        product.price = newPrice ?? product.price

        return this._db.updateProduct(product)
    }

    async delete(id: number){

        let productToRemove = await this._db.getById("Product", id) as Product
        if (!productToRemove) 
            return null

        return this._db.deleteProduct(productToRemove)
    }
}