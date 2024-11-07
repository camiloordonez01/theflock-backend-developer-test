import { HotelStorage } from '../../interfaces/storage/mysql/types'
import Repository from './repository'

class HotelRepository extends Repository {
    protected storage: HotelStorage
    constructor(hotelStorage: HotelStorage) {
        super(hotelStorage)
        this.storage = hotelStorage
    }
}

export default HotelRepository
