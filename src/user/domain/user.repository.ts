import { UserEntity } from "./user.entity";
// servicios de dominio
export interface UserRepository {
    findUserById(uuid:string):Promise<UserEntity | null>;
    findUserByEmail(email:string):Promise<UserEntity | null>;
    registerUser(user:UserEntity):Promise<UserEntity | null>;
    listUsers():Promise<UserEntity[] | null>;
}