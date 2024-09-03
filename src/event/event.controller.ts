import { ExpressMiddleware } from '../config/AppInterface.js'
import { EventRepository } from './event.repository.js'
import { Event } from './event.entity.js'

const repository = new EventRepository()

const sanitizeInput: ExpressMiddleware = async (_, __, next) => {
    next()
}

const add: ExpressMiddleware = async (req, res, _) => {
    const event = new Event({...req.body})
    const newEvent = await repository.add(event)

    res.status(201).json({ message: 'Event created', data: newEvent })
}

const getOne: ExpressMiddleware = async (req, res, _) => {
    const id = req.params.id
    const event = await repository.getOne({ id })

    if(!!!event) return res.status(404).json({ message: 'Event not found' })

    res.status(200).json({ message: 'Event found', data: event })
}

const getAll: ExpressMiddleware = async (_, res, __) => {
    const allEvents = await repository.getAll()
    
    if(!!!allEvents || !!!allEvents.length) return res.status(404).json({ message: 'No events found' })

    res.status(200).json({ message: 'Events found', data: allEvents })
}

const update: ExpressMiddleware = async (req, res, __) => {
    const event = new Event({...req.body.payload})
    const newEvent = await repository.update(event)

    if(!!!newEvent) return res.status(404).json({ message: 'Event not found' })
    
    res.status(200).json({ message: 'Event updated', data: newEvent })
}

const remove: ExpressMiddleware = async (req, res, _) => {
    const id = req.params.id
    const event = await repository.remove({ id })
    
    res.status(200).json({ message: 'Event deleted', data: event })
}

export { sanitizeInput, add, getOne, getAll, update, remove }