import { NextFunction, Request, Response } from "express"


export abstract class CRUDController{

    abstract getAll(request: Request, response: Response, next: NextFunction)
    abstract get(request: Request, response: Response, next: NextFunction)
    abstract create(request: Request, response: Response, next: NextFunction)
    abstract update(request: Request, response: Response, next: NextFunction)
    abstract delete(request: Request, response: Response, next: NextFunction)
}