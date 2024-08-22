import express from 'express'
import cors from 'cors'
// import serverless from 'serverless-http'

import { config } from './config/config.js'
import { exampleRouter } from './example/example.routes.js'

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
        this.app.use(cors({ origin: config.APP.ALLOWED_ORIGINGS }))
    }

    private routes() {
        // Add here your routes
        this.app.use('/example', exampleRouter)
        this.app.use('/*', (_, res) => res.sendStatus(404))
    }

    public listen() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log(`Server running on http://localhost:${this.PORT}`)
        })
    }
}

const server = new Server()
if(config.APP.IS_DEV) server.listen()

// export const handler = serverless(server.app)