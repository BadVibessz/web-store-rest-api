import { NextFunction, Request, Response } from "express"
import {JwtUtils} from "../utils/JwtUtils"



export class AuthMiddleware{

    authenticate(request: Request, response: Response, next: NextFunction){

        try{

            const token: string = request.headers.authorization.split(' ')[1]
            if(!token) return false

            const decodedData = JwtUtils.verifyToken(token)
            request.user = decodedData
            next
            return true

        }
        catch(e){
            console.log(e)
            return false
        }

    }

}