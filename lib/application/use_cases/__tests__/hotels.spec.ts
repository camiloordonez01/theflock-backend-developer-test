import { describe, it, expect, jest } from '@jest/globals'

import HotelUseCase from '../hotel'
import messages from '../../../../messages'

jest.mock('../../../interfaces/storage/mysql')

const hotelUseCase = new HotelUseCase()

describe('Hotel Use Case', () => {
    it('Get error', async () => {
        expect(hotelUseCase.get(1)).rejects.toThrow(messages.system.ERROR_NOT_FOUNT)
    })
    it('Get successful', async () => {
        const response = await hotelUseCase.get(2)
        expect(response).toEqual({
            id: 2,
            name: "Hotel #2",
            address: "Direción 2",
            stars: 3
        })
    })
    it('Get all successful', async () => {
        const response = await hotelUseCase.getAll()
        expect(response).toEqual([
            {
                id: 2,
                name: "Hotel #2",
                address: "Direción 2",
                stars: 3
            },
            {
                id: 3,
                name: "Hotel #3",
                address: "Direción 3",
                stars: 2
            }
        ])
    })
    it('Create successful', async () => {
        const response = await hotelUseCase.create({
            id: 1,
            name: "Hotel #1",
            address: "Direción 1",
            stars: 3
        })
        expect(response).toEqual({
            id: 1,
            name: "Hotel #1",
            address: "Direción 1",
            stars: 3
        })
    })

    it('Update error', async () => {
        expect(hotelUseCase.update(1, {
            id: 1,
            name: "Hotel #1",
            address: "Direción 1",
            stars: '3'
        })).rejects.toThrow(messages.system.ERROR_NOT_FOUNT)
    })

    it('Update successful', async () => {
        const response = await hotelUseCase.update(2, {
            id: 2,
            name: "Hotel #2",
            address: "Direción 2",
            stars: '3'
        })
        expect(response).toEqual({
            id: 2,
            name: "Hotel #2",
            address: "Direción 2",
            stars: '3'
        })
    })
    it('Delete error', async () => {
        expect(hotelUseCase.delete(1)).rejects.toThrow(messages.system.ERROR_NOT_FOUNT)
    })

    it('Delete successful', async () => {
        const response = await hotelUseCase.delete(2)
        expect(response).toEqual(2)
    })
})