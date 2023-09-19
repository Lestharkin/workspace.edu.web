import express, { Application } from 'express'

class Server {
  products: Application

  constructor () {
    this.products = express()
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
