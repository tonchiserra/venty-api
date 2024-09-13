import { ExpressMiddleware } from '../config/AppInterface.js'
import { EventRepository } from './event.repository.js'
import { Event, IEvent, IEventDate } from './event.entity.js'
import uuid4 from "uuid4"

const repository = new EventRepository()

const sanitizeInput: ExpressMiddleware = async (req, _, next) => {
    const sanitizedDates: IEventDate[] = !!!req.body.dates ? undefined : req.body.dates.map((date: IEventDate) => {
        let sanitizedDate: IEventDate = {
            id: date.id,
            date: date.date,
            startsAt: date.startsAt,
            endsAt: date.endsAt,
            totalTickets: date.totalTickets,
            availableTickets: date.availableTickets,
            price: date.price
        }

        return sanitizedDate
    })

    const sanitizedInput: IEvent = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        dates: sanitizedDates,
        location: req.body.location,
        companyId: req.body.companyId,
        categories: req.body.categories,
        status: req.body.status,
        cta: req.body.cta
    }

    Object.keys(sanitizedInput).forEach((key) => {
        if (Object(sanitizedInput)[key] === undefined) {
            delete Object(sanitizedInput)[key]
        }
    })

    req.body.payload = sanitizedInput

    next()
}

const add: ExpressMiddleware = async (req, res, _) => {
    const event = new Event({...req.body.payload})
    event.id = uuid4()
    const newEvent = await repository.add(Object.assign({}, event))

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
    const newEvent = await repository.update(Object.assign({}, event))

    if(!!!newEvent) return res.status(404).json({ message: 'Event not found' })
    
    res.status(200).json({ message: 'Event updated', data: newEvent })
}

const remove: ExpressMiddleware = async (req, res, _) => {
    const id = req.params.id
    const event = await repository.remove({ id })
    
    res.status(200).json({ message: 'Event deleted', data: event })
}

export { sanitizeInput, add, getOne, getAll, update, remove }