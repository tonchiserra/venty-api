import { Router } from 'express'

import { exampleControllerFunction  } from './example.controller.js'

const exampleRouter = Router()

exampleRouter.get('/example-fn', exampleControllerFunction)
    
export { exampleRouter }