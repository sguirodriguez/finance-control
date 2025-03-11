import { DeleteUser } from "./deleteUser";
import { Request, Response } from 'express'

export class DeleteUserController {
    private constructor(private deleteUserUseCase: DeleteUser) { }

    public static build(deleteUserUseCase: DeleteUser) {
        return new DeleteUserController(deleteUserUseCase);
    }
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        try {
            const result = this.deleteUserUseCase.execute(id)

            return response.status(200).json(result)
        } catch (error) {
            throw new Error('Error on delete user')
        }
    }
}