import express, { Request, Response } from 'express'
import { createUserController } from '../useCases/createUser'
import { updateUserController } from '../useCases/updateUser'
import { deleteUserController } from '../useCases/deleteUser'

const router = express.Router()

router.post("/", (req: Request, res: Response) => {
    createUserController.handle(req, res)
    return
})

router.put("/", (req: Request, res: Response) => {
    updateUserController.handle(req, res)
    return
})

router.delete("/", (req: Request, res: Response) => {
    deleteUserController.handle(req, res)
    return
})

export default router