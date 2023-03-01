import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

// aqui se implementa la lógica de los casos de uso
export class UserUseCase {
    constructor(private readonly userRepository:UserRepository){
        
    }
    
    public registerUser = async ({name, email, description}: {name:string, email:string, description?:string}) => {
        const userValue = new UserValue({name, email, description});
        // validate email
        if(!(await this.userRepository.findUserByEmail(email))) {
            return await this.userRepository.registerUser(userValue);
        }
        return null;
    }

    public getDatailUser = async (uuid: string) => {
        const user = await this.userRepository.findUserById(uuid);
        return user;
    }

}