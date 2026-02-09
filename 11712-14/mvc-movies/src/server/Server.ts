import type { Application } from 'express'
import express from 'express'
import MovieView from '../movies/views/MovieView'

export default class Server {
  private readonly app: Application

  constructor(private readonly routers: MovieView[]) {
    this.app = express()
    this.routes()
  }

  private routes(): void {
    this.routers.forEach((router) => {
      this.app.use('/', router.router)
    })
  }

  readonly start = (): void => {
    this.app.listen(1802, () => {
      console.log('Server: http://localhost:1802')
    })
  }
}
