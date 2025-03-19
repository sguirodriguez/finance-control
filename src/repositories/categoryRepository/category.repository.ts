import { Category } from "../../entities/category";

export interface ICategoryRepository {
    findById(id:string):Promise<Category>;
    save(category: Category): Promise<Category[]>;
    list(): Promise<Category[]>;
    update(category: Category): Promise<void>;
    delete(id: string): Promise<void>;
}