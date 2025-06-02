import { Category, CategoryType } from "../entities/category";


export interface ICreateCategoryCreateRequestDTO {
    name: string;
    type: CategoryType;
}

export interface ICreateCategoryUseCase {
    execute(category: ICreateCategoryCreateRequestDTO): Promise<Category>;
}