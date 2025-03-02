import { Router } from 'express'
import { sanitizeInput, add, getOne, getAll, update, remove } from './event.controller.js'
import { checkJwt } from '../helpers/checkJwt.js'

const eventRouter = Router()

eventRouter.post('/', checkJwt, sanitizeInput, add)
eventRouter.get('/:id', getOne)
eventRouter.get('/', getAll)
eventRouter.put('/:id', checkJwt, sanitizeInput, update)
eventRouter.delete('/:id', checkJwt, remove)
    
export { eventRouter }