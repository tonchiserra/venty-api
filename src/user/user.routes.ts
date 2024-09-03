import { Router } from 'express'
import { sanitizeInput, add, getOne, getAll, update, remove } from './user.controller.js'

const userRouter = Router()

userRouter.post('/', sanitizeInput, add)
userRouter.get('/:id', getOne)
userRouter.get('/', getAll)
userRouter.put('/:id', sanitizeInput, update)
userRouter.delete('/:id', remove)
    
export { userRouter }