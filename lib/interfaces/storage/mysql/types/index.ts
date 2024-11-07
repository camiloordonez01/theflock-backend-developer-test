import { UserEntity } from '../../../../domain/entities'
import StorageMysql from '../storage'

export interface UserStorage extends StorageMysql {
    getUserByEmail: (email: string) => Promise<UserEntity | null>
}

export interface HotelStorage extends StorageMysql {}