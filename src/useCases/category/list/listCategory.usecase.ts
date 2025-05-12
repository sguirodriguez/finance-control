import { ICategoryRepository } from "../../../repositories/categoryRepository/category.repository";
import { IListCategory } from "./listCategory";

export class ListCategoryUsecase implements IListCategory{
    constructor(private categoryRepository: ICategoryRepository){}

    public static build(categoryRepository: ICategoryRepository){
        return new ListCategoryUsecase(categoryRepository)
    }

    async execute(){
        return await this.categoryRepository.list()
    }
}