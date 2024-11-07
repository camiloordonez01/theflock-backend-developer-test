import StorageMysql from './storage'

import { HotelModel } from '../../../infrastructure/database/models/typeorm'

class HotelStorage extends StorageMysql {
    constructor() {
        super(HotelModel)
    }
}

export default HotelStorage
