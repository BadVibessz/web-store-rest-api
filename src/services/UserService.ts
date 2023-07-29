import { CRUDService } from "./CRUDService";
import { DatabaseService } from "./DatabaseService";
import { genSaltSync, hashSync } from "bcryptjs"
import { User } from "../entities/User"




// todo: implement some interface?
export class UserService {

    private readonly _db = new DatabaseService()


    async getAll() {
        return this._db.getAllUsers()
    }


    async getById(id: number) {
        return this._db.getUserById(id)
    }

    async getByEmail(email: string) {
        return this._db.getUserByEmail(email)
    }

    async create(firstName: string, lastName: string, email: string, password: string) {
    
        var user = await this._db.getUserByEmail(email)

        if(user) return false

        var salt = genSaltSync(5) // todo: how many rounds?
        var hashedPassword = hashSync(password, salt)

        user = new User()
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.password = hashedPassword

        this._db.saveUser(user)

        // validate creation TODO: necessary?

        return true
    }
    async update() {
       
    }
    async delete(id: number) {
       

        let userToRemove = await this._db.getById("User", id) as User

        if (!userToRemove) 
            return false

        this._db.deleteUser(userToRemove)

        // // validate remove
        // if(await this.getById(id))
        //     return false

        return true
    }


    
}