import { v4 as uuid } from 'uuid';
import { UserEntity } from "./user.entity";

//objeto de valor
export class UserValue implements UserEntity {
    name: string;
    email: string;
    description: string;
    uuid: string;

    constructor({name, email, description}:{name:string, email:string, description?:string}) {
        this.uuid = uuid();
        this.name = name;
        this.email = email;
        this.description = description ?? "default";
    }

    // __get (name) {
    //     return undefined;
    // }
}