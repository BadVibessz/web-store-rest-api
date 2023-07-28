import exp = require("constants")
import * as jwt from "jsonwebtoken"
const {secret} = require("../../config")

export namespace JwtUtils{

    export function generateToken(payload, options){
        return jwt.sign(payload,secret,options)
    }

    export function verifyToken(token: string){
        return jwt.verify(token, secret)
    }

}