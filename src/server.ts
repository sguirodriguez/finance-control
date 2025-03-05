import express from 'express'
import { ApiExpress } from './api/express/api.express'

const app = express()

const apiExpress = ApiExpress.build(app)

apiExpress.start(3000)
apiExpress.initRoutes()