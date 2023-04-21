import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

// aqui se implementa la lógica de los casos de uso como servicios
export class UserUseCase {
    
    constructor(private readonly userRepository:UserRepository){
        
    }
    
    public registerUser = async ({name, email, description}: {name:string, email:string, description?:string}) => {
        const userValue = new UserValue({name, email, description});
        // validate email
        if(await this.userRepository.findUserByEmail(email)) {
            return null;
        }

        return await this.userRepository.registerUser(userValue);
    }

    public getDetailUser = async (uuid: string) => {
        return await this.userRepository.findUserById(uuid);
    }

}