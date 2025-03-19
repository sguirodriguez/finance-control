import {Request, Response} from 'express'
import { ICreateCategoryUseCase } from "./createCategory";

export class CreateCategoryController {
    constructor(private createCategoryUseCase: ICreateCategoryUseCase){}

    public static build(createCategoryUseCase: ICreateCategoryUseCase){
        return new CreateCategoryController(createCategoryUseCase)
    }

    async handle(request: Request, response: Response){
        const { name, type } =request.body
        try {
            await this.createCategoryUseCase.execute({ name, type })
            response.status(201).json({ status: 'ok' })
        } catch (error) {
            throw new Error('error on create category')
        }
    }
}