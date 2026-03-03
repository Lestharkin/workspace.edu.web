import type { Application } from 'express'
import express from 'express'
import ApiRouter from '../../../domain/model/ApiRouter'
import EnvironmentProviderInterface from '../../../domain/config/EnvironmentProviderInterface'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly env: EnvironmentProviderInterface,
    private readonly routers: ApiRouter[],
  ) {
    this.app = express()
    this.routes()
    this.configure()
  }

  private configure(): void {
    this.app.use(express.json())
  }

  private routes(): void {
    this.routers.forEach((router) => {
      this.app.use('/', router.router)
    })
  }

  readonly start = (): void => {
    this.app.listen(this.env.getPort(), () => {
      console.log(`Server: http://${this.env.getHost()}:${this.env.getPort()}`)
    })
  }
}
