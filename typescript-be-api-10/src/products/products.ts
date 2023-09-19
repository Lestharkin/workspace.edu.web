import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'

class Server {
  products: Application

  constructor () {
    this.products = express()
    this.config()
  }

  config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.products.use(express.json())
    this.products.use(express.urlencoded({ extended: true }))
  }

  start = (): void => {
    const PORT = process.env.PORT ?? 3000
    const HOST = process.env.HOST ?? 'localhost'
    this.products.listen(PORT, () => {
      console.info(`SERVER: http://${HOST}:${PORT}`)
    })
  }
}

const server = new Server()
server.start()
