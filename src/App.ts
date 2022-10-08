import express from 'express'

class App {
    public express

    constructor () {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes() {
        const router = express.Router()
        router.get('/hello', (req, res) => {
            res.json({
                message: `Hello ${req.query.name ?? "World By Default"}`
            })
        })
        this.express.use('/', router)
    }
}

export default new App().express