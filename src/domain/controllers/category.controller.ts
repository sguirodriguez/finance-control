import { Category, CategoryType } from "../entities/category";

export interface ICreateCategoryCreateRequestDTO {
    name: string;
    type: CategoryType;
}

export interface ICategoryController {
    create(dto: ICreateCategoryCreateRequestDTO): Promise<Category>;
    list(): Promise<Category[]>
}


