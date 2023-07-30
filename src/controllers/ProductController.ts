import { CRUDController } from "./CRUDController";
import { NextFunction, Request, Response } from "express"
import { ProductService } from "../services/ProductService";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

export class ProductController extends CRUDController{

    private readonly _productService = new ProductService()
    private readonly _authMiddleware = new AuthMiddleware()


    async getAll(request: Request, response: Response) {
        
        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})
        
            const products = await this._productService.getAll()
            return response.status(200).json({products: products})
        }
        catch(e){
            console.log(e)
            return response.status(401).json({message: "Something went wrong"})
        }
        
    }

    async get(request: Request, response: Response) {

        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const product = await this._productService.get(parseInt(request.params.id))
            return response.status(200).json({product: product})       
        }
        catch(e){
            console.log(e)
            return response.status(401).json({message: "Something went wrong"})
        }
         
    }
    
    async create(request: Request, response: Response) { // todo: return to client created product?

        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const {title, description, price} = request.body
                
            const created = await this._productService.create(title, description, price)
    
            if(!created) return response.status(400).json({message: "Product not created due to an error"})
            return response.status(200).json({message: "You have sucessfully created new product!", product: created})
        }
        catch(e){
            console.log(e)
            return response.status(401).json({message: "Something went wrong"})
        }

    }

    async update(request: Request, response: Response) {
        throw new Error("Method not implemented.");
    }

    async delete(request: Request, response: Response) {
        
        try{
            
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const deleted = await this._productService.delete(parseInt(request.params.id))
    
            if(!deleted) return response.status(400).json({message: "Product not deleted due to an error"})
            return response.status(200).json({message: "You have sucessfully deleted product!", product: deleted})
        }
        catch(e){
            console.log(e)
            return response.status(401).json({message: "Something went wrong"})
        }

    }

}