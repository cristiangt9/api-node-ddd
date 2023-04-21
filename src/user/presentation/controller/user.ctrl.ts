import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase.service";
let helper = require("../helpers/helpers.ts");

export class UserController {

    constructor(private userUseCase: UserUseCase){

    }

    public insertUser = async ({body}: Request, res: Response) => {
        try {
            const user = await this.userUseCase.registerUser(body);

            res.send(helper.defaultResponse(!!user, user));
        } catch (error) {
            res.send(helper.defaultResponseError(error));
        }
    };

    public getUser = async (req: Request, res: Response) => {
        try {
            const { uuid = '' } = req.params;
            const user = await this.userUseCase.getDetailUser(`${uuid}`);

            res.send(helper.defaultResponse(!!user, user));
        } catch (error) {
            res.send(helper.defaultResponseError(error));
        }
    }
}
