import { UserStorage } from '../../interfaces/storage/mysql/types'
import Repository from './repository'

class UserRepository {
    protected storage: UserStorage
    constructor(userStorage: UserStorage) {
        this.storage = userStorage
    }

    getUserByEmail(email: string) {
        return this.storage.getUserByEmail(email)
    }
}

export default UserRepository
