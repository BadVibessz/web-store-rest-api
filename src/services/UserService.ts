import { DatabaseService } from "./DatabaseService";
import { genSaltSync, hashSync } from "bcryptjs"
import { User } from "../entities/User"

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
        if(user) return null

        var salt = genSaltSync(5) // todo: how many rounds?
        var hashedPassword = hashSync(password, salt)

        user = new User()
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.password = hashedPassword
        user.orders = []
        user.carts = []

        return this._db.saveUser(user)
    }
    async update(id: number, newFirstName: string, newLastName: string, newEmail: string, newPassword) {

        const user = await this._db.getUserById(id)
        if(!user) return null

        var hashedPassword: string = null
        if(newPassword){
            var salt = genSaltSync(5) // todo: how many rounds?
            hashedPassword = hashSync(newPassword, salt)
        }

        user.firstName = newFirstName ?? user.firstName
        user.lastName = newLastName ?? user.lastName
        user.email = newEmail ?? user.email
        user.password = hashedPassword ?? user.password

        return this._db.updateUser(user)
    }
    async delete(id: number) {

        let userToRemove = await this._db.getById("User", id) as User
        if (!userToRemove) return false

        return this._db.deleteUser(userToRemove)
    }


    
}