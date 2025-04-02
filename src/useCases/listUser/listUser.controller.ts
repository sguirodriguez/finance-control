import { IListUserUseCase } from "./listUser";
import {Request, Response} from "express"

class ListUserController{
    constructor(
        private readonly listUserUseCase: IListUserUseCase
    ){}

    public static build(listUserUseCase: IListUserUseCase){
        return new ListUserController(listUserUseCase)
    }

    async handle(_request: Request, response: Response){
        try {
            const result = await this.listUserUseCase.execute()

            return response.status(200).json({result})
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}

export default ListUserController