import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { logger, ErrorHandler } from '../../infrastructure/handler'

import messages from '../../../messages'
import regexs from '../../../regexs'

/**
 * Validate the information when login
 *
 * @author camilo.ordonez
 *
 */
const loginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(regexs.REGEX_PASSWORD).required(),
        })

        // validate request body against schema
        const { error } = schemaBody.validate(req.body)

        if (error) {
            for (let element of error.details) {
                switch (element.context?.key) {
                    case 'email':
                        if (element.type === 'any.required') {
                            throw new ErrorHandler(400, messages.users.EMAIL_REQUIRED)
                        } else if (element.type === 'string.email') {
                            throw new ErrorHandler(400, messages.users.EMAIL_INVALID)
                        }
                        break
                    case 'password':
                        if (element.type === 'any.required') {
                            throw new ErrorHandler(400, messages.users.PASSWORD_REQUIRED)
                        } else if (element.type === 'string.pattern.base') {
                            throw new ErrorHandler(400, messages.users.PASSWORD_INVALID)
                        }
                        break
                }
            }
        }

        next()
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file: 'Login.middleware.ts',
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}
export default loginMiddleware
