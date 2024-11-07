import { EntityTarget, ObjectLiteral, Repository } from 'typeorm'
import DataBaseMysql from '../../../infrastructure/database/mysql'
import { Storage } from '../types'

class StorageMysql implements Storage {
    protected database: DataBaseMysql
    protected repository: Repository<ObjectLiteral>

    constructor(entity: EntityTarget<ObjectLiteral>) {
        this.database = DataBaseMysql.createConnection()
        this.repository = this.database.getRepository(entity)
    }

    async get<T>(id: number): Promise<T> {
        const entity = await this.repository.findOneBy({ id, activeRow: '1' })

        return entity as T
    }

    async getAll<T>(): Promise<T[]> {
        const results = await this.repository.findBy({ activeRow: '1' })

        return results.length > 0 ? (results as T[]) : []
    }

    async save(entity: unknown) {
        const result = await this.repository.save(entity as ObjectLiteral)

        return result
    }

    async update(id: unknown, entity: unknown) {
        const result = await this.repository.update(id as number, entity as ObjectLiteral)

        return result
    }
}

export default StorageMysql
