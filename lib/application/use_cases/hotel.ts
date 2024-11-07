import { ErrorHandler } from '../../infrastructure/handler'

import { HotelRepository } from '../../domain/repositories'
import { HotelStorage } from '../../interfaces/storage/mysql'
import { HotelEntity } from '../../domain/entities'

import messages from '../../../messages'

class HotelUseCase {
    protected declare repository: HotelRepository
    constructor() {
        this.repository = new HotelRepository(new HotelStorage())
    }

    async get(id: number) {
        const entity = await this.repository.get<HotelEntity>(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        const { activeRow, createdAt, updatedAt, ...data } = entity
        return data
    }

    async getAll() {
        const entities = await this.repository.getAll<HotelEntity>()

        return entities.map((entity) => {
            const { activeRow, createdAt, updatedAt, ...data } = entity
            return data
        })
    }

    async create(data: unknown) {
        const entity = await this.repository.save(data)

        const { activeRow, createdAt, updatedAt, ...info } = entity as HotelEntity

        return info as Omit<HotelEntity, 'activeRow' | 'createdAt' | 'updatedAt'>
    }

    async update(id: number, newEntity: HotelEntity) {
        let entity = await this.repository.get(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        await this.repository.update(id, { ...entity, ...newEntity })

        const { activeRow, createdAt, updatedAt, ...data } = { ...entity, ...newEntity }
        return data
    }

    async delete(id: number) {
        let entity = await this.repository.get(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        await this.repository.update(id, { ...entity, activeRow: '0' })

        return id
    }
}

export default HotelUseCase
