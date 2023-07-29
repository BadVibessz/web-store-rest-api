import { CRUDController } from "./CRUDController";
import { Request, Response } from "express"
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { CartService } from "../services/CartService";

export class CartController extends CRUDController{

    private readonly _authMiddleware = new AuthMiddleware()
    private readonly _cartService = new CartService()

    async getAll(request: Request, response: Response) { // todo: authorize user (user cannot get cart's he doesn't own)
       
        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const carts = await this._cartService.getAll()
            return response.status(200).json({carts: carts})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }

    }

    async get(request: Request, response: Response) {
        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const cart = await this._cartService.get(parseInt(request.params.id))
            return response.status(200).json({cart: cart})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }

    }

    async create(request: Request, response: Response) {
        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const userId = request.body.userId
        
            const success = await this._cartService.create(userId)
            if(!success) return response.status(400).json({message: "Something went wrong"})

            return response.status(200).json({message: "You have sucessfully crated new cart!"})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }
    }

    async update(request: Request, response: Response) {

        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const {cartId, newItems} = request.body
        
            const success = await this._cartService.update(cartId, newItems)
            if(!success) return response.status(400).json({message: "Something went wrong"})

            return response.status(200).json({message: "You have sucessfully updated cart!"})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }
    }

    async addItem(request: Request, response: Response){

        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const cartId = parseInt(request.params.cartId)
            const productId = parseInt(request.body.productId)
        
            const success = await this._cartService.addItem(cartId, productId)
            if(!success) return response.status(400).json({message: "No such product"})

            return response.status(200).json({message: "You have sucessfully updated cart!"})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }

    }

    async deleteItem(request: Request, response: Response){
        try{
            const authenticated = this._authMiddleware.authenticate(request, request)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const cartId = parseInt(request.params.id)
            const itemId = parseInt(request.body.itemId)
        
            const success = await this._cartService.deleteItem(cartId, itemId)
            if(!success) return response.status(400).json({message: "No such item"})

            return response.status(200).json({message: "You have sucessfully updated cart!"})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }
    }

    async delete(request: Request, response: Response) {
        throw new Error("Method not implemented.");
    }



}