import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from './model'

@Entity('users')
class UserModel extends Model {
    @PrimaryGeneratedColumn({ name: 'id' })
    userId: number

    @Column()
    email: string

    @Column()
    password: string

    constructor(
        userId: number,
        email: string,
        password: string,
    ) {
        super()
        this.userId = userId
        this.email = email
        this.password = password
    }
}

export default UserModel
