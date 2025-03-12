import express,{ Request, Response } from 'express'
import { createCategoryController } from '../useCases/createCategory';

const router = express.Router();

router.post('/', (request: Request, response: Response) =>{
     createCategoryController.handle(request, response)
    return
})

export default router