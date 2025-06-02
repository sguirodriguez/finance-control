import { Category } from "../../../domain/entities/category";

export interface ICategoryRepository {
    findById(id:string): Category;
    save(category: Category): Category;
    list(): Category[];
    update(category: Category): void;
    delete(id: string): void;
}