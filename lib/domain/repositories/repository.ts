import { Storage } from '../../interfaces/storage/types'

class Repository {
    protected storage: Storage
    constructor(userStorage: Storage) {
        this.storage = userStorage
    }

    get<T>(id: number) {
        return this.storage.get<T>(id)
    }

    getAll<T>() {
        return this.storage.getAll<T>()
    }

    save(entity: unknown) {
        return this.storage.save(entity)
    }

    update(id: unknown, entity: unknown) {
        return this.storage.update(id, entity)
    }
}

export default Repository
