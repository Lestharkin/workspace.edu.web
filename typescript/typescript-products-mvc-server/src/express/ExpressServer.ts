import express, { Application } from 'express'
import ProductView from '../view/ProductView'
import ErrorView from '../view/ErrorView'

export default class ExpressServer {
  private readonly app: Application

  constructor (
    private readonly productView: ProductView,
    private readonly errorView: ErrorView
  ) {
    this.app = express()
    this.config()
    this.routes()
  }

  config = () => {
    this.app.use(express.json())  
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes = () => {
    this.app.use('/', this.productView.router)
    this.app.use('*', this.errorView.router)
  }

  start () {
    const PORT = process.env['PORT'] ?? 1802
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }
}
