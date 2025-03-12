import { CategoryRepositoryPrisma } from "../../repositories/categoryRepository/category.repository.prisma";
import { CreateCategoryController } from "./createCategory.controller";
import { CreateCategoryUseCase } from "./createCategory.usecase";

const categoryRepository = CategoryRepositoryPrisma.build();
const createCategoryUseCase = CreateCategoryUseCase.build(categoryRepository);
const createCategoryController = CreateCategoryController.build(createCategoryUseCase);

export { createCategoryController, createCategoryUseCase }