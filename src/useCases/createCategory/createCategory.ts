type CategoryType = "income" | "expense"

export interface ICreateCategoryCreateRequestDTO {
    id: string;
    name: string;
    type: CategoryType;
}

export interface ICreateCategoryUseCase{
    execute(category: ICreateCategoryCreateRequestDTO): Promise<void>;
}