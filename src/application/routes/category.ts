import express, { Request, Response } from 'express'
import { CategoryController } from '../controllers/category/category.controller';
import { CategoryRepositoryPrisma } from '../../infra/repositories/categoryRepository/category.repository.prisma';

const categoryRepository = CategoryRepositoryPrisma.build()
const categoryController = new CategoryController(categoryRepository)

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    const category = await categoryController.create(req.body)
    res.json(category)
})

router.get('/', async (req: Request, res: Response) => {
    const category = await categoryController.list()
    res.json(category)

})

export default router