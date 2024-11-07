import { Request, Response, NextFunction } from 'express'
import { ErrorHandler, ResponseHandler, logger } from '../../infrastructure/handler'

import { HotelUseCase } from '../../application/use_cases'

import messages from '../../../messages'

class HotelController {
    protected declare useCase: HotelUseCase
    public file: string
    constructor() {
        this.useCase = new HotelUseCase()
        this.file = 'hotels.controller.ts'
    }

    async get(request: Request, response: Response, next: NextFunction) {
        try {
            interface ParamInterface {
                id?: number
            }
            const { id }: ParamInterface = request.params
            if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

            next(new ResponseHandler(201, await this.useCase.get(id)))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async getAll(request: Request, response: Response, next: NextFunction) {
        try {
            next(new ResponseHandler(201, await this.useCase.getAll()))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            next(new ResponseHandler(201, await this.useCase.create(request.body)))
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            interface ParamInterface {
                id?: number
            }
            const { id }: ParamInterface = request.params
            if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

            next(new ResponseHandler(201, await this.useCase.update(id, request.body)))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        try {
            interface ParamInterface {
                id?: number
            }
            const { id }: ParamInterface = request.params
            if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

            next(new ResponseHandler(201, await this.useCase.delete(id)))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }
}

export default HotelController
