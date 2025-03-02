import express from 'express'
import cors from 'cors'
import serverless from 'serverless-http'
import multer from 'multer'

import { config } from './config/config.js'
import { checkJwt } from './helpers/checkJwt.js'
import { eventRouter } from './event/event.routes.js'
import { userRouter } from './user/user.routes.js'
import { uploadImages } from './helpers/images.js'

const upload = multer({ storage: multer.memoryStorage() })

class Server {
    public app: express.Application
    public PORT: number

    constructor() {
        this.app = express()
        this.PORT = config.APP.PORT
        this.config()
        this.routes()
    }

    private config() {
        this.app.set('PORT', this.PORT)
        this.app.use(express.json())
        // this.app.use(cors({ origin: config.APP.ALLOWED_ORIGINGS }))
        this.app.use(cors())
    }

    private routes() {
        this.app.use('/events', eventRouter)
        // this.app.use('/users', userRouter)
        this.app.post('/images', checkJwt, upload.any(), uploadImages)
        this.app.use('/*', (_, res) => res.sendStatus(404))
    }

    public listen() {
        this.app.listen(this.app.get('PORT'), '0.0.0.0', () => {
            console.log(`Server running on http://localhost:${this.PORT}`)
        })
    }
}

const server = new Server()
if(config.APP.IS_DEV) server.listen()

export const handler = serverless(server.app)