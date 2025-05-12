import express,{ Request, Response } from 'express'
import { createCategoryController } from '../useCases/category/create';
import { listCategoryController } from '../useCases/category/list';



const router = express.Router();

router.post('/', (request: Request, response: Response) =>{
     createCategoryController.handle(request, response)
    return
})

router.get('/', (request: Request, response: Response) =>{
    listCategoryController.handle(request, response)
   return
})

export default router