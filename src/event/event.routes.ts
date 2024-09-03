import { Router } from 'express'
import { sanitizeInput, add, getOne, getAll, update, remove } from './event.controller.js'

const eventRouter = Router()

eventRouter.post('/', sanitizeInput, add)
eventRouter.get('/:id', getOne)
eventRouter.get('/', getAll)
eventRouter.put('/:id', sanitizeInput, update)
eventRouter.delete('/:id', remove)
    
export { eventRouter }