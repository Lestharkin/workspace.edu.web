import express, { Application } from 'express'
import ServerProvider from '../provider/ServerProvider'
import AbstractRouter from '../../../../domain/model/AbstractRouter'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly env: ServerProvider,
    private readonly routers: AbstractRouter[]
  ) {
    this.app = express()
    this.configure()
    this.routes()
  }

  readonly routes = (): void => {
    this.routers.forEach((router) => {
      this.app.use(router.router)
    })
  }

  readonly configure = (): void => {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  readonly start = (): void => {
    const port = this.env.PORT()
    this.app.listen(port, () => {
      console.log(`Server is running on http://${this.env.HOST()}:${port}`)
    })
  }
}
