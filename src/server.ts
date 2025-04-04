import express from 'express'
import { ApiExpress } from './api/express/api.express'

const app = express()
app.use(express.json())
const server = ApiExpress.build(app)

server.start(7777)
server.initRoutes()


