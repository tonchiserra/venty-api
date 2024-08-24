import { Router } from 'express'
import { sanitizeInput, add, getOne, getAll, update, remove } from './event.controller'

const eventRouter = Router()

eventRouter.post('/events', sanitizeInput, add)
eventRouter.get('/events/:id', getOne)
eventRouter.get('/events', getAll)
eventRouter.put('/events/:id', sanitizeInput, update)
eventRouter.delete('/events/:id', remove)
    
export { eventRouter }