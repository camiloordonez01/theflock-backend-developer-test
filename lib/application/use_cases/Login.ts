import { ErrorHandler } from '../../infrastructure/handler'

import { UserStorage } from '../../interfaces/storage/mysql'
import { UserRepository } from '../../domain/repositories'
import { generateMd5, generateToken } from '../common/utils.common'

import messages from '../../../messages'

const userRepository = new UserRepository(new UserStorage())

export default async (email: string, password: string) => {
    const passwordMd5 = generateMd5(password)

    const doesExistEmail = await userRepository.getUserByEmail(email)
    if (!doesExistEmail || passwordMd5 !== doesExistEmail.password) {
        throw new ErrorHandler(401, messages.users.LOGIN_FAILED)
    }

    return generateToken({})
}