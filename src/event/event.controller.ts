import { ExpressMiddleware } from '../config/AppInterface'
import { EventRepository } from './event.repository'
import { Event } from './event.entity'

const repository = new EventRepository()

const sanitizeInput: ExpressMiddleware = async (req, res, next) => {
    next()
}

const add: ExpressMiddleware = async (req, res, next) => {
    const event = new Event({...req.body.payload})
    const newEvent = await repository.add(event)

    res.status(201).json({ message: 'Event created', data: newEvent })
}

const getOne: ExpressMiddleware = async (req, res, next) => {
    const id = req.params.id
    const event = await repository.getOne({ id })

    if(!!!event) return res.status(404).json({ message: 'Event not found' })

    res.status(200).json({ message: 'Event found', data: event })
}

const getAll: ExpressMiddleware = async (req, res, next) => {
    const allEvents = await repository.getAll()
    
    if(!!!allEvents.length) return res.status(404).json({ message: 'No events found' })

    res.status(200).json({ message: 'Events found', data: allEvents })
}

const update: ExpressMiddleware = async (req, res, next) => {
    const id = req.params.id
    const event = new Event({...req.body.payload})
    const newEvent = await repository.update({ id }, event)

    if(!!!newEvent) return res.status(404).json({ message: 'Event not found' })
    
    res.status(200).json({ message: 'Event updated', data: newEvent })
}

const remove: ExpressMiddleware = async (req, res, next) => {
    const id = req.params.id
    const event = await repository.remove({ id })
    
    if(!!!event) return res.status(404).json({ message: 'Event not found' })
    
    res.status(200).json({ message: 'Event deleted', data: event })
}

export { sanitizeInput, add, getOne, getAll, update, remove }