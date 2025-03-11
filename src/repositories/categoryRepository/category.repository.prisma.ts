import { Category } from "../../entities/category";
import { ICategoryRepository } from "./category.repository";

let categoryMemoryLeak: Category[] = []

export class CategoryRepositoryPrisma implements ICategoryRepository {
    constructor() {

    }
    async save(category: Category) {
        const hasCategory = categoryMemoryLeak.find((item) => item.id === category.id)

        if (hasCategory) {
            return
        }
        categoryMemoryLeak.push(category)
        return
    }

    async list() {
        return categoryMemoryLeak
    }

    async update(category: Category): Promise<void> {
        const categoryFoundedIndex = categoryMemoryLeak.findIndex((item) => item.id === category.id)
        if (categoryFoundedIndex === -1 || categoryFoundedIndex < 0) {
            return
        }
        categoryMemoryLeak[categoryFoundedIndex].name = category.name ? category.name : categoryMemoryLeak[categoryFoundedIndex].name;
        categoryMemoryLeak[categoryFoundedIndex].type = category.type ? category.type : categoryMemoryLeak[categoryFoundedIndex].type;
        categoryMemoryLeak[categoryFoundedIndex].date = category.date ? category.date : categoryMemoryLeak[categoryFoundedIndex].date;

        return
    }

    async delete(id: string): Promise<void> {
        const index = categoryMemoryLeak.findIndex((item) => item.id === id)

        if (index !== -1) {
            categoryMemoryLeak.splice(index, 1);
        }

        return
    }

}