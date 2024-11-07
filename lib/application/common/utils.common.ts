import crypto from 'crypto'
import jwt from 'jsonwebtoken'

import { ErrorHandler } from '../../infrastructure/handler'
import { Request, Response, NextFunction } from 'express'
import messages from '../../../messages'

const { SECRET_KEY_JWT } = process.env

/**
 * Convert text to md5 encryption
 * @param {string} data Text to convert to md5
 * @returns
 */
export const generateMd5 = (text: string) => {
    return crypto.createHash('md5').update(text).digest('hex')
}

/**
 * Generate the user token
 * @param {string} data Information for the token
 * @returns
 */
export const generateToken = (data: object) => {
    return jwt.sign(data, SECRET_KEY_JWT ?? '12345678')
}

/**
 * Validate the token generated with jwt
 *
 * @author camilo.ordonez
 *
 */
export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization'] as string | undefined
        if (!token) throw new ErrorHandler(400, messages.system.TOKEN_ERROR)

        next()
    } catch (error) {
        throw new ErrorHandler(400, messages.system.TOKEN_ERROR)
    }
}
