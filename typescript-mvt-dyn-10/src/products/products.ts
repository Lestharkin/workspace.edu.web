import express, { Application } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import ProductsRouter from './router/ProductsRouter'
import ProductsModel from './model/ProductsModel'
import ProductsView from './view/ProductsView'
import morgan from 'morgan'

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
    this.products.set('view engine', 'ejs')
    this.products.set('views', path.join(__dirname, './template'))
    this.products.use(express.static(path.join(__dirname, './public')))
    this.products.use(express.urlencoded({ extended: false }))
    this.products.use(morgan('tiny'))
  }

  route = (): void => {
    this.products.use('/', this.productsRouter.router)
  }

  start = (): void => {
    const PORT = process.env.PORT ?? 3000
    const HOST = process.env.HOST ?? 'localhost'
    this.products.listen(PORT, () => {
      console.info(`SERVER: http://${HOST}:${PORT}`)
    })
  }
}

const server = new Server(new ProductsRouter(new ProductsView(new ProductsModel())))
server.start()
