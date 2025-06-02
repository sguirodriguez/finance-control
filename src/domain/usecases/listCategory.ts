import { Category } from "../entities/category";

export interface IListCategory {
    execute(): Promise<Category[]>
}