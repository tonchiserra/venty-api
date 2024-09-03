import { ExpressMiddleware } from '../config/AppInterface.js'
import { UserRepository } from './user.repository.js'
import { User } from './user.entity.js'

const repository = new UserRepository()

const sanitizeInput: ExpressMiddleware = async (_, __, next) => {
    next()
}

const add: ExpressMiddleware = async (req, res, _) => {
    const user = new User({...req.body})
    const newUser = await repository.add(user)

    res.status(201).json({ message: 'User created', data: newUser })
}

const getOne: ExpressMiddleware = async (req, res, _) => {
    const id = req.params.id
    const user = await repository.getOne({ id })

    if(!!!user) return res.status(404).json({ message: 'User not found' })

    res.status(200).json({ message: 'User found', data: user })
}

const getAll: ExpressMiddleware = async (_, res, __) => {
    const allUsers = await repository.getAll()
    
    if(!!!allUsers || !!!allUsers.length) return res.status(404).json({ message: 'No users found' })

    res.status(200).json({ message: 'Users found', data: allUsers })
}

const update: ExpressMiddleware = async (req, res, _) => {
    const user = new User({...req.body.payload})
    const newUser = await repository.update(user)

    if(!!!newUser) return res.status(404).json({ message: 'User not found' })
    
    res.status(200).json({ message: 'User updated', data: newUser })
}

const remove: ExpressMiddleware = async (req, res, _) => {
    const id = req.params.id
    const user = await repository.remove({ id })
    
    res.status(200).json({ message: 'User deleted', data: user })
}

export { sanitizeInput, add, getOne, getAll, update, remove }