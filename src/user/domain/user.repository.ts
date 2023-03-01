import { UserEntity } from "./user.entity";
// servicios de dominio
export interface UserRepository {
    findUserById(uuid:string):Promise<UserEntity | null>;
    findUserByEmail(uuid:string):Promise<UserEntity | null>;
    registerUser(user:UserEntity):Promise<UserEntity | null>;
    listUser():Promise<UserEntity[] | null>;
}