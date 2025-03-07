import { Request, Response } from "express";
import { CreateUser } from "./createUser";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUser,
    ) { }

    public static build(createUserUseCase: CreateUser) {
        return new CreateUserController(createUserUseCase)
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, birthOfDate } = request.body;

        try {
            const user = await this.createUserUseCase.execute({
                name, email, password, birthOfDate
            })

            return response.status(201).json({ user });
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}