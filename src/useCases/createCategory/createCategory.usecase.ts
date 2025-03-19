import { Category } from "../../entities/category";
import { ICategoryRepository } from "../../repositories/categoryRepository/category.repository";
import { ICreateCategoryUseCase, ICreateCategoryCreateRequestDTO } from "./createCategory";

export class CreateCategoryUseCase implements ICreateCategoryUseCase{
    constructor(private categoryRepository: ICategoryRepository){}

    public static build(categoryRepository: ICategoryRepository){
        return new CreateCategoryUseCase(categoryRepository)
    }

    async execute(category: ICreateCategoryCreateRequestDTO): Promise<Category[]> {
        const buildCategory = Category.build(category)
        const categoryCreated = this.categoryRepository.save(buildCategory)
        return categoryCreated
    }
}