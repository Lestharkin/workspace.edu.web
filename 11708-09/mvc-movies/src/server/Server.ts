import type { Application } from 'express'
import express from 'express'
import AbstractRouter from './model/AbstractRouter'

export default class Server {
  private readonly app: Application

  constructor(private readonly routers: AbstractRouter[]) {
    this.app = express()
    this.routes()
  }

  private routes(): void {
    this.routers.forEach((router) => {
      this.app.use('/', router.router)
    })
  }

  readonly start = () => {
    this.app.listen(1802, () => {
      console.log('Server is running on port 1802')
    })
  }
}
