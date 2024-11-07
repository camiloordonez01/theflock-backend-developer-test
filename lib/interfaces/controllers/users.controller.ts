import { Request, Response, NextFunction } from 'express'
import { logger, ResponseHandler } from '../../infrastructure/handler'

import { Login } from '../../application/use_cases'

const file = 'users.controller.ts'
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        interface BodyInterface {
            email: string
            password: string
        }
        const { email, password }: BodyInterface = req.body

        next(new ResponseHandler(201, await Login(email, password)))
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file,
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}
