import express, { Application } from 'express'
import path from 'path'
import AbstractRouter from '../../../../domain/model/AbstractRouter'
import ServerProvider from '../provider/ServerProvider'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly env: ServerProvider,
    private readonly routers: AbstractRouter[]
  ) {
    this.app = express()
    this.configure()
    this.static()
    this.routes()
  }

  private readonly configure = (): void => {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private readonly routes = (): void => {
    this.routers.forEach((router) => {
      router.attach(this.app)
    })
  }

  private readonly static = (): void => {
    this.app.use(express.static(path.join(__dirname, this.env.STATIC_DIR())))
  }

  readonly start = (): void => {
    const port = this.env.PORT()
    this.app.listen(port, () => {
      console.log(`Server is running on http://${this.env.HOST()}:${port}`)
    })
  }
}
