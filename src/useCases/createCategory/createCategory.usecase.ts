import { ICategoryRepository } from "../../repositories/categoryRepository/category.repository";
import { ICreateCategoryUseCase, ICreateCategoryCreateRequestDTO } from "./createCategory";

export class CreateCategoryUseCase implements ICreateCategoryUseCase{
    constructor(private categoryRepository: ICategoryRepository){}

    public static build(categoryRepository: ICategoryRepository){
        return new CreateCategoryUseCase(categoryRepository)
    }

    async execute(category: ICreateCategoryCreateRequestDTO): Promise<void> {
        const hasCategory = this.categoryRepository.findById(category.id)
        if(!hasCategory){
            return 
        }
        const categoryCreated = this.categoryRepository.save(category)
        return categoryCreated
    }
}