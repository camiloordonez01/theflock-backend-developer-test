import Entity from './entity'

class UserEntity extends Entity {
    userId: number
    email: string
    password: string
    constructor(userEntity: UserEntity) {
        super(userEntity)
        this.userId = userEntity.userId
        this.email = userEntity.email
        this.password = userEntity.password
    }
}

export default UserEntity
