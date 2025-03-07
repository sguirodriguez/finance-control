import express, { Request, Response } from 'express'
import { createUserController } from '../useCases/createUser'
import { updateUserController } from '../useCases/updateUser'

const router = express.Router()

router.post("/user", (req: Request, res: Response) => {
    createUserController.handle(req, res)
    return
})

router.put("/user", (req: Request, res: Response) => {
    updateUserController.handle(req, res)
    return
})

export default router