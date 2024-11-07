import { describe, it, expect, jest } from '@jest/globals'

import Login from '../Login'
import messages from '../../../../messages'

jest.mock('../../common/utils.common')
jest.mock('../../../interfaces/storage/mysql')

describe('Login', () => {
    it('Login successful', async () => {
        const response = await Login("orarjuan@hotmail.com", "Camilo20*")
        expect(response).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzA5OTI3MTF9.3oaWfOi4ragEwnxF3jOu_aaAFBUe4n6e1uEa7oOXIpM")
    })

    it('Login denied', async () => {
        expect(Login("orarjuan@gmail.com", "Camilo20*")).rejects.toThrow(messages.users.LOGIN_FAILED)
    })
})