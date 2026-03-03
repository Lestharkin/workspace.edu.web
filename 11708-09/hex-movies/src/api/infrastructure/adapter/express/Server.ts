import type { Application } from 'express'
import express from 'express'
import ApiRouter from '../../../domain/model/ApiRouter'
import EnvironmentLoader from '../../../domain/env/EnvironmentLoader'
export default class Server {
  private readonly app: Application

  constructor(
    private readonly env: EnvironmentLoader,
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
    this.app.listen(this.env.port(), () => {
      console.log(`Server: http://${this.env.host()}:${this.env.port()}`)
    })
  }
}
