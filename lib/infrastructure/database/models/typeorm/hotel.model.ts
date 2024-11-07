import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from './model'

@Entity('hotels')
class HotelModel extends Model {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    stars: string

    constructor(
        id: number,
        name: string,
        address: string,
        stars: string,
    ) {
        super()
        this.id = id
        this.name = name
        this.address = address
        this.stars = stars
    }
}

export default HotelModel
