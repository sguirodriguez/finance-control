import { ICategoryController } from "../../../domain/controllers/category.controller";
import { ICategoryRepository } from "../../../infra/repositories/categoryRepository/category.repository";

import { CreateCategoryUseCase } from "../../useCases/category/create.usecase";
import { ListCategoryUsecase } from "../../useCases/category/list.usecase";


export class CategoryController implements ICategoryController {
    private createCategory: CreateCategoryUseCase;
    private listCategory: ListCategoryUsecase;

    constructor(
        private readonly categoryRepository: ICategoryRepository
    ) {
        this.createCategory = CreateCategoryUseCase.build(this.categoryRepository)
        this.listCategory = ListCategoryUsecase.build(this.categoryRepository)
    }

    async create(params) {
        return await this.createCategory.execute(params)
    }

    async list() {
        return await this.listCategory.execute()
    }
}