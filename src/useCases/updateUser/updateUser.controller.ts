import { UpdateUser } from "./updateUser";
import { Request, Response } from "express";

export class UpdateUserController {
    private constructor(private readonly updateUserUseCase: UpdateUser) { }

    public static build(updateUserUseCase: UpdateUser) {
        return new UpdateUserController(updateUserUseCase)
    }

    async handle(request: Request, response: Response) {
        const { id, name, email, password, birthOfDate } = request.body

        try {
            const updatedUser = this.updateUserUseCase.execute({ id, name, email, password, birthOfDate })
            return response.status(200).json({ updatedUser })
        } catch (error) {
            throw new Error('error on update User')
        }
    }
}