import { ExpressMiddleware } from '../config/AppInterface'
import { UserRepository } from './user.repository'
import { User } from './user.entity'

const repository = new UserRepository()

const sanitizeInput: ExpressMiddleware = async (req, res, next) => {
    next()
}

const add: ExpressMiddleware = async (req, res, next) => {
    const user = new User({...req.body.payload})
    const newUser = await repository.add(user)

    res.status(201).json({ message: 'User created', data: newUser })
}

const getOne: ExpressMiddleware = async (req, res, next) => {
    const id = req.params.id
    const user = await repository.getOne({ id })

    if(!!!user) return res.status(404).json({ message: 'User not found' })

    res.status(200).json({ message: 'User found', data: user })
}

const getAll: ExpressMiddleware = async (req, res, next) => {
    const allUsers = await repository.getAll()
    
    if(!!!allUsers.length) return res.status(404).json({ message: 'No users found' })

    res.status(200).json({ message: 'Users found', data: allUsers })
}

const update: ExpressMiddleware = async (req, res, next) => {
    const id = req.params.id
    const user = new User({...req.body.payload})
    const newUser = await repository.update({ id }, user)

    if(!!!newUser) return res.status(404).json({ message: 'User not found' })
    
    res.status(200).json({ message: 'User updated', data: newUser })
}

const remove: ExpressMiddleware = async (req, res, next) => {
    const id = req.params.id
    const user = await repository.remove({ id })
    
    if(!!!user) return res.status(404).json({ message: 'User not found' })
    
    res.status(200).json({ message: 'User deleted', data: user })
}

export { sanitizeInput, add, getOne, getAll, update, remove }