import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

const MOCK_USER = {
    uuid: '0001-001-001',
    name: 'Cristian Gonzalez',
    description: 'Descripcion de prueba',
    email: 'cristiangt9@gmail.com',
};

export class MockRepository implements UserRepository {
    async findUserByEmail(email: string): Promise<UserEntity | null> {
        const user = MOCK_USER;
        return user;
    }
    async findUserById(uuid: string): Promise<UserEntity | null> {
        const user = MOCK_USER;
        return user;
    }
    async registerUser(userIn: UserEntity): Promise<UserEntity | null> {
        const user = MOCK_USER;
        return user;
    }
    async listUsers(): Promise<UserEntity[] | null> {
        const users = [MOCK_USER,MOCK_USER,MOCK_USER];
        return users;
    }  

}