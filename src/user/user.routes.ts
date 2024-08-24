import { Router } from 'express'
import { sanitizeInput, add, getOne, getAll, update, remove } from './user.controller'

const userRouter = Router()

userRouter.post('/users', sanitizeInput, add)
userRouter.get('/users/:id', getOne)
userRouter.get('/users', getAll)
userRouter.put('/users/:id', sanitizeInput, update)
userRouter.delete('/users/:id', remove)
    
export { userRouter }