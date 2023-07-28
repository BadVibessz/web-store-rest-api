import { NextFunction, Request, Response } from "express"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"

export abstract class CRUDController{


    abstract getAll(request: Request, response: Response)
    abstract get(request: Request, response: Response)
    abstract create(request: Request, response: Response)
    abstract update(request: Request, response: Response)
    abstract delete(request: Request, response: Response)

    
}