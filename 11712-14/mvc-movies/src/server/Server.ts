import type { Application } from 'express'
import express from 'express'
import MovieView from '../movies/views/MovieView'

export default class Server {
  private readonly app: Application

  constructor(private readonly routers: MovieView[]) {
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
    const PORT = process.env['PORT'] ?? 1802
    const HOST = process.env['HOST'] ?? 'localhost'

    this.app.listen(PORT, () => {
      console.log(`Server: http://${HOST}:${PORT}`)
    })
  }
}
