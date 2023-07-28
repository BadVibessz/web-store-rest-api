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

        this._db.saveProduct(product)
        return true
    }

    async update(){

    }

    async delete(id: number){

        let productToRemove = await this._db.getById("Product", id) as Product

        if (!productToRemove) 
            return false

        this._db.deleteProduct(productToRemove)
        return true
    }
}