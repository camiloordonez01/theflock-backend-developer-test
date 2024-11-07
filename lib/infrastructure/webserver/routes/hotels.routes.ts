import { validateToken } from '../../../application/common/utils.common'
import express from 'express'
import HotelController from 'interfaces/controllers/hotels.controller'


const hotelController = new HotelController()

const HotelsRouter = express.Router()

// Get all
HotelsRouter.get('/', validateToken, (req, res, next) => hotelController.getAll(req, res, next))

// Get By Id
HotelsRouter.get('/:id', validateToken, (req, res, next) => hotelController.get(req, res, next))

// Create
HotelsRouter.post('/', validateToken, (req, res, next) => hotelController.create(req, res, next))

// Update
HotelsRouter.put('/:id', validateToken, (req, res, next) => hotelController.update(req, res, next))

// Delete
HotelsRouter.delete('/:id', validateToken, (req, res, next) => hotelController.delete(req, res, next))

export default HotelsRouter
