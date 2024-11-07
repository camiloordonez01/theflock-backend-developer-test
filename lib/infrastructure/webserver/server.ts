import 'reflect-metadata'
import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV ?? 'local'}` })
import { handleResponse, handleError, ErrorHandler } from '../../infrastructure/handler'

import messages from '../../../messages'

import RouterMain from './routes/index.routes'

const { PORT } = process.env

class Server {
    public app: Application
    private port: number

    constructor() {
        this.app = express()
        this.port = Number(PORT) ?? 3000
        this.middleware()
        this.routes()
        this.noFound()
        this.handler()
    }

    private middleware() {
        this.app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] }))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))

        this.app.disable('x-powered-by')
    }

    private routes() {
        this.app.use(RouterMain)
    }

    private handler() {
        this.app.use((data: unknown, _: Request, res: Response, next: NextFunction) => handleResponse(data, res, next))
        this.app.use((err: any, _: Request, res: Response, __: NextFunction) => handleError(err, res))
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Listening on: http://localhost:${this.port}`))
    }

    private noFound() {
        // No Found
        this.app.use((req, res, next) => {
            try {
                throw new ErrorHandler(404, messages.system.ERROR_NOT_FOUNT)
            } catch (error) {
                next(error)
            }
        })
    }
}

export default Server
