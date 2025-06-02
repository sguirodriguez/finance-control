
import { Category } from "../../../domain/entities/category";
import { ICategoryRepository } from "./category.repository";

let categoryMemoryLeak: Category[] = []
export class CategoryRepositoryPrisma implements ICategoryRepository {
    public static build() {
        return new CategoryRepositoryPrisma()
    }

    findById(id: string) {
        const memoryCategory = categoryMemoryLeak.find((item) => item.id === id)

        const category = Category.build(memoryCategory)

        return category
    }

    save(category: Category) {
        const hasCategory = categoryMemoryLeak.find(item => item.id === category.id)

        if (hasCategory) {
            return
        }

        categoryMemoryLeak.push(category)

        return category
    }

    list() {
        return categoryMemoryLeak
    }

    update(category: Category) {
        const categoryFoundedIndex = categoryMemoryLeak.findIndex((item) => item.id === category.id)
        if (categoryFoundedIndex === -1 || categoryFoundedIndex < 0) {
            return
        }

        const newCategory = Category.build({
            id: category.id,
            name: category.name,
            type: category.type
        })

        categoryMemoryLeak[categoryFoundedIndex] = newCategory

        return
    }

    delete(id: string) {
        const index = categoryMemoryLeak.findIndex((item) => item.id === id)

        if (index !== -1) {
            categoryMemoryLeak.splice(index, 1);
        }
        return
    }

}