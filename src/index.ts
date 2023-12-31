import express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./db-context"
import { Routes } from "./routes"
import swaggerDocs from "./swagger"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
           (new (route.controller as any))[route.action](req, res, next)
        })
    })
    
    // setup express app here
    // ...


    // start express server
    app.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

    swaggerDocs(app, 3000)

}).catch(error => console.log(error))
