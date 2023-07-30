import { Request, Response } from "express"

export abstract class CRUDController{

    abstract getAll(request: Request, response: Response)
    abstract get(request: Request, response: Response)
    abstract create(request: Request, response: Response)
    abstract update(request: Request, response: Response)
    abstract delete(request: Request, response: Response)
}