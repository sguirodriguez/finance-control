import { CategoryRepositoryPrisma } from "../../../repositories/categoryRepository/category.repository.prisma";
import { ListCategoryController } from "./listCategory.controller";
import { ListCategoryUsecase } from "./listCategory.usecase";

const categoryRepository = CategoryRepositoryPrisma.build()
const listCategoryUsecase = ListCategoryUsecase.build(categoryRepository)
const listCategoryController = ListCategoryController.build(listCategoryUsecase)

export { listCategoryUsecase, listCategoryController }