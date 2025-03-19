import { Category } from "../../entities/category";

type CategoryType = "income" | "expense"

export interface ICreateCategoryCreateRequestDTO {
    name: string;
    type: CategoryType;
}

export interface ICreateCategoryUseCase{
    execute(category: ICreateCategoryCreateRequestDTO): Promise<Category[]>;
}