import express, { Request, Response } from 'express'
import { createUserController } from '../useCases/user/create'
import { updateUserController } from '../useCases/user/update'
import { deleteUserController } from '../useCases/user/delete'
import { listUserController } from '../useCases/user/list'

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    listUserController.handle(req, res)
    return
})

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