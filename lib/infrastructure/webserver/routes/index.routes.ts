import express from 'express'

import UsersRouter from './users.routes'
import HotelsRouter from './hotels.routes'

const RouterMain = express.Router()

RouterMain.use('/users', UsersRouter)
RouterMain.use('/hotels', HotelsRouter)

export default RouterMain
