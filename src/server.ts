import express from 'express'
import { ApiExpress } from './api/express/api.express'

const app = express()
app.use(express.json())
const server = ApiExpress.build(app)

server.start(3333)
server.initRoutes()


