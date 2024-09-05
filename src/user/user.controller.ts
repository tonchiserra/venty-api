import { ExpressMiddleware } from '../config/AppInterface.js'
import { UserRepository } from './user.repository.js'
import { User, IUser} from './user.entity.js'
import uuid4 from "uuid4"

const repository = new UserRepository()

const sanitizeInput: ExpressMiddleware = async (req, _, next) => {
    const sanitizedInput: IUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        role: req.body.role,
        description: req.body.description,
        avatar: req.body.avatar,
        instagram: req.body.instagram,
        contactLink: req.body.contactLink,
        events: req.body.events
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
    const user = new User({...req.body.payload})
    user.id = uuid4()
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