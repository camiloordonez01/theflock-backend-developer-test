import express from 'express'

import { login } from '../../../interfaces/controllers/users.controller'

import { LoginMiddleware } from '../../../interfaces/middleware'

const UsersRouter = express.Router()
/**
 * @openapi
 * '/login':
 *  post:
 *     tags:
 *     - Login
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: Camilo20*
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
UsersRouter.post('/login', LoginMiddleware, login)

export default UsersRouter
