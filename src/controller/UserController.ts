import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { CRUDController } from "./CRUDController"
import { UserService } from "../services/UserService"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"


export class UserController extends CRUDController {

    private readonly _userService = new UserService()
    private readonly _authMiddleware = new AuthMiddleware()

    authenticate(request: Request, response: Response, next: NextFunction){
        const authenticated = this._authMiddleware.authenticate(request, request, next)

        if(!authenticated)
            return response.status(401).json({message: "User unauthorized"})
    }

    async getAll(request: Request, response: Response, next: NextFunction) { 

        this.authenticate(request,response,next)

        const users = await this._userService.getAll()
        return response.status(200).json({users: users})
    }

    async get(request: Request, response: Response, next: NextFunction) {

        this.authenticate(request,response,next)

        const user = await this._userService.getById(parseInt(request.body.id))

        if (!user) 
            return response.status(400).json({message: "No such user"})
        
        return response.status(200).json({user: user})
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try{

            this.authenticate(request,response,next)

            const { firstName, lastName, email, password } = request.body;

            const success = await this._userService.create(firstName, lastName, email, password)
    
            if(!success) return response.status(400).json({message: "User with this email already exists"})
            return response.status(200).json({message: "You have sucessfully created new user!"})

        }
        catch(e){
            console.log(e)
            return response.status(400).json({message: "Something went wrong"})
        }
    }

    async update(request: Request, response: Response, next: NextFunction){

        // todo
    }

    async delete(request: Request, response: Response, next: NextFunction) {

        this.authenticate(request,response,next)

        const id = parseInt(request.params.id)

        const success = await this._userService.delete(id)
        if (!success) 
            return response.status(400).json({message: "No such user"})

        return response.status(200).json({message: "User has been deleted"})
    }

}