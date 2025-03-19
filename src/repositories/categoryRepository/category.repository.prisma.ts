import { Category } from "../../entities/category";
import { ICategoryRepository } from "./category.repository";

let categoryMemoryLeak: Category[] = []

export class CategoryRepositoryPrisma implements ICategoryRepository {
    public static build(){
        return new CategoryRepositoryPrisma()
    }

    async findById(id: string): Promise<Category> {
        const category = categoryMemoryLeak.find((item)=>item.id===id)
        return category
    }

    async save(category: Category) {
        const hasCategory = categoryMemoryLeak.find(item=>item.id === category.id)
        if(!hasCategory){
            return
        }
        categoryMemoryLeak.push(category)

        return categoryMemoryLeak
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