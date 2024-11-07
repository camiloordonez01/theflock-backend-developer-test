import { Column } from 'typeorm'

class Model {
    @Column({ name: 'active_row', default: '1' })
    activeRow?: boolean

    @Column({ name: 'created_at' })
    createdAt?: string

    @Column({ name: 'updated_at' })
    updatedAt?: string

    constructor(activeRow?: boolean, createdAt?: string, updatedAt?: string) {
        this.activeRow = activeRow
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export default Model
