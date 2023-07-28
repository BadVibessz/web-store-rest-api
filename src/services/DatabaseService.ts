import { type } from "os";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User"

export class DatabaseService{

    private readonly _userRepository = AppDataSource.getRepository(User)

    getRepository(entityName: string){

        switch(entityName) { 
            case "User": return AppDataSource.getRepository(User)
            

            default: { 
               //statements; 
               break; 
            } 
         }

    }

    // user TODO: try using generic types for 'get', 'getall', 'save', 'delete'
    async getAll(entityName: string){
        return this.getRepository(entityName).find()
    }

    async getUserById(id: number){
        return this._userRepository.findOneBy({id: id})
    }

    async getUserByEmail(email: string){
        return this._userRepository.findOneBy({email: email})
    }

    async save(entity){
        this.getRepository(entity.constructor.name).save(entity)
    }

    async delete(entity){
        this.getRepository(entity.constructor.name).remove(entity)
    }


}