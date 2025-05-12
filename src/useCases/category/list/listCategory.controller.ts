import {Request, Response} from 'express'
import { IListCategory } from './listCategory'

export class ListCategoryController {
    constructor(private listCategoryUseCase: IListCategory){}

    public static build(listCategoryUseCase: IListCategory){
        return new ListCategoryController(listCategoryUseCase)
    }

    async handle(request: Request, response: Response){
        try {
            const categories = await this.listCategoryUseCase.execute()
            response.status(201).json({ categories })
        } catch (error) {
            throw new Error('error on create category')
        }
    }
}