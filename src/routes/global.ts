import express, { Request, Response } from 'express'


const router = express.Router()

router.get('/health', (_req: Request, res: Response) => {

    res.status(201).json({ status: "Server running" });
    return
})

export default router