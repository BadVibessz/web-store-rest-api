import { CRUDController } from "./CRUDController";
import { Request, Response } from "express"
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { OrderService } from "../services/OrderService";



export class OrderController extends CRUDController{

    private readonly _orderService = new OrderService()
    private readonly _authMiddleware = new AuthMiddleware()

    async getAll(request: Request, response: Response) {
        
        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const orders = await this._orderService.getAll()
            return response.status(200).json({orders: orders})
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

    async get(request: Request, response: Response) {
        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const order = await this._orderService.get(parseInt(request.params.id))
            return response.status(200).json({order: order})
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

    async create(request: Request, response: Response) {
        
        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const {cartId, details} = request.body

            const order = await this._orderService.create(parseInt(cartId), details)
            if(!order) return response.status(400).json({message: "No such cart"})

            return response.status(200).json({message: "You have sucessfully crated new order!", order : order})
 
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }


    }

    async update(request: Request, response: Response) {
        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const id = request.params.id
            const newDetails = request.body.newDetails

            const updated = await this._orderService.update(parseInt(id), newDetails)
            if(!updated) return response.status(400).json({message: "No such order"})

            return response.status(200).json({message: "You have sucessfully updated order!", order : updated})
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

    async delete(request: Request, response: Response) {
        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated) return response.status(401).json({message: "User unauthorized"})

            const id = request.body.id

            const order = await this._orderService.delete(parseInt(id))
            if(!order) return response.status(400).json({message: "No such order"})

            return response.status(200).json({message: "You have sucessfully deleted order!", order : order})

        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }



}
