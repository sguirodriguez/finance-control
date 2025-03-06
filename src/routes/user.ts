import express, { Request, Response } from 'express'
import { createUserController } from '../useCases/createUser'

const router = express.Router()

router.post("/user", (req: Request, res: Response) => {
    createUserController.handle(req, res)
    return
})

export default router