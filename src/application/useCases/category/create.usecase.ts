


import { ICreateCategoryCreateRequestDTO } from "../../../domain/controllers/category.controller";
import { Category } from "../../../domain/entities/category";
import { ICreateCategoryUseCase } from "../../../domain/usecases/createCategory";
import { ICategoryRepository } from "../../../infra/repositories/categoryRepository/category.repository";

export class CreateCategoryUseCase implements ICreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    public static build(categoryRepository: ICategoryRepository) {
        return new CreateCategoryUseCase(categoryRepository)
    }

    async execute(category: ICreateCategoryCreateRequestDTO): Promise<Category> {
        const buildCategory = Category.build(category)
        const categoryCreated = this.categoryRepository.save(buildCategory)
        return categoryCreated
    }
}