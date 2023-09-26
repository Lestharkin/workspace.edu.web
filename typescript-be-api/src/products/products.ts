import express, { Application } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import ProductsRouter from './route/ProductsRouter'
import ProductsController from './controller/ProductsController'
import ProductsModel from './model/ProductsModel'
class Server {
  products: Application

  constructor (private readonly productsRouter: ProductsRouter) {
    this.products = express()
    this.config()
    this.route()
  }

  config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.products.use(express.json())
    this.products.use(express.urlencoded({ extended: true }))
  }

  route = (): void => {
    this.products.use('/', this.productsRouter.router)
    this.products.use('*', this.productsRouter.router)
  }

  start = (): void => {
    const PORT = process.env.PORT ?? 3000
    const HOST = process.env.HOST ?? 'localhost'
    this.products.listen(PORT, () => {
      console.info(`SERVER: http://${HOST}:${PORT}`)
    })
  }
}

const server = new Server(new ProductsRouter(new ProductsController(new ProductsModel())))
server.start()
