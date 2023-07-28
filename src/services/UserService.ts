import { CRUDService } from "./CRUDService";
import { DatabaseService } from "./DatabaseService";
import { genSaltSync, hashSync } from "bcryptjs"
import { User } from "../entity/User"




// todo: implement some interface?
export class UserService {

    private readonly _db = new DatabaseService()


    async getAll() {
        return await this._db.getAll("User")
    }


    async getById(id: number) {
        return await this._db.getUserById(id)
    }

    async getByEmail(email: string) {
        return this._db.getUserByEmail(email)
    }

    async create(firstName, lastName, email, password) {
    
        var user = await this._db.getUserByEmail(email)

        if(user) return false

        var salt = genSaltSync(5) // todo: how many rounds?
        var hashedPassword = hashSync(password, salt)

        user = new User()
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.password = hashedPassword

        await this._db.save(user)

        // validate creation TODO: necessary?

        return true
    }
    async update() {
       
    }
    async delete(id: number) {
       

        let userToRemove = await this._db.getUserById(id)

        if (!userToRemove) 
            return false

        await this._db.delete(userToRemove)

        // validate remove
        if(await this.getById(id))
            return false

        return true
    }


    
}