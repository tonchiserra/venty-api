import { ExpressMiddleware } from '../config/AppInterface.js'
import { ExampleRepository } from './example.repository.js'

const repository = new ExampleRepository()

const exampleControllerFunction: ExpressMiddleware = async (req, res) => {
    try {
        let success: boolean = true
        let response = await repository.exampleRepositoryFunction()

        return res.json({
            success,
            status: 200,
            message: response
        })

    }catch(error: any) {
        return res.status(500).json({
            message: error.message,
            success: false,
            error: JSON.stringify(error)
        })
    }
}

export { exampleControllerFunction }