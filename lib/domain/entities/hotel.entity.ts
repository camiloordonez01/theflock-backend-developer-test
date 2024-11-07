import Entity from './entity'

class HotelEntity extends Entity {
    id: number
    name: string
    address: string
    stars: string
    constructor(hotelEntity: HotelEntity) {
        super(hotelEntity)
        this.id = hotelEntity.id
        this.name = hotelEntity.name
        this.address = hotelEntity.address
        this.stars = hotelEntity.stars
    }
}

export default HotelEntity
