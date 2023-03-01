import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import { UserValue } from "../../domain/user.value";
import UserModel from "../model/user.schema";

export class MongoRepository implements UserRepository {
    async findUserByEmail(email: string): Promise<UserEntity | null> {
        const user = await UserModel.findOne({email});
        return user;
    }
    async findUserById(uuid: string): Promise<UserEntity | null> {
        const user = await UserModel.findOne({uuid});
        return user;
    }
    async registerUser(userIn: UserEntity): Promise<UserEntity | null> {
        const user = await UserModel.create(userIn);
        return user;
    }
    async listUser(): Promise<UserEntity[] | null> {
        const users = await UserModel.find();
        return users;
    }

}