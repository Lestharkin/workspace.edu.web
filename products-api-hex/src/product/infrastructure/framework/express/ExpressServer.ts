import express, { Application } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import ProductRouter from './router/ProductRouter'
import ErrorRouter from './router/ErrorRouter'

export default class ExpressServer {
  products: Application

  constructor (private readonly productRouter: ProductRouter, private readonly errorRouter: ErrorRouter) {
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
    this.products.use(morgan('tiny'))
    this.products.use(helmet())
  }

  route = (): void => {
    this.products.use('/', this.productRouter.router)
    this.products.use('*', this.errorRouter.router)
  }

  start = (): void => {
    const PORT = process.env.PORT ?? 3000
    const HOST = process.env.HOST ?? 'localhost'
    this.products.listen(PORT, () => {
      console.info(`SERVER: http://${HOST}:${PORT}`)
    })
  }
}
