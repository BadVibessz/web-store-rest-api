import {  Request, Response } from "express"
import { compareSync } from "bcryptjs"
import { UserService } from "../services/UserService"
import {JwtUtils} from "../utils/JwtUtils"


export class AuthController{ //todo: call authService?

    private readonly _userService = new UserService()

    // todo: isolate db acess, todo: stop code copying (userController.create())
    async register(request: Request, response: Response){

        try{

            // todo: validate user's input

            const {firstName, lastName, email, password} = request.body

            const success = await this._userService.create(firstName,lastName,email,password)
            
            if(success) return response.status(200).json({message: "You have sucessfully registered!", user: success})
            return response.status(400).json({message: "User with this email already exists"})
        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }
    }

    async login(request: Request, response: Response){ // todo: use dto

        try{

             // todo: prevent code copying, make function (serivce?) and use in userController and here
        const {email, password} = request.body

        const user = await this._userService.getByEmail(email)
        if (!user) return response.status(400).json({message: "No such user"})

        if(!compareSync(password, user.password))
            return response.status(400).json({message: "Incorrect password"})

        const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email}

        const options = {expiresIn: "7d"}

        const token = JwtUtils.generateToken(payload, options)
        return response.status(200).json({token: token})

        }
        catch(e){
            console.log(e)
            return response.status(500).json({message: "Something went wrong"})
        }

       
    }

}