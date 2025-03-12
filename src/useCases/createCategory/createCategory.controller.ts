import {Request, Response} from 'express'
import { ICreateCategoryUseCase } from "./createCategory";

export class CreateCategoryController {
    constructor(private createCategoryUseCase: ICreateCategoryUseCase){}

    public static build(createCategoryUseCase: ICreateCategoryUseCase){
        return new CreateCategoryController(createCategoryUseCase)
    }

    async handle(request: Request, response: Response){
        const { id, name, type } =request.body
        try {
            const result = this.createCategoryUseCase.execute({ id, name, type })
            response.status(201).json(result)
        } catch (error) {
            throw new Error('error on create category')
        }
    }
}