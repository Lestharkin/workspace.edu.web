import cors from 'cors'
import express, { Application } from 'express'
import path from 'path'
import ProductsRouter from '../products/router/ProductsRouter'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly productsRouter: ProductsRouter
  ) {
    this.app = express()
    this.statics()
    this.config()
    this.routes()
  }

  public config = (): void => {
    this.app.set('view engine', 'ejs')
    this.app.set('views', path.join(__dirname, '../products/template'))
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(cors())
  }

  public statics = (): void => {
    this.app.use(express.static(path.resolve(__dirname, '../products/public')))
  }

  public routes = (): void => {
    this.app.use('/', cors(), this.productsRouter.router)
  }

  public start = (): void => {
    const PORT = process.env['PORT'] ?? 3000
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
