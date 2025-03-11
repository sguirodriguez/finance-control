import { Category } from "../../entities/category";

export interface ICategoryRepository {
    save(category: Category): Promise<void>;
    list(): Promise<Category[]>;
    update(category: Category): Promise<void>;
    delete(id: string): Promise<void>;
}