import { NextFunction, Request, Response } from "express"
import { CRUDController } from "./CRUDController"
import { UserService } from "../services/UserService"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"



export class UserController extends CRUDController {

    private readonly _userService = new UserService()
    private readonly _authMiddleware = new AuthMiddleware()

    async getAll(request: Request, response: Response) { 

        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})
                
            const users = await this._userService.getAll()
            return response.status(200).json({users: users})
        }
        catch(e){ 
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

    async get(request: Request, response: Response) {

        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const user = await this._userService.getById(parseInt(request.params.id))

            if (!user) 
                return response.status(400).json({message: "No such user"})
            return response.status(200).json({user: user})
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

    async create(request: Request, response: Response) {
        try{

            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const { firstName, lastName, email, password } = request.body;

            const created = await this._userService.create(firstName, lastName, email, password)
    
            if(!created) return response.status(400).json({message: "User with this email already exists"})
            return response.status(200).json({message: "You have sucessfully created new user!", user: created})

        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }
    }

    async update(request: Request, response: Response){
        try{

            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const id = request.params.id
            const { newFirstName, newLastName, newEmail, newPassword } = request.body;

            const updated = await this._userService.update(parseInt(id), newFirstName, newLastName, newEmail, newPassword)
    
            if(!updated) return response.status(400).json({message: "No such user"})
            return response.status(200).json({message: "You have sucessfully updated user!", user: updated})
        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }
    }

    async delete(request: Request, response: Response) {
        try{
            const authenticated = this._authMiddleware.authenticate(request, response)
            if(!authenticated)
                return response.status(401).json({message: "User unauthorized"})

            const id = parseInt(request.params.id)

            const deleted = await this._userService.delete(id)
            if (!deleted) 
                return response.status(400).json({message: "No such user"})

            return response.status(200).json({message: "User has been deleted", user: deleted})
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

}